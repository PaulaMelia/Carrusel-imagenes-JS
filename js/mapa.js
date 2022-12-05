let coords = imagenes[posicionActual].coord.split(",");

let map = L.map('map').setView(coords, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

document.getElementById("avanzar").addEventListener("click", function (e) {
    coords = imagenes[posicionActual].coord.split(",");
    map.flyTo(coords, 10);

});
document.getElementById("retroceder").addEventListener("click", function (e) {
    coords = imagenes[posicionActual].coord.split(",");
    map.flyTo(coords, 10);

})
