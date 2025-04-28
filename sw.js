const CACHE_NAME = 'ek-v1';
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'scripts.js',
  'images/background-image.webp',
  'images/og-image.webp',
  'images/trailer.webp',
  'favicon.png'
];

self.addEventListener('install', e =>{
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e =>{
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e =>{
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
