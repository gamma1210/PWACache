/*! Superchargify v2.0.03c6d8f9 | (c) Superchargify (https://www.superchargify.com) */
importScripts("./precache-manifest.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),
    function (e, t) {
        var n, a, r, i, s, c;

        function o(e) {
            for (var t = 0; t < r.length; t++) e = function (e, t) {
                var n = e.split("?");
                if (2 <= n.length) {
                    for (var a = encodeURIComponent(t) + "=", i = n[1].split(/[&;]/g), r = i.length; 0 < r--;) - 1 !== i[r].lastIndexOf(a, 0) && i.splice(r, 1);
                    return n[0] + (0 < i.length ? "?" + i.join("&") : "")
                }
                return e
            }(e, r[t]);
            var n = e.split("?")[0],
                a = n.indexOf("/collections/"),
                i = n.indexOf("/products/");
            return -1 !== a && -1 !== i && (e = e.substring(0, a) + e.substring(i)), e
        }
        t && (n = [/\/admin/, /\/payments/, /\/services/, /\/checkout/, /\/account/, /\/wallets/, /\/cart/, /\/\d+/, /\/apps/, /\/tools/, /\/community/, /\/a\/(?!sc)/, /\/.*design_theme_id=/, /\/.*frame_token=/], a = /.*\.(?:js\b|css|png|jpe?g|gif|woff2?|webp)/i, r = ["utm_medium", "utm_source", "utm_content", "utm_campaign", "utm_term", "_ga", "_gl"], i = /\/cart\/(add|update|change|clear)/, e.addEventListener("install", function (e) {
            e.waitUntil(caches.open("superchargify-shop").then(function (e) {
                return e.addAll(["/"])
            }).catch(function (e) {
                console.warn(e)
            }))
        }), t.core.setCacheNameDetails({
            prefix: "superchargify"
        }), t.core.skipWaiting(), t.core.clientsClaim(), e.__precacheManifest = [].concat(e.__precacheManifest || []), t.precaching.precacheAndRoute(e.__precacheManifest, {
            cleanURLs: !1
        }), t.googleAnalytics.initialize(), t.navigationPreload.disable(), e.addEventListener("fetch", function (e) {
            var t = e.request;
            "POST" !== t.method && "GET" !== t.method || t.url && i.test(t.url) && e.waitUntil(caches.delete("superchargify-shop").catch(function (e) {
                console.warn(e)
            }))
        }), s = new t.strategies.NetworkFirst({
            cacheName: "superchargify-shop",
            plugins: [new t.expiration.Plugin({
                maxEntries: 50,
                purgeOnQuotaError: !0,
                maxAgeSeconds: 86400
            }), {
                cacheKeyWillBeUsed: function (e) {
                    var t = e.request.url,
                        n = o(t);
                    return t === n ? e.request : n
                }
            }]
        }), c = new t.routing.NavigationRoute(s, {
            blacklist: n,
            whitelist: [/(\/|\/products|\/collections|\/blogs|\/pages)/]
        }), t.routing.registerRoute(c), t.routing.registerRoute(function (e) {
            var t = e.url;
            return !n.find(function (e) {
                return e.test(t)
            }) && a.test(t)
        }, new t.strategies.NetworkFirst({
            cacheName: "superchargify-static",
            plugins: [new t.cacheableResponse.Plugin({
                statuses: [0, 200]
            }), new t.expiration.Plugin({
                maxEntries: 45,
                purgeOnQuotaError: !0,
                maxAgeSeconds: 2592e3
            })]
        })))
    }(self, workbox);