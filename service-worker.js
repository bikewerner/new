const CACHE_NAME = "bikewerner-pwa-v1";
const urlsToCache = [
    //"/new/index.html",
    //"/new/absolviertetouren.html",
    //"/new/ruhpolding.html",
    //"/new/ettal.html",
    //"/new/badwiessee.html",
    //"/new/bodenmais.html",
    //"/new/wernerstats.html",
    //"/new/assets/css/main.css",
    //"/new/assets/js/jquery.min.js",
    //"/new/assets/js/jquery.dropotron.min.js",
    //"/new/assets/js/jquery.scrolly.min.js",
    //"/new/assets/js/browser.min.js",
    //"/new/assets/js/breakpoints.min.js",
    //"/new/assets/js/util.js",
    //"/new/assets/js/main.js",
    //"/new/assets/js/wernerstats.js",
    "/new/offline.html" // Falls eine Offline-Seite erstellt wird
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request) || caches.match("/new/offline.html");
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
