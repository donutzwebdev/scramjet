importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@1.1.0/dist/scramjet.all.js');

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const sw = new ScramjetServiceWorker();

self.addEventListener('fetch', async (ev) => {
  await sw.loadConfig();
  if (sw.route(ev)) {
    ev.respondWith(sw.fetch(ev));
  }
});
