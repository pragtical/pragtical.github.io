import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {prepareWebIsolation} from '../utils/webIsolation.mjs';
import styles from './try-it.module.css';

const ImportIcon = require('@mdi/svg/svg/file-upload-outline.svg').default;
const DownloadIcon = require('@mdi/svg/svg/download.svg').default;
const ResetIcon = require('@mdi/svg/svg/refresh.svg').default;
const FullscreenIcon = require('@mdi/svg/svg/fullscreen.svg').default;

export default function TryIt() {
  const frame = useRef(null);
  const surface = useRef(null);
  const input = useRef(null);
  const [ready, setReady] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const [status, setStatus] = useState('Loading editor...');
  const source = useBaseUrl('/try/editor.html');
  const workerUrl = useBaseUrl('/try-isolation.js');
  const workerScope = useBaseUrl('/try');

  useEffect(() => {
    let active = true;
    prepareWebIsolation(workerUrl, workerScope).then(isolated => {
      if (active && isolated !== null) setPrepared(true);
    });
    return () => { active = false; };
  }, [workerUrl, workerScope]);

  useEffect(() => {
    // Leaving an isolated document through SPA navigation would retain COEP
    // on unrelated pages and could block their cross-origin images or videos.
    function leave(event) {
      if (!window.crossOriginIsolated || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      const link = event.target.closest('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      event.preventDefault();
      window.location.assign(url.href);
    }
    document.addEventListener('click', leave, true);
    return () => document.removeEventListener('click', leave, true);
  }, []);

  useEffect(() => {
    function receive(event) {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow || event.data?.source !== 'pragtical-web') return;
      const message = event.data;
      if (message.type === 'ready') { setReady(true); setStatus(message.threaded ? 'WebAssembly · threaded' : 'WebAssembly · single-threaded'); }
      if (message.type === 'status' || message.type === 'error') setStatus(message.text);
      if (message.type === 'error') setReady(false);
      if (message.type === 'download') {
        const url = URL.createObjectURL(new Blob([message.text], {type: 'text/plain;charset=utf-8'}));
        const link = document.createElement('a');
        link.href = url;
        link.download = message.name.split(/[\\/]/).pop() || 'untitled.txt';
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }
    }
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, []);

  function send(message) { frame.current?.contentWindow?.postMessage(message, window.location.origin); }
  async function importFile(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setStatus('Import text files smaller than 2 MB.'); return; }
    try {
      const text = await file.text();
      if (text.includes('\0')) { setStatus('Only text files can be imported.'); return; }
      send({type: 'import', name: file.name, text});
    } catch { setStatus('Could not read that file.'); }
  }
  function reset() {
    if (!window.confirm('Reset the editor? All files and changes in this demo will be lost.')) return;
    setReady(false);
    setStatus('Loading editor...');
    if (frame.current) frame.current.src = source;
  }

  return <Layout title="Try It" description="Try the actual Pragtical editor in your browser with WebAssembly.">
    <main ref={surface} className={styles.surface}>
      <div className={styles.toolbar}>
        <h1>Try Pragtical</h1>
        <span className={styles.status} role="status">{status}</span>
        <div className={styles.actions}>
          <input ref={input} type="file" hidden onChange={importFile} aria-label="Import a text file"/>
          <button title="Import a text file" aria-label="Import a text file" disabled={!ready} onClick={() => input.current.click()}><ImportIcon aria-hidden="true"/><span>Import</span></button>
          <button title="Download the active document" aria-label="Download the active document" disabled={!ready} onClick={() => send({type: 'download'})}><DownloadIcon aria-hidden="true"/><span>Download</span></button>
          <button title="Reset the temporary workspace" aria-label="Reset the temporary workspace" onClick={reset}><ResetIcon aria-hidden="true"/><span>Reset</span></button>
          <button title="Full screen" aria-label="Full screen" onClick={() => {
            const action = document.fullscreenElement ? document.exitFullscreen() : surface.current.requestFullscreen?.();
            action?.catch(() => setStatus('Full screen is not available in this browser.'));
          }}><FullscreenIcon aria-hidden="true"/></button>
        </div>
      </div>
      {prepared && <iframe ref={frame} className={styles.editor} src={source} title="Pragtical WebAssembly editor" allow="clipboard-read; clipboard-write; fullscreen"/>}
    </main>
  </Layout>;
}
