const CACHE_NAME = "shade-finder-v4"

const ASSETS = [
"./",
"./index.html",
"./style.css",
"./app.js"
]

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(ASSETS))

    )

})

self.addEventListener("fetch", event => {

if (event.request.url.includes("shades.json")) {

event.respondWith(fetch(event.request))

return

}

event.respondWith(

caches.match(event.request)
.then(response => response || fetch(event.request))

)

})