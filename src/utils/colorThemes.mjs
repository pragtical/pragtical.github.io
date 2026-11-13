import luaparse from 'luaparse';

export const colorsRepository = {
  url: 'https://github.com/pragtical/colors',
  raw: 'https://raw.githubusercontent.com/pragtical/colors/master/',
};

const defaults = {
  background: '#2c2c2c', background2: '#222222', background3: '#222222',
  text: '#C0BFBC', caret: '#87aade', accent: '#FCFCFC', dim: '#77767B',
  divider: '#181818', selection: '#424242', line_number: '#525259',
  line_number2: '#FCFCFC', line_highlight: '#3B3A3F', scrollbar: '#8d8d8d',
  scrollbar2: '#adadad', scrollbar_track: '#262626', good: '#47D35C',
  warn: '#FAA82F', error: '#c7162b', modified: '#19B6EE',
  search_selection: '#6a5acd', search_selection_text: '#ffffff',
  nagbar: '#DE374C', nagbar_text: '#F6F5F4',
  diff_delete: 'rgba(200,84,84,1)', diff_insert: 'rgba(77,127,73,1)',
  diff_modify: 'rgba(202,173,85,1)',
  syntax: {
    normal: '#C0BFBC', symbol: '#B0AFAC', comment: '#77767B', keyword: '#34B948',
    keyword2: '#EA485C', number: '#47c4f1', literal: '#F99B11', string: '#FBC16A',
    operator: '#ED764D', function: '#c590bf',
  },
};

function cssColor(value) {
  if (typeof value === 'string' && /^(#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})|rgba?\([\d.,\s]+\))$/i.test(value)) return value;
  if (Array.isArray(value) && value.length >= 3 && value.every(Number.isFinite)) {
    return `rgba(${value.slice(0, 3).join(',')},${(value[3] ?? 255) / 255})`;
  }
  return null;
}

// Read only data expressions, never run downloaded Lua or its require() calls.
export function parseTheme(source) {
  const tree = luaparse.parse(source, {encodingMode: 'x-user-defined'});
  const style = Object.assign(Object.create(null), defaults, {syntax: {...defaults.syntax}});
  const env = Object.create(null);
  env.style = style;
  let assignments = 0;
  let budget = 10000;
  const key = node => node.type === 'MemberExpression' ? node.identifier.name : read(node.index);
  function read(node) {
    if (!node || --budget < 0) throw new Error('This theme is too complex to preview.');
    switch (node.type) {
      case 'StringLiteral': case 'NumericLiteral': return node.value;
      case 'Identifier': return env[node.name];
      case 'MemberExpression': case 'IndexExpression': {
        const object = read(node.base);
        const name = key(node);
        return object && Object.hasOwn(object, name) ? object[name] : undefined;
      }
      case 'TableConstructorExpression': {
        if (node.fields.every(field => field.type === 'TableValue')) {
          const values = node.fields.map(field => read(field.value));
          return values.length === 1 && cssColor(values[0]) ? values[0] : values;
        }
        const result = Object.create(null);
        node.fields.forEach(field => {
          const name = field.type === 'TableKeyString' ? field.key.name : read(field.key);
          result[name] = read(field.value);
        });
        return result;
      }
      case 'StringCallExpression': case 'CallExpression': {
        const base = node.base;
        const args = node.type === 'StringCallExpression' ? [node.argument] : node.arguments;
        if (base.type === 'Identifier' && base.name === 'require') {
          return read(args[0]) === 'core.style' ? style : undefined;
        }
        if (base.type === 'MemberExpression' && base.base.name === 'common' && base.identifier.name === 'color') {
          return cssColor(read(args[0]));
        }
        if (base.type === 'MemberExpression' && base.base.name === 'math' && base.identifier.name === 'random') {
          const [min, max] = args.map(read);
          return Math.floor(min + Math.random() * (max - min + 1));
        }
        return undefined;
      }
      default: return undefined;
    }
  }
  function statements(body) {
    for (const node of body) {
      if (--budget < 0) throw new Error('This theme is too complex to preview.');
      if (node.type === 'LocalStatement' || node.type === 'AssignmentStatement') {
        const values = node.init.map(read);
        node.variables.forEach((target, index) => {
          const value = values[index];
          if (target.type === 'Identifier') env[target.name] = value;
          else if (target.type === 'MemberExpression' || target.type === 'IndexExpression') {
            const object = read(target.base);
            const name = key(target);
            if (object && !['__proto__', 'constructor', 'prototype'].includes(name) && value !== undefined) {
              object[name] = value;
              if (object === style && cssColor(value)) assignments++;
            }
          }
        });
      } else if (node.type === 'ForGenericStatement') {
        const iterator = node.iterators[0];
        if (iterator?.base?.name === 'pairs') {
          for (const [name, value] of Object.entries(read(iterator.arguments[0]) || {})) {
            env[node.variables[0].name] = name;
            if (node.variables[1]) env[node.variables[1].name] = value;
            statements(node.body);
          }
        }
      }
    }
  }
  statements(tree.body);
  if (!assignments) throw new Error('This theme does not contain previewable color assignments.');
  const palette = {};
  for (const [name, fallback] of Object.entries(defaults)) {
    if (name === 'syntax') {
      palette.syntax = Object.fromEntries(Object.entries(fallback).map(([token, color]) => [token, cssColor(style.syntax?.[token]) || color]));
    } else palette[name] = cssColor(style[name]) || fallback;
  }
  return palette;
}

export function remoteRepository(remote) {
  const match = /^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+?)(?:\.git)?(?::(.+))?$/.exec(remote);
  if (!match) throw new Error('This theme repository is not supported.');
  const [, owner, repo, ref = 'HEAD'] = match;
  return {url: `https://github.com/${owner}/${repo}`, raw: `https://raw.githubusercontent.com/${owner}/${repo}/${encodeURIComponent(ref)}/`};
}

function fileUrl(repository, path) {
  if (!path || path.split('/').some(part => part === '..') || /^[\w]+:/.test(path)) throw new Error('Invalid theme path.');
  return repository.raw + path.split('/').map(encodeURIComponent).join('/');
}

export async function fetchManifest(repository, signal, fetcher = fetch) {
  const response = await fetcher(repository.raw + 'manifest.json', {signal});
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Could not load the colors manifest. Please try again.');
  const manifest = await response.json();
  if (!Array.isArray(manifest.addons)) throw new Error('Invalid colors manifest.');
  return manifest.addons;
}

export async function loadTheme(theme, {signal, fetcher = fetch} = {}, repository = colorsRepository, visited = new Set()) {
  const identity = `${repository.raw}:${theme.id}`;
  if (visited.has(identity) || visited.size >= 8) throw new Error('Circular theme repository reference.');
  visited.add(identity);
  if (theme.remote) {
    const remote = remoteRepository(theme.remote);
    const addons = await fetchManifest(remote, signal, fetcher);
    const entry = addons?.find(addon => addon.id === theme.id && addon.type === 'color');
    if (addons && !entry) throw new Error('This color is missing from its repository manifest.');
    return loadTheme(entry || {id: theme.id, path: `colors/${theme.id}.lua`}, {signal, fetcher}, remote, visited);
  }
  let path = theme.path || `colors/${theme.id}.lua`;
  if (!path.endsWith('.lua')) path = path.replace(/\/$/, '') + '/init.lua';
  const url = fileUrl(repository, path);
  const response = await fetcher(url, {signal});
  if (!response.ok) throw new Error('Could not load this color theme. Please try again.');
  return {palette: parseTheme(await response.text()), source: url, repository: repository.url};
}
