// Funció per guardar a la cache dinàmica - logica auxiliar del Service Worker

function actualitzaCacheDinamic(dynamicCache, req, res) {

    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}