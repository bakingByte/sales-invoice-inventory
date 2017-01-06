app.controller('salesViewController', ['$scope', '$http', '$routeParams', '$timeout', 'DEFAULT_INVOICE', 'DEFAULT_LOGO', 'Invoice', 'InvoiceItem', function($scope, $http, $routeParams, $timeout, DEFAULT_INVOICE, DEFAULT_LOGO, Invoice, InvoiceItem) {
    $scope.title = "Sales History: Invoice - " + $routeParams.id;

    $scope.onInit = function() {
        $scope.logo = DEFAULT_LOGO;
        $scope.defaults = DEFAULT_INVOICE;

        $scope.invoiceItems = InvoiceItem.find({
            filter: {
                where: {
                    invoiceId : $routeParams.id
                }
            }
        });

        $scope.invoice = Invoice.findById({
            id: $routeParams.id
        });
    }

    $scope.onPrintInvoice = function() {
        $timeout(window.print(), 100);
    };

    $scope.onDeleteInvoice = function() {
        Invoice.hasItems.destroyById({
            id: $routeParams.id
        })
        .$promise
        .then(function() {
            Invoice.destroyById({
                id: $routeParams.id
            })
            .$promise
            .then(function() {
                $.notify("Invoice deleted successfully!", "success");
                $scope.disableDeleteButton = true;
            },
            function() {
                $.notify("Ohh snap!! Something went wrong!", "error");
                $scope.disableDeleteButton = true;
            });
        }, 
        function() {
            $.notify("Ohh snap!! Something went wrong!", "error");
            $scope.disableDeleteButton = true;
        });
    };

    $scope.onInit();

}]);