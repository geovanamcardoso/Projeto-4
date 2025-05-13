//DECLARANDO A VARIÁVEL (que recebe o retorno da função da API)

//L= função da API, map e setView tbm
//setView = define marco zero (pra sp, praça da sé), lat, long
let map = L.map('mapaid').setView([-23.5505, -46,6333], 10);  

//Declarando a aplicação da API
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

//EVENTO PARA FUNÇÃO MAPA
map.on('click', mapa);

//CRIANDO A FUNÇÃO MAPA
//e = event (fazer um evento de js na função)
function mapa(e){
    let lat = e.latlng.lat.toFixed(6); //latlng.lat = propriedade presente na API, toFixed = fixa casas dps da ,
    let long = e.latlng.lng.toFixed(6);
    const locationInfo = document.getElementById('localizacao');

    if(locationInfo){
        locationInfo.textContent = `Localização escolhida: Latitude ${lat}, Longitude: ${long}`;
    }
    L.marker(e.latlng).addTo(map)
        .bindPopup(`Latitude: ${lat}<br> Longitude: ${long}`).openPopup();
}
map.on('click', mapa);

