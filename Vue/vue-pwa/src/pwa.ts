// PWA
export default () => {
    const cacheName = 'app-cache-v1';
    const filesToCache = ['/'];
    if ('serviceWorker' in navigator) {
        self.addEventListener('load', (event: any) => {
            try {
                const register = async () => {
                    await navigator.serviceWorker.register('/service-worker.js');
                };
                event.waitUntil(register());
            } catch (err) {
                // console.warn(err);
            }
        });
    }

    // Precache resources
    self.addEventListener('install', (event: any) => {
        try {
            const preCache = async () => {
                const cache = await caches.open(cacheName);
                return cache.addAll(filesToCache);
            };
            event.waitUntil(preCache());
        } catch (err) {
            // console.warn(err);
        }
    });

    // Fetch cached resources (Cache-first strategy)
    self.addEventListener('fetch', (event: any) => {
        event.respondWith(caches.match(event.request)).then((cachedResponse: any) => {
            return cachedResponse || fetch(event.request);
        });
    });

    // // Install a shortcut on mobile devices.
    // let deferredPrompt: any;
    // self.addEventListener('beforeinstallprompt', (event: any) => {
    //     // Prevent Chrome 67 and earlier from automatically

    //     // Show the prompt
    //     event.preventDefault();

    //     // Stash the event so it can be triggered later.
    //     deferredPrompt = event;

    //     // Update UI notify the user they can add to home screen
    //     btnAdd.style.display = 'block';
    // });

    // // Installation must be done by a user gesture! Here, the button click
    // btnAdd.addEventListener('click', (event: any) => {
    //     // hide our user interface that shows our A2HS button
    //     btnAdd.style.display = 'none';

    //     // Show the prompt
    //     deferredPrompt.prompt();

    //     // Wait for the user to respond to the prompt
    //     deferredPrompt.userChoice.then((choiceResult: any) => {
    //         if (choiceResult.outcome === 'accepted') {
    //             console.log('User accepted the A2HS prompt');
    //         } else {
    //             console.log('User dismissed the A2HS prompt');
    //         }
    //         deferredPrompt = null;
    //     });
    // });

    // // PWA installed on mobile home screen
    // self.addEventListener('appinstalled', (event: any) => {
    //     // app.logEvent('a2hs', 'installed');
    //     console.log('a2hs', 'installed');
    // });
};
