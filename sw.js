// Cache only this guide's own files. Google Maps and external photos are never cached here.
const VERSION = 'e11159f862e8c6c3';
const FILES = ["index.html","favicon.svg","icon-180.png","icon-192.png","icon-512.png","manifest.webmanifest","assets/geist-001175b1-Dr5IBr7O.woff2","assets/geist-52306abf-BOnPvxSZ.woff2","assets/geist-875ccdd4-D_Kiv5N3.woff2","assets/geist-98bbbccb-BGnTDqni.woff2","assets/geist-ff2310f5-JguAV-SU.woff2","assets/geist-mono-013b2f2f-pyAoGB9p.woff2","assets/geist-mono-0638449e-iW2ugney.woff2","assets/geist-mono-44745446-Dyk9XLrL.woff2","assets/geist-mono-44e03052-C58l5Ba4.woff2","assets/geist-mono-971fb274-DqVHphH-.woff2","assets/geist-mono-f6b33328-0GQ79yac.woff2","assets/index-Cs0ZowXO.js","assets/index-DvHobvrZ.css","assets/leaflet-src-V_LflKBA.js"];
const ROOT = new URL('./', self.location.href);
const PREFIX = 'istanbul-guide:' + ROOT.pathname + ':';
const CACHE = PREFIX + VERSION;
const ownFile = (url) => new URL(url, ROOT).href;
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILES.map(ownFile))),
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(PREFIX) && key !== CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (
    request.method !== 'GET' ||
    url.origin !== ROOT.origin ||
    !url.pathname.startsWith(ROOT.pathname)
  )
    return;
  // Fetches for map credentials are runtime configuration, never the HTML fallback.
  if (
    url.pathname === ROOT.pathname + 'maps-config.json' ||
    url.pathname.startsWith(ROOT.pathname + 'api/')
  )
    return;
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (!response.ok) throw new Error('Offline');
          return response;
        })
        .catch(() =>
          caches
            .open(CACHE)
            .then((cache) => cache.match(ownFile('index.html'))),
        ),
    );
    return;
  }
  if (FILES.some((file) => ownFile(file) === url.href)) {
    event.respondWith(
      caches
        .open(CACHE)
        .then(async (cache) => (await cache.match(request)) || fetch(request)),
    );
  }
});
