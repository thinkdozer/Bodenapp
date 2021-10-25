var cacheName = "my-cache";

// list of static assets
var myCache = [
  "./Brennprobe.html",
  "./Fragen.html",
  "./index.html",
  "./index.manifest",
  "./michelsenlogo.jpg",
  "./pH-Bestimmung.html",
  "./Probenahme.jpg",
  "./service-worker.js",
  "./service-worker.js.bak",
  "./style.css",
  "./values.js",
  "./logos/apple-icon-180.png",
  "./logos/apple-splash-1125-2436.jpg",
  "./logos/apple-splash-1136-640.jpg",
  "./logos/apple-splash-1170-2532.jpg",
  "./logos/apple-splash-1242-2208.jpg",
  "./logos/apple-splash-1242-2688.jpg",
  "./logos/apple-splash-1284-2778.jpg",
  "./logos/apple-splash-1334-750.jpg",
  "./logos/apple-splash-1536-2048.jpg",
  "./logos/apple-splash-1620-2160.jpg",
  "./logos/apple-splash-1668-2224.jpg",
  "./logos/apple-splash-1668-2388.jpg",
  "./logos/apple-splash-1792-828.jpg",
  "./logos/apple-splash-2048-1536.jpg",
  "./logos/apple-splash-2048-2732.jpg",
  "./logos/apple-splash-2160-1620.jpg",
  "./logos/apple-splash-2208-1242.jpg",
  "./logos/apple-splash-2224-1668.jpg",
  "./logos/apple-splash-2388-1668.jpg",
  "./logos/apple-splash-2436-1125.jpg",
  "./logos/apple-splash-2532-1170.jpg",
  "./logos/apple-splash-2688-1242.jpg",
  "./logos/apple-splash-2732-2048.jpg",
  "./logos/apple-splash-2778-1284.jpg",
  "./logos/apple-splash-640-1136.jpg",
  "./logos/apple-splash-750-1334.jpg",
  "./logos/apple-splash-828-1792.jpg",
  "./logos/manifest-icon-144.maskable.png",
  "./logos/manifest-icon-192.maskable.png",
  "./logos/manifest-icon-512.maskable.png"
];


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(myCache)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})


/*
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
*/
