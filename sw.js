// This is the service worker with the basic caching setup

// Name of the cache
const cacheName = 'Youtube-TV-Cache-v1';

// List of files to be cached
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/icons/icon-72-72.png',
  '/icons/icon-72-72.png',
  '/icons/icon-96-96.png',
  '/icons/icon-128-128.png',
  '/icons/icon-144-144.png',
  '/icons/icon-192-192.png',
  '/icons/icon-512-512.png'
];

// Installing the service worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('[Service Worker] Caching App Shell');
        cache.addAll(filesToCache);
      })
  );
});

// Fetching the cached files
self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetching resource ...', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
