/**
 * 1. Install event
 *
 * If this install event does not be triggered, it may be because the service worker has been installed already.
 * To install again, you must change this file or in debugger tool -> application -> service worker -> Unregister
 */
self.addEventListener('install', (event) => {
    // This event is triggered if this file changes
    console.log('Service worker has been installed', event);
});

/**
 * 2. Activate event
 *
 * If this activate event does not be triggered, it may be because the service worker has been installed already.
 * In debugger tool -> application -> service, you will see the service worker is waiting for activate
 * Browser does not automatically re-activate installed service. To solve this, there are two solutions:
 * 1. Close the tab, and reopen it in another tab.
 * 2. In debugger tool -> application -> service, click on "skipWaiting" or have "Update on reload" selected
 */
self.addEventListener('activate', (event) => {
    console.log('Service worker has been activated', event);
});

/**
 * 3. Fetch event
 */
self.addEventListener('fetch', (event) => {
    console.log('fetch event', event);
});
