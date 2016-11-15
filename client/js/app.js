var app = angular.module('Sales', ['ngRoute', 'jqwidgets']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../templates/welcome.html",
		controller: "welcomeController"
    })
    .when("/inventory", {
        templateUrl : "../templates/inventory.html",
		controller: "inventoryController"
    })
    .when("/sales", {
        templateUrl : "../templates/sales.html",
		controller: "salesController"
    });
});