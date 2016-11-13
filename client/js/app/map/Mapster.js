(function(window, google, List) {

	var Mapster = (function() {
		function Mapster(element, opts) {
			this.gMap = new google.maps.Map(element, opts);
			this.markers = List.create();
			if(opts.cluster) {
				this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.cluster);
			}
		}

		Mapster.prototype = {
			zoom: function(level) {
				if(level) {
					this.gMap.setZoom(level);
				} else {
					this.gMap.getZoom();
				}
			},
			_on: function(opts) {
				var self = this;
				google.maps.event.addListener(opts.obj, opts.event, function(e) {
					opts.callback.call(self, e);
				});
			},
			addMarker : function(opts) {
				var marker;

				opts.position = {
					lat: opts.lat,
					lng: opts.lng
				};


				if(opts.icon) {
					var icon = new google.maps.MarkerImage(
						opts.icon,
						new google.maps.Size(60, 60)
					);

					opts.icon = icon;
				}	

				marker = this._createMarker(opts);
				this.markers.add(marker);

				if(this.markerClusterer) {
					this.markerClusterer.addMarker(marker);
				}

				if (opts.event) {
					this._on({
						obj: marker,
						event: opts.event.name,
						callback: opts.event.callback
					});
				}

				if (opts.content) {
					this._on({
						obj: marker,
						event: 'click',
						callback: function (){
							var infoWindow = new google.maps.InfoWindow({
								content: opts.content
							});

							infoWindow.open(this.gMap, marker);
						}
					})
				}

				return marker;
			},
			findBy: function(callback) {
				return this.markers.find(callback);
			},
			removeBy: function(callback) {
				var self = this;
				self.markers.find(callback, function(markers) {
					markers.forEach(function(marker) {
						if(self.markerClusterer) {
							self.markerClusterer.removeMarker(marker);
						} else {
							marker.setMap(null);
						}
					});
				});
			},
			_createMarker: function(opts) {
				opts.map = this.gMap;

				return new google.maps.Marker(opts);
			},
			_directionService: function(source, destination) {
				var directionsService = new google.maps.DirectionsService();
				var request = {
					destination: destination,
					origin: source,
					travelMode: google.maps.TravelMode.DRIVING
				};
				var directionsDisplay = new google.maps.DirectionsRenderer({
				    map: this.gMap
				});

				directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						// Display the route on the map.
						directionsDisplay.setDirections(response);
					}
				});

				return directionsService;
			},
			getDirections: function(source, destination) {
				return this._directionService(source, destination);
			}
		};

		return Mapster;
	}());

	Mapster.create = function(element, options) {
		return new Mapster(element, options);
	};

	window.Mapster = Mapster;

}(window, google, List));