// Only register this worker with the /try scope, not the whole website.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || event.request.method !== 'GET') return;
  const scope = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  const path = url.pathname.replace(/\/$/, '');
  if (!scope.endsWith('/try') || !(path === scope || path === scope + '-it' || path === scope + '-it.html' || path.startsWith(scope + '/'))) return;
  event.respondWith((async () => {
    const response = await fetch(event.request);
    if (response.type === 'opaque' || response.status === 0) return response;
    const headers = new Headers(response.headers);
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
    headers.set('Cross-Origin-Resource-Policy', 'same-origin');
    if (event.request.mode === 'navigate') headers.set('Cache-Control', 'no-store');
    return new Response(response.body, {status: response.status, statusText: response.statusText, headers});
  })());
});
