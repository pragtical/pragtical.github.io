(function () {
  'use strict';
  var canvas = document.getElementById('canvas');
  var status = document.getElementById('status');
  var editor;
  var exited = false;
  var threaded = window.crossOriginIsolated && typeof SharedArrayBuffer === 'function';
  var runtime = threaded ? 'threaded/' : '';
  function notify(type, data) {
    window.parent.postMessage(Object.assign({source: 'pragtical-web', type: type}, data), window.location.origin);
  }
  function fail(text) {
    status.textContent = text;
    status.hidden = false;
    notify('error', {text: text});
  }
  canvas.width = Math.max(320, window.innerWidth);
  canvas.height = Math.max(240, window.innerHeight);
  canvas.addEventListener('contextmenu', function (event) { event.preventDefault(); });
  canvas.addEventListener('pointerdown', function () { canvas.focus(); });
  function resize() {
    if (editor) editor.ccall('pragtical_web_resize', null, ['number', 'number'], [Math.max(240, innerWidth), Math.max(180, innerHeight)]);
  }
  window.addEventListener('resize', resize);
  window.addEventListener('error', function (event) { fail(event.message || 'The editor could not start.'); });
  window.addEventListener('pragtical-exit', function () { exited = true; editor = null; fail('Editor closed. Reset the demo to start again.'); });
  window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin || event.source !== window.parent || !editor) return;
    try {
      if (event.data?.type === 'import') {
        var name = String(event.data.name).split(/[\\/]/).pop();
        var text = event.data.text;
        if (!name || name === '.' || name === '..' || typeof text !== 'string' || text.length > 2 * 1024 * 1024) return;
        var path = '/playground/' + name;
        if (editor.FS.analyzePath(path).exists && !window.confirm('Replace ' + name + ' in the demo workspace?')) return;
        editor.FS.writeFile(path, text);
        editor.ccall('pragtical_web_open', null, ['string'], [path]);
        canvas.focus();
      } else if (event.data?.type === 'download') {
        var document = editor.ccall('pragtical_web_export', 'string', [], []);
        if (document) notify('download', JSON.parse(document));
        else notify('status', {text: 'Open a document before downloading.'});
      }
    } catch (error) { notify('status', {text: error.message}); }
  });
  var script = document.createElement('script');
  script.src = runtime + 'pragtical.js';
  script.onerror = function () { fail('The WebAssembly build is unavailable. Please try again later.'); };
  script.onload = async function () {
    try {
      editor = await createPragtical({
        canvas: canvas,
        arguments: ['/playground'],
        locateFile: function (path) { return runtime + path; },
        print: function (text) { console.log(text); },
        printErr: function (text) { console.warn(text); },
        setStatus: function (text) {
          if (text) { status.textContent = text; notify('status', {text: text}); }
        },
        onAbort: function () { fail('The editor stopped. Reset the demo to try again.'); },
      });
      if (exited) { editor = null; return; }
      status.hidden = true;
      resize();
      notify('ready', {threaded: threaded});
    } catch (error) { fail('Could not start Pragtical: ' + error.message); }
  };
  document.body.appendChild(script);
})();
