app.controller('salesHistoryController',['$scope','$http', function ($scope, $http) {
  $scope.title = "Sales History";

  $scope.init = function () {
    var url = "/api/Invoices";
    var theme = 'bootstrap';

    var source = {
      datatype: "json",
      datafields: [{
        name: 'id',
        type: 'int'
      }, {
        name: 'date',
        type: 'date'
      }, {
        name: 'quantity',
        type: 'int'
      },
      {
        name: 'totalPrice',
        type: 'float'
      }],
      id: 'id',
      url: url
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#jqxgrid").jqxGrid({
      theme: 'bootstrap',
      width: '100%',
      height: '480px',
      source: dataAdapter,
      pageable: true,
      sortable: true,
      filterable: true,
      showfilterrow: true,
      altrows: true,
      enabletooltips: true,
      selectionmode: 'singlerow',
      columns: [{
        text: 'Invoice Number',
        datafield: 'id',
        width: '10%'
      }, {
        text: 'Date',
        datafield: 'date',
        width: '30%',
        filtertype: 'range',
        cellsformat: 'd'
      }, {
        text: 'Quantity',
        datafield: 'quantity',
        width: '20%'
      }, {
        text: 'Total Price',
        datafield: 'totalPrice',
        width: '40%'
      }]
    });

    $("#jqxgrid").on("rowdoubleclick", function (event) {

    });
  };

  angular.element(document).ready(function() {
    $scope.init();
  });
 

}]);
