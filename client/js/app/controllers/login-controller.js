app.controller('loginController', ['$scope', 'AuthService', '$state', 'LoopBackAuth', '$window', 'Person',
	function($scope, AuthService, $state, LoopBackAuth, $window, Person){
		console.log('Inside loginController');
		$scope.user = {
			email: '',
			password: ''
		};

		$scope.loginAuth = function() {
		 	console.log('email-->' + $scope.user.email + ' password-->' + $scope.user.password);
		 	AuthService.login($scope.user.email, $scope.user.password)
		 		.then(function() {
		 			$state.go('home');
				});
		};
		$scope.logOut = function(){
			Person.logout();
		};
		$scope.loginOauth = function(provider) {
			console.log(provider);
			$window.location.href = "http://localhost:3000/auth/"+provider;

			/*$http.get('http://localhost:3000/auth/'+provider).then(function successCb(response,status){
				console.log('response '+response);
				console.log('status '+status);
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
			}, 
			function errorCb(){
				console.log("error in $http");
			});*/
		};
	}]
);