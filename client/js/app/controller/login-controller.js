app.controller('loginController', ['$scope', 'localStorageService', '$window', '$http', '$rootScope','$timeout', '$location',
  function ($scope, localStorageService, $window, $http, $rootScope, $timeout, $location) {
    console.log('Inside loginController');
    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function () {
      console.log('email-->' + $scope.user.email + ' password-->' + $scope.user.password);
      $http.post("/api/People/login", $scope.user)
        .then(
          function (response) {
            console.log("Success login");
            localStorageService.set('email', $scope.user.email);
            localStorageService.set('accessTokenId', response.data.id);
            localStorageService.set('id', response.data.userId);
            $rootScope.currentUserId = response.data.userId;
            $http.defaults.headers.common['Authorization'] = response.data.id;
            // $timeout(function(){
            //   $location.path('/sales');
            // },0);
            $location.path('/sales');
            //$scope.$apply();
          },
          function (error) {
            console.log("Error login");
            $.notify("Ohh snap!! Something went wrong!", "error");
          }
        );
    };    
  }
]);
