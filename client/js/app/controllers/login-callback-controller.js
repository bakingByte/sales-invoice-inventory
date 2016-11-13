app.controller('loginCallbackController', ['$scope', '$state', 'LoopBackAuth', '$window', '$location',
	function($scope, $state, LoopBackAuth, $window, $location){
		console.log("Inside login callback controller");
		var params = $location.search();

		if (params.access_token && params.userId) {
			// Handle auth response by adding properties to the Auth
			// and then calling save. (Same effect as login)
			LoopBackAuth.setUser(params.access_token, params.userId);

			// Saves the values to local storage.
			LoopBackAuth.save();
			console.log("login success");
			$state.go("home");
		}
		else {
			// Something isn't right.
			// Redirect the user to the login page.
			console.log("login fail.");
			$state.go("login");
		}
		
	}]
);