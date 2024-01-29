var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.2518, lng: -111.6493 },
        zoom: 14
    });
}
