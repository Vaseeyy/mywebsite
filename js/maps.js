var geocoder;
var map;
var directionsService;
var directionsRenderer;
// Initialising the Map
function initMap() {
    geocoder = new google.maps.Geocoder();
    // Directions
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    // Initial map location (Amazon NCL1)
    const coordinates = { lat: 54.935471, lng: -1.517610 };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: coordinates,
    });
    directionsRenderer.setMap(map);
}
// Search Function
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
// Set route
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