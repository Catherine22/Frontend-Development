const STATIC_CACHE_NAME = 'static-v1';
const ASSETS_TO_PRECACHE = [
    '/' /* request URLs */,
    'index.html',
    '/js/',
    '/css/',
    'https://fonts.googleapis.com/icon?family=Material+Icons' /* CDN assets */,
];

/**
 * 1. Install event
 *
 * If this install event is not triggered, it may be because the service worker has been installed already.
 * To install again, you must change this file or in DevTool -> application -> service worker -> Unregister
 */
self.addEventListener('install', (event) => {
    // This event is triggered if this file has changed
    console.log('Service worker has been installed', event);

    // This install event is finished once the `event.waitUntil` has been resolved.
    event.waitUntil(
        // open STATIC_CACHE_NAME cache if exists.
        caches
            .open(STATIC_CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_PRECACHE))
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
 * A fetch event handler is needed to show a banner that prompts the user to click on "Add to Home Screen."
 */
self.addEventListener('fetch', (event) => {
    // respond from the cache
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // return caches if it exists. Otherwise, try networks
            return cachedResponse || fetch(event.request);
        })
    );
});

/**
 * Prompt users to install the app
 */
self.addEventListener('beforeinstallprompt', (event) => {
    // prevent Chrome 67 and earlier from automatically
    // showing the prompt
    event.preventDefault();
    // slash the event so it can be triggered later.
    deferredPrompt = event;
    // update UI notify the user they can
    // add to home screen
    btnAdd.style.display = 'block';
    // (optional) You might add the code below for debugging or analytics
    btnAdd.addEventListener('click', (event) => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

/**
 *
 */
