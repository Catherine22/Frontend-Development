const STATIC_CACHE_NAME = 'site-static';
const ASSETS = [
    '/' /* request URLs */,
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons' /* CDN assets */,
];

/**
 * 1. Install event
 *
 * If this install event does not be triggered, it may be because the service worker has been installed already.
 * To install again, you must change this file or in DevTool -> application -> service worker -> Unregister
 */
self.addEventListener('install', (event) => {
    // This event is triggered if this file changes
    console.log('Service worker has been installed', event);

    // This install event is finished when `event.waitUntil` is resolved.
    event.waitUntil(
        // open STATIC_CACHE_NAME cache if exists.
        caches.open(STATIC_CACHE_NAME).then((cache) => {
            cache.addAll(ASSETS);
        })
    );
});

/**
 * 2. Activate event
 *
 * If this activate event does not be triggered, it may be because the service worker has been installed already.
 * In DevTool -> application -> service, you will see the service worker is waiting for activate
 * Browser does not automatically re-activate installed service. To solve this, there are two solutions:
 * 1. Close the tab, and reopen it in another tab.
 * 2. In DevTool -> application -> service, click on "skipWaiting" or have "Update on reload" selected
 */
self.addEventListener('activate', (event) => {
    console.log('Service worker has been activated', event);
    event.waitUntil(
        caches.keys().then((keys) => {
            // Delete all old caches if exist
            return Promise.all(
                keys
                    .filter((key) => key !== STATIC_CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
        })
    );
});

/**
 * 3. Fetch event
 *
 * To meet the criteria to show a banner prompting user to "Add to Home Screen", fetch event handler is must-have.
 */
self.addEventListener('fetch', (event) => {
    // respond from the cache
    event.respondWith(
        caches.match(event.request).then((cacheRes) => {
            // cacheRes: This is either cache or empty if not found in ASSETS.
            return cacheRes || fetch(event.request);
        })
    );
});
