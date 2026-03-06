const CACHE_NAME = "shade-finder-v5"

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

self.addEventListener("activate", event => {

event.waitUntil(
caches.keys().then(keys => {
return Promise.all(
keys.filter(k => k !== CACHE_NAME)
.map(k => caches.delete(k))
)
})
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
