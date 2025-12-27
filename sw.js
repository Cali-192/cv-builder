const CACHE_NAME = 'pro-cv-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './cv.css',
  './cv.js',
  './manifest.json'
];

// Instalimi i Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Duke ruajtur file-at në cache...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktivizimi dhe pastrimi i cache-ve të vjetra
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Marrja e të dhënave (Përdorimi Offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );

});
