/**
 * This can contain custom Service worker logic use in addition to the
 * autogenerated next-pwa worker logic.
 */

/**
 * This adds a test event handler which will clear all Cached
 * resources.
 *
 * HOW TO TEST THIS?
 * Run this in your browser console:
 * window.navigator.serviceWorker.controller.postMessage({command: '_clear_all_caches'})
 * OR use next-pwa injected workbox object
 * window.workbox.messageSW({command: '_clear_all_caches'})
 */
self.addEventListener('message', (event) => {
  if (event?.data.command == '_clear_all_caches') {
    console.log('clearing caches');
    caches.keys().then(function (names) {
      for (let name of names) caches.delete(name);
    });
  }
});
