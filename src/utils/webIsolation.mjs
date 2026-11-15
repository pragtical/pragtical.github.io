// A document reload is required: a service worker cannot isolate an open page.
export async function prepareWebIsolation(scriptUrl, scope) {
  const url = new URL(window.location.href);
  const key = '__pragtical_isolation';
  const retried = url.searchParams.has(key);
  if (retried) {
    url.searchParams.delete(key);
    window.history.replaceState(window.history.state, '', url.href);
  }
  if (window.crossOriginIsolated) {
    return true;
  }
  if (retried) return false;
  if (!window.isSecureContext || !navigator.serviceWorker) return false;
  const currentUrl = window.location.href;
  try {
    const registration = await navigator.serviceWorker.register(scriptUrl, {scope});
    const worker = registration.installing || registration.waiting || registration.active;
    if (!worker) return false;
    // Hard refresh bypasses the controller; SPA entry may originate outside
    // its scope. An activated registration can intercept the next navigation
    // in either case, without this document ever becoming controlled.
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => finish(new Error('Service worker activation timed out')), 8000);
      function finish(error) {
        clearTimeout(timer);
        worker.removeEventListener('statechange', changed);
        if (error) reject(error); else resolve();
      }
      function changed() {
        if (worker.state === 'activated') finish();
        else if (worker.state === 'redundant') finish(new Error('Service worker activation failed'));
      }
      worker.addEventListener('statechange', changed);
      changed();
    });
    if (window.location.href !== currentUrl) return false;
    // A URL marker survives COOP browsing-context changes reliably. Session
    // storage can restore an older renderer's marker after a hard refresh.
    url.searchParams.set(key, '1');
    window.location.replace(url.href);
    return null;
  } catch {
    return false;
  }
}
