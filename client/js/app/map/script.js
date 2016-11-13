(function(window, google,mapster) {
	//map options
	var options = mapster.MAP_OPTIONS,
	element = document.getElementById('map-canvas');
	//map
	map = mapster.create(element, options);

	// google.maps.event.addListener(map.gMap, 'click', function(e) {
	//	alert("clicked");
	//	console.log(e);
	// });

	// google.maps.event.addListener(map.gMap, 'dragend', function() {
	//	alert("dragend");
	// });

	// map._on('click', function(e) {
	//	alert('click');
	//	console.log(e);
	//	console.log(this`);
	// });

	// var marker = new google.maps.Marker({
	// 	position: {
	// 		lat: 28.6100,
	// 		lng: 77.2300
	// 	},
	// 	map: map.gMap,
	// 	draggable: true
	// });

	// map._on({
	// 	obj: map.gMap,
	// 	event: 'click',
	// 	callback: function() {
	// 		alert('Map clicked');
	// 	}
	// });

	// var marker1 = map.addMarker({
	// 	lat: 28.6100,
	// 	lng: 77.2300,
	// 	draggable: true,
	// 	visible: true,
	// 	id: 1,
	// 	content: 'I like food',
	// 	icon: '/Users/harsh/Developer/Learning/Google Maps/harsh.gif'
	// });

	// var marker2 = map.addMarker({
	// 	id: 2,
	// 	lat: 28.6100,
	// 	lng: 77.2400,
	// 	draggable: true,
	// 	visible: true,
	// 	id: 2,
	// 	content: 'I like fish',
	// });

	for(var i = 0; i < 40; i++) {
		map.addMarker( {
			lat: 28.6100 + Math.random(),
			lng: 77.2300 + Math.random()
		});
	};

	//map._removeMarker(marker2);

	console.log(map.markers);

	// var found = map.findMarkerByLat(28.6100);
	// console.log(found);

	// var found = map.findBy(function(marker) {
	// 	return marker.id === 2;
	// });
	// console.log(found);

	// map.removeBy(function(marker) {
	// 	return marker.id === 2;
	// });

	var chicago = {lat: 41.85, lng: -87.65};
  	var indianapolis = {lat: 39.79, lng: -86.14};

 //  	var directionsDisplay = new google.maps.DirectionsRenderer({
	//     map: map.gMap
	// });

	// var request = {
	//     destination: indianapolis,
	//     origin: chicago,
	//     travelMode: google.maps.TravelMode.DRIVING
 //  	};

 //  // Pass the directions request to the directions service.
 //  	var directionsService = new google.maps.DirectionsService();
	// directionsService.route(request, function(response, status) {
	// if (status == google.maps.DirectionsStatus.OK) {
	// 	// Display the route on the map.
	// 	directionsDisplay.setDirections(response);
	// }
	// });

	//var directions = map.getDirections(chicago, indianapolis);

}(window, google,window.Mapster || (window.Mapster = {})));