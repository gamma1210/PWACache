importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.setConfig({ debug: true });
workbox.googleAnalytics.initialize(); 



// Appshell sould only serve reuest comming from the PWA (start_url). Other URLs, should be visited from the pre-cached

workbox.routing.registerNavigationRoute("/",
    {
        whitelist: [
            /\/app/
        ]
    }
);
workbox.routing.registerRoute(

	// Match all currencies
	// Test this regex https://regex101.com/r/a7t3d9/3/tests

	/(\/(es|it|de|pt|fr|ru|jp|id|pl|ro|tr|hi|cs|hu|ko|zh|sv))?\/((\w{3})_(\w{3}))?$/,
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
    new workbox.strategies.CacheFirst()
);
workbox.routing.registerRoute(
    /site_asset/,
    new workbox.strategies.CacheFirst()
);
workbox.routing.registerRoute(
    "/",
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    /\/dist\//,
    new workbox.strategies.CacheFirst()
);

// self.addEventListener('install', (event) => {
//     /**
//      * "Warm" the runtime cache
//      * https://developers.google.com/web/tools/workbox/guides/advanced-recipes#warm_the_runtime_cache
//      * 
//      * Since workbox.precaching.only works for build-time generated manifest entries, we use this "warm-up" method.
//      * https://github.com/GoogleChrome/workbox/issues/1612
//      */
//     const preCacheList = [
//         "/app",
//         '/img/arrows.svg',
//         '/img/airplane.svg',
//         '/img/attention.svg',
//         '/img/caret-down-48.png',
//         '/img/copy.svg',
//         '/img/checkmark.svg',
//         '/img/checkmark_black.svg',
//         '/img/lap.svg',
//         '/img/magnifyingglass_28R.png',
//         '/img/print.svg',
//         '/site_asset/logo',
//         '/site_asset/logo_footer',
//         '/dist/bundle-client.js'
//     ];

//     event.waitUntil(caches.open(workbox.core.cacheNames.runtime).then((cache) => cache.addAll(preCacheList)));
// });