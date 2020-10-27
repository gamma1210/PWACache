! function() {
  "use strict";
  const e = ["client/index.a15cf8eb.js", "client/client.6e93d47c.js"].concat(["service-worker-index.html", "android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon.png", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "global.css", "manifest.json"]),
      t = new Set(e);
  self.addEventListener("install", t => {
      t.waitUntil(caches.open("cache1602891945499").then(t => t.addAll(e)).then(() => {
          self.skipWaiting()
      }))
  }), self.addEventListener("activate", e => {
      e.waitUntil(caches.keys().then(async e => {
          for (const t of e) "cache1602891945499" !== t && await caches.delete(t);
          self.clients.claim()
      }))
  }), this.addEventListener('fetch', function (event) {
  let originalResponse;

  event.respondWith(async function () {
      const cache = await caches.open(cacheVersion)

      const cachedResponsePromise = await cache.match(event.request.clone())
      const networkResponsePromise = fetch(event.request)

      event.waitUntil(async function () {
          const networkResponse = await networkResponsePromise
          await cache.put(event.request.clone(), networkResponse.clone())
      }())

      return cachedResponsePromise || networkResponsePromise
  }());
  });
}
