# PWA Sample App

Open a new window for the PWA folder and start the live server.

## Navigation

- [PWA Sample App](#pwa-sample-app)
  - [Navigation](#navigation)
  - [Configuration](#configuration)
  - [Workbox](#workbox)
  - [Cache Strategies](#cache-strategies)
    - [When to store resources](#when-to-store-resources)
  - [Reference](#reference)

## Configuration

1. In your main js file, you will need to register the service worker.

```JavaScript
/**
 * Not every browser supports service worker
 * Can I use...: https://caniuse.com/#search=service%20workers
 */
if ('serviceWorker' in navigator) {
    // Your browser supports service worker

    // 1. Register your service worker (asynchronous task)
    navigator.serviceWorker
        .register('sw.js')
        .then((reg) => console.log('Service worker has registered', reg))
        .catch((err) => console.warn('Service worker has NOT registered', err));
}

```

2. Create your service worker called sw.js. You will need to place the sw.js in the root of your app because the service worker's scope is determined by where it is.

3. You will first add an event listener to listen to the install event, where you set up precaches. The cache will be stored in Cache Storage.

In [sw.js]

```JavaScript
const STATIC_CACHE_NAME = 'static-v1';
const ASSETS_TO_PRECACHE = [
    '/' /* request URLs */,
    'index.html',
    '/js/',
    '/css/',
    'https://fonts.googleapis.com/icon?family=Material+Icons' /* CDN assets */,
];

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
```

4. When the client sends a request, the service worker can intercept the request to the network and divert them into the cache, such that the service worker receives the `fetch` event. Below is an implementation of the cache-first strategy that responds with only cached resources.

In [sw.js]

```JavaScript
self.addEventListener('fetch', (event) => {
    // respond from the cache
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // return caches if it exists. Otherwise, try networks
            return cachedResponse || fetch(event.request);
        })
    );
});
```

5. Check out lighthouse, your web app should be able to run offline.
6. Add a home screen icon. You will need to create a manifest.json file and `<meta>` tags for iOS devices.

In [index.html]

```HTML

<html lang="en">
    <head>
        <meta name="theme-color" content="#ffe1c4" />
        <!--Add your manifest.json-->
        <link rel="manifest" href="/manifest.json" />
        <!--[iOS] whether a web application runs in full-screen mode-->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <!--[iOS] icon on Home screen-->
        <link rel="apple-touch-icon" href="/img/icons/icon-96x96.png" />
        <!--[iOS] status bar colour-->
        <meta name="apple-mobile-web-app-status-bar-style" content="#ffe9d2" />
    <body>
        <script src="/js/app.js"></script>
    </body>
</html>
```

Notice that you will lose the back bottom when you go to the full screen on iOS devices. You might have to add the back bottom in your web app.

In [manifest.json], the `display` attribute declares how you present your PWA on a mobile phone. Set `display: standalone` to make your PWA looks like a native app, or use `display: browser` to open your PWA in the browser.

7. You may want to prompt users to install the app. In that case, you will need to listen for the `beforeinstallprompt` event to notify them.

```JavaScript
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
```

## Workbox

Workbox is the service worker that Google provides. Below are what it is capable of.

1. Locate files on disk.
2. Detect file changes (automatic cache updates).
3. Support multiple caches.
4. Support multiple access strategies.

## Cache Strategies

| Type                                                 | Changes                       | Strategy             |
| ---------------------------------------------------- | ----------------------------- | -------------------- |
| Needed at launch (index.html, script.js, styles.css) | Rarely                        | cacheOnly (default)  |
| Cached when used (images, media)                     | Sometimes                     | cacheFirst           |
| Time-sensitive (news, weather)                       | Frequently                    | networkFirst         |
| User avatars, etc.                                   | Rarely, but important to user | staleWhileRevalidate |

### When to store resources

-   On install: Keep static components of the current version of the site such as CSS files, scripts, index.html, etc.
-   On activate: This event is ideal for cleanup tasks.
-   On user interaction: Store resources like videos or articles in this phrase when users are allowed to manually select content that is supposed to be available offline.

## Reference

[Progressive Web App Training]

[progressive web app training]: https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh
[sw.js]: ./sw.js
[manifest.json]: ./manifest.json
[index.html]: ./index.html
