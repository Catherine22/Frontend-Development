/**
 * Not every browser supports service worker
 * Can I use...: https://caniuse.com/#search=service%20workers
 */
if ('serviceWorker' in navigator) {
    // Your browser supports service worker

    // 1. Register your service worker (asynchronous task)
    navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.warn('Service worker NOT registered', err));
}
