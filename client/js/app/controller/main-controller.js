app.controller('mainController', ['$scope', 'localStorageService', '$http', '$rootScope', '$location',
  function ($scope, localStorageService, $http, $rootScope, $location) {
    $scope.accessToken = {
      access_token:''
    };
    $scope.accessToken.access_token = localStorageService.get('accessTokenId');
    $scope.logOut = function () {
      $http.post("/api/People/logout", $scope.accessToken)
        .then(
          function (response) {
            console.log("Success logout");
            localStorageService.set('email', '');
            localStorageService.set('accessTokenId', '');
            localStorageService.set('id', '');
          },
          function (error) {
            console.log("Error logout");
            $.notify("Ohh snap!! Something went wrong!", "error");
          }
        );
    };
}]);
