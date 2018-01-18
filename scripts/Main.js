// JavaScript source code
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-37.78333, 175.28333),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}