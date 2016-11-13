(function(window, google, mapster) {
	mapster.MAP_OPTIONS = {
		center: {
			lat: 28.6100,
			lng: 77.2300 
		},
		zoom: 5,
		disableDefaultUI: false,
		scrollwheel: true,
		draggable: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
			style: google.maps.ZoomControlStyle.DEFAULT
		},
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		cluster: {
			options: {
				styles: [{
					url: '../img/m3.png',
					height: 56,
					width: 55,
					textColor: '#F00',
					textSize: 18
				}]
			}
		}
	};
}(window, google, window.Mapster || (window.Mapster = {})));