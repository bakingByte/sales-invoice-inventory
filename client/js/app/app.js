var app = angular.module('Sales', ['ngRoute', 'jqwidgets', 'angucomplete-alt', 'LocalStorageModule']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../../templates/welcome.html",
		controller: "welcomeController"
    })
    .when("/inventory", {
        templateUrl : "../../templates/inventory.html",
		controller: "inventoryController"
    })
    .when("/sales", {
        templateUrl : "../../templates/sales.html",
		controller: "salesController"
    })
    .when("/salesHistory", {
        templateUrl : "../../templates/salesHistory.html",
		controller: "salesHistoryController"
    })
    .when("/salesReport", {
        templateUrl : "../../templates/sales-report.html",
		controller: "salesReportController"
    });
});