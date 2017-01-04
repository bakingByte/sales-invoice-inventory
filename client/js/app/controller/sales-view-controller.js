app.controller('salesViewController', ['$scope', '$http', '$routeParams', 'DEFAULT_INVOICE', 'DEFAULT_LOGO', function($scope, $http, $routeParams, DEFAULT_INVOICE, DEFAULT_LOGO) {
    $scope.title = "Sales History: Invoice - " + $routeParams.id;

    $http.get("/api/").then(
        function(response) {

        },
        function(error) {

        }
    );
}]);