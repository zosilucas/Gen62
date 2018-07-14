var mapLocation = new google.maps.LatLng(-34.886398, -57.998349); //change coordinates here
var marker;
var map;
function initialize() {
    var mapOptions = {
        zoom: 14, // Change zoom here
        center: mapLocation,
        scrollwheel: false       
    };
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    //change address details here
    var contentString = 
      '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<div class="brand" href="#"><img alt="" src="img/favicon.png"><div class="brand-info"><div class="brand-name">Gen 62</div></div></div></div>' 
    + '<p class="map-address">'
    + '<div class="map-address-row">'
    + '  <i class="fa fa-map-marker"></i>'
    + '  <span class="text"><strong>Calle 510 N° 1662, Ringuelet.</strong><br>'
    + '  La Plata</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <i class="fa fa-phone"></i>'
    + '   <span class="text">(+01) 231-394-0713</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <span class="map-email">'
    + '      <i class="fa fa-envelope"></i>'
    + '      <span class="text">incognitotheme@gmail.com</span>'
    + '   </span>'
    + '</div>' 
    + '<p class="gmap-open"><a href="https://goo.gl/maps/mCbLekpAe2m" target="_blank">Abrir en Google Maps</a></p></div>';
        
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    
    // Uncomment down to show Marker
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Gen62', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    }); 
    // Uncomment down to show info window on marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

