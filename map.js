
function initMap() {
	
    
    var centerLatLng = new google.maps.LatLng(61, 129);
 
    
    var mapOptions = {
        center: centerLatLng, 
        zoom: 8               
    };
 
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
		position: centerLatLng,
		map: map,
		title: "Текущее местоположение",
	});
}
 

google.maps.event.addDomListener(window, "load", initMap);