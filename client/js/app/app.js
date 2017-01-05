var app = angular.module('Sales', ['ngRoute', 'jqwidgets', 'angucomplete-alt', 'LocalStorageModule', 'lbServices']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "../../templates/welcome.html",
		controller: "welcomeController"
    })
    .when("/login", {
        templateUrl : "../../templates/login.html",
		controller: "loginController"
    })
    .when("/inventory", {
        templateUrl : "../../templates/inventory.html",
		controller: "inventoryController"
    })
    .when("/sales", {
        templateUrl : "../../templates/sales.html",
		controller: "salesController"
    })
    .when("/sales/:id", {
        templateUrl : "../../templates/sales-view.html",
		controller: "salesViewController"
    })
    .when("/salesHistory", {
        templateUrl : "../../templates/salesHistory.html",
		controller: "salesHistoryController"
    })
    .when("/salesReport", {
        templateUrl : "../../templates/sales-report.html",
		controller: "salesReportController"
    }).
    otherwise({
    redirectTo: '/login'
    });
}])
.run(['$rootScope', 'localStorageService', '$location', function($rootScope, localStorageService, $location) {
    $rootScope.$on('$routeChangeStart', function(event) {
	    // redirect to login page if not logged in  
        $rootScope.currentUserId = localStorageService.get('id');
	    if (!$rootScope.currentUserId) {
	    	//event.preventDefault(); //prevent current page from loading
	    	$location.path('/login');
	    }

        console.log("run called from app.js");
    });
}]);