import assert from 'node:assert/strict';
import {test} from 'node:test';
import {colorsRepository, fetchManifest, loadTheme, parseTheme, remoteRepository} from '../src/utils/colorThemes.mjs';

const theme = `
local style = require "core.style"
local common = require "core.common"
local palette = { base = { common.color "#112233" } }
style.background = palette.base
style.text = { 220, 230, 240, 128 }
style.syntax = {}
style.syntax["keyword"] = { common.color("#abcdef") }
style.diff_modify = { common.color "#aabbcc" }
local syntax = { ["string"] = { common.color "#ffaa00" } }
for key, value in pairs(syntax) do style.syntax[key] = value end
`;

function mockFetch(files, calls = []) {
  return async url => {
    calls.push(url);
    return files[url] === undefined ? new Response('', {status: 404}) : new Response(
      typeof files[url] === 'string' ? files[url] : JSON.stringify(files[url])
    );
  };
}

test('reads color tables, aliases, syntax overrides and finite pairs loops', () => {
  const palette = parseTheme(theme);
  assert.equal(palette.background, '#112233');
  assert.equal(palette.text, `rgba(220,230,240,${128 / 255})`);
  assert.equal(palette.syntax.keyword, '#abcdef');
  assert.equal(palette.syntax.string, '#ffaa00');
  assert.equal(palette.diff_modify, '#aabbcc');
  assert.ok(palette.syntax.comment);
});

test('does not execute arbitrary Lua or mutate JavaScript prototypes', () => {
  const palette = parseTheme(theme + '\nos.execute("never run")\nstyle.syntax.__proto__.polluted = 1');
  assert.equal(palette.background, '#112233');
  assert.equal({}.polluted, undefined);
  assert.throws(() => parseTheme('print("hello")'), /previewable/);
  assert.throws(() => parseTheme('not valid lua'), /expected/);
});

test('resolves pinned and unpinned GitHub repositories', () => {
  assert.equal(remoteRepository('https://github.com/owner/repo.git:abc123').raw, 'https://raw.githubusercontent.com/owner/repo/abc123/');
  assert.equal(remoteRepository('https://github.com/owner/repo').raw, 'https://raw.githubusercontent.com/owner/repo/HEAD/');
  assert.throws(() => remoteRepository('https://example.com/theme'), /not supported/);
});

test('loads a remote manifest and honors its custom path', async () => {
  const remote = remoteRepository('https://github.com/owner/theme.git:123');
  const calls = [];
  const result = await loadTheme({id: 'example', remote: 'https://github.com/owner/theme.git:123'}, {fetcher: mockFetch({
    [remote.raw + 'manifest.json']: {addons: [{id: 'example', type: 'color', path: 'src/theme.lua'}]},
    [remote.raw + 'src/theme.lua']: theme,
  }, calls)});
  assert.equal(result.palette.background, '#112233');
  assert.equal(result.source, remote.raw + 'src/theme.lua');
  assert.equal(calls.length, 2);
});

test('follows nested repository manifests', async () => {
  const first = remoteRepository('https://github.com/owner/first:1');
  const second = remoteRepository('https://github.com/owner/second:2');
  const result = await loadTheme({id: 'example', remote: 'https://github.com/owner/first:1'}, {fetcher: mockFetch({
    [first.raw + 'manifest.json']: {addons: [{id: 'example', type: 'color', remote: 'https://github.com/owner/second:2'}]},
    [second.raw + 'manifest.json']: {addons: [{id: 'example', type: 'color', path: 'theme.lua'}]},
    [second.raw + 'theme.lua']: theme,
  })});
  assert.equal(result.source, second.raw + 'theme.lua');
});

test('uses the conventional path only when the remote manifest is absent', async () => {
  const remote = remoteRepository('https://github.com/owner/theme:1');
  const result = await loadTheme({id: 'example', remote: 'https://github.com/owner/theme:1'}, {fetcher: mockFetch({
    [remote.raw + 'colors/example.lua']: theme,
  })});
  assert.equal(result.palette.background, '#112233');
  await assert.rejects(loadTheme({id: 'example', remote: 'https://github.com/owner/theme:1'}, {fetcher: mockFetch({
    [remote.raw + 'manifest.json']: {addons: []},
  })}), /missing/);
});

test('rejects cycles, invalid manifests, failed fetches and unsafe paths', async () => {
  const remote = remoteRepository('https://github.com/owner/theme:1');
  await assert.rejects(loadTheme({id: 'example', remote: 'https://github.com/owner/theme:1'}, {fetcher: mockFetch({
    [remote.raw + 'manifest.json']: {addons: [{id: 'example', type: 'color', remote: 'https://github.com/owner/theme:1'}]},
  })}), /Circular/);
  await assert.rejects(fetchManifest(colorsRepository, undefined, mockFetch({[colorsRepository.raw + 'manifest.json']: {}})), /Invalid/);
  await assert.rejects(loadTheme({id: 'example', path: '../theme.lua'}), /Invalid theme path/);
  await assert.rejects(loadTheme({id: 'missing'}, {fetcher: mockFetch({})}), /Could not load/);
});
