var geocoder;
var map;
var directionsService;
var directionsRenderer;
       
function initMap() {
    geocoder = new google.maps.Geocoder();
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = { lat: 37.422040, lng: -122.082810 };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: coordinates,
    });
    directionsRenderer.setMap(map);
}
function getCoordinates() {
    var address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
function calcRoute() {
    var start = document.getElementById('origin').value;
    var end = document.getElementById('destination').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        } else { alert("An unexpected error occurred")}
    });
}
