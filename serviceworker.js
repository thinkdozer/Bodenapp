var cacheName = "my-cache";

// list of static assets
var myCache = [
  "./Brennprobe.html",
  "./Fragen.html",
  "./index.html",
  "./pH-Bestimmung.html",
  "./Probenahme.jpg",
  "./serviceworker.js",
  "./style.css",
  "./values.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        // if one item cannot be added to the cache
        // the whole operation will fail.
        return cache.addAll(myCache);
      })
      .catch((error) => {
        console.error(error);
        return false;
      })
  );
});

self.addEventListener("activate", (event) => {
  var cacheWhitelist = [cacheName];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // if our cache is out of date, delete it!
          // just update the name of your cache to triger this update
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
    caches.match(event.request)
     .then(response => {
       return response || fetch(event.request);
     })
     .catch(error => {
       return error;
     });
  );
});
