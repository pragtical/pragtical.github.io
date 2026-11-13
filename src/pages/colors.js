import React, {useEffect, useMemo, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import {useHistory, useLocation} from '@docusaurus/router';
import {colorsRepository, fetchManifest, loadTheme} from '../utils/colorThemes.mjs';
import styles from './colors.module.css';

const SearchIcon = require('@mdi/svg/svg/magnify.svg').default;
const CheckIcon = require('@mdi/svg/svg/check.svg').default;
const SourceIcon = require('@mdi/svg/svg/open-in-new.svg').default;
const RefreshIcon = require('@mdi/svg/svg/refresh.svg').default;
const EditorSvg = require('@site/static/img/colors/editor.svg').default;

function EditorPreview({palette, name}) {
  const colors = {};
  for (const [key, value] of Object.entries(palette)) {
    if (key === 'syntax') {
      for (const [token, color] of Object.entries(value)) colors[`--editor-syntax-${token}`] = color;
    } else colors[`--editor-${key}`] = value;
  }
  return <EditorSvg className={styles.editor} style={colors} role="img" aria-label={`${name} editor color preview`}/>;
}

export default function Colors() {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const selectedId = params.get('color') || 'onedark';
  const query = params.get('q') || '';
  const category = ['dark', 'light'].includes(params.get('category')) ? params.get('category') : 'all';
  const [themes, setThemes] = useState([]);
  const [manifestError, setManifestError] = useState('');
  const [loading, setLoading] = useState(true);
  const [revision, setRevision] = useState(0);
  const [preview, setPreview] = useState(null);
  const [previewError, setPreviewError] = useState('');
  const [previewLoading, setPreviewLoading] = useState(false);
  const cache = useRef(new Map());

  function navigate(changes, replace = false) {
    const next = new URLSearchParams(location.search);
    Object.entries(changes).forEach(([key, value]) => value && value !== 'all' ? next.set(key, value) : next.delete(key));
    const search = next.toString();
    const nextSearch = search ? `?${search}` : '';
    if (nextSearch === location.search) return;
    history[replace ? 'replace' : 'push']({pathname: location.pathname, search: nextSearch, hash: location.hash});
  }

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setManifestError('');
    fetchManifest(colorsRepository, controller.signal).then(addons => {
      if (!addons) throw new Error('The colors manifest could not be found.');
      const colors = addons.filter(addon => addon.type === 'color' && typeof addon.id === 'string');
      colors.sort((a, b) => (a.name || a.id).localeCompare(b.name || b.id));
      setThemes(colors);
    }).catch(error => {
      if (!controller.signal.aborted) setManifestError(error.message);
    }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [revision]);

  const selected = themes.find(theme => theme.id === selectedId) || (!params.has('color') ? themes[0] : null);
  useEffect(() => {
    if (!selected) { setPreview(null); return undefined; }
    const controller = new AbortController();
    setPreview(null);
    setPreviewError('');
    setPreviewLoading(true);
    const request = cache.current.has(selected.id)
      ? Promise.resolve(cache.current.get(selected.id))
      : loadTheme(selected, {signal: controller.signal});
    request.then(result => {
      if (!controller.signal.aborted) {
        cache.current.set(selected.id, result);
        setPreview(result);
      }
    }).catch(error => {
      if (!controller.signal.aborted) setPreviewError(error.message);
    }).finally(() => { if (!controller.signal.aborted) setPreviewLoading(false); });
    return () => controller.abort();
  }, [selected, revision]);

  const filtered = useMemo(() => themes.filter(theme =>
    (category === 'all' || theme.tags?.includes(category)) &&
    `${theme.name || ''} ${theme.id} ${(theme.tags || []).join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [themes, query, category]);
  const paletteUrl = id => `${colorsRepository.raw}previews/${encodeURIComponent(id)}.svg`;

  return <Layout title="Colors" description="Browse color themes for Pragtical and preview them in the editor.">
    <main className={`container ${styles.page}`}>
      <header className={styles.heading}><h1>Colors for Pragtical</h1><a href={colorsRepository.url}>Contribute a theme <SourceIcon aria-hidden="true"/></a></header>
      <section aria-label="Selected color theme" className={styles.preview}>
        <div className={styles.previewToolbar}>
          <div><h2>{selected?.name || selected?.id || (loading ? 'Loading colors…' : 'Color preview')}</h2>
            {selected && <span className={styles.metadata}>{selected.tags?.join(' / ')}{selected.version ? ` · v${selected.version}` : ''}</span>}
          </div>
          {selected && <img className={styles.selectedPalette} src={paletteUrl(selected.id)} alt={`${selected.name || selected.id} color palette`}/>}
          {preview && <a href={preview.source} target="_blank" rel="noreferrer">Theme source <SourceIcon aria-hidden="true"/></a>}
        </div>
        <div className={styles.previewCanvas} aria-busy={loading || previewLoading}>
          {preview && selected ? <EditorPreview palette={preview.palette} name={selected.name || selected.id}/> : <div className={styles.previewState} role="status">
            {manifestError || previewError || (!loading && !selected ? (themes.length ? `Color “${selectedId}” was not found.` : 'No colors available.') : 'Loading editor preview…')}
            {(manifestError || previewError) && <button className="button button--secondary button--sm" onClick={() => setRevision(value => value + 1)}><RefreshIcon aria-hidden="true"/> Retry</button>}
          </div>}
        </div>
      </section>
      <section className={styles.catalog} aria-label="Color themes">
        <div className={styles.filters}>
          <label className={styles.search}><SearchIcon aria-hidden="true"/>
            <input type="search" aria-label="Search colors" value={query} placeholder="Search colors…" onChange={event => navigate({q: event.target.value}, true)}/>
          </label>
          <div className={styles.categories} role="group" aria-label="Theme appearance">
            {['all', 'dark', 'light'].map(value => <button key={value} aria-pressed={category === value} onClick={() => navigate({category: value}, true)}>{value === 'all' ? 'All colors' : value === 'dark' ? 'Dark' : 'Light'}</button>)}
          </div>
          <span className={styles.count} role="status">{loading ? 'Loading…' : `${filtered.length} ${filtered.length === 1 ? 'color' : 'colors'}`}</span>
        </div>
        <ul className={styles.colors} aria-label="Available colors">
          {filtered.map(theme => <li key={theme.id}>
            <button className={styles.color} aria-pressed={selected?.id === theme.id} onClick={() => navigate({color: theme.id})}>
              <span className={styles.colorTitle}>{theme.name || theme.id}{selected?.id === theme.id && <CheckIcon aria-label="Selected"/>}</span>
              <img src={paletteUrl(theme.id)} alt={`${theme.name || theme.id} color palette`} loading="lazy" width="200" height="16"/>
              <span className={styles.metadata}>{theme.tags?.join(' / ')}{theme.version ? ` · v${theme.version}` : ''}</span>
            </button>
          </li>)}
        </ul>
        {!loading && !manifestError && filtered.length === 0 && <p className={styles.empty}>No colors match your search. <button className="button button--link" onClick={() => navigate({q: '', category: ''}, true)}>Clear filters</button></p>}
      </section>
    </main>
  </Layout>;
}
