app.controller('salesReportController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.title = "Sales Report";

    $scope.init = function () {
      //var data = generatedata(500);
			var url = "/api/InvoiceItems";
      var source = {
        datatype: "json",
        datafields: [{
          name: 'invoiceId',
          type: 'number'
        }, {
          name: 'productName',
          type: 'string'
        }, {
          name: 'date',
          type: 'date'
        }, {
          name: 'range',
          map: 'date',
          type: 'date'
        }, {
          name: 'unitPrice',
          type: 'number'
        }, {
          name: 'quantity',
          type: 'number'
        }, {
          name: 'totalPrice',
          type: 'number'
        }],
        url: url
      };

      var dataAdapter = new $.jqx.dataAdapter(source);

      $("#jqxgrid").jqxGrid({
        width: '100%',
        height: '480px',
        source: dataAdapter,
        showfilterrow: true,
        filterable: true,
        groupable: true,
        showgroupaggregates: true,
        showaggregates: true,
        selectionmode: 'multiplecellsextended',
        columns: [{
          text: 'Invoice Id',
          datafield: 'invoiceId',
          width: '5%'
        }, {
          text: 'Product',
          datafield: 'productName',
          width: '15%'
        }, {
          text: 'Sales Date',
          datafield: 'date',
          width: '10%',
          cellsalign: 'right',
          cellsformat: 'd'
        }, {
          text: 'Range',
          datafield: 'range',
          filtertype: 'range',
          cellsalign: 'right',
          width: '30%',
          cellsformat: 'd'
        }, {
          text: 'Unit Price',
          datafield: 'unitPrice',          
          cellsalign: 'right',
          width: '15%'
        }, {
          text: 'Quantity',
          datafield: 'quantity',
          aggregates: ["sum"],
          cellsalign: 'right',
          width: '10%'
        }, {
          text: 'Total Price',
          datafield: 'totalPrice',
					aggregates: ["sum"], 
          cellsalign: 'right',
          width: '15%'
        }]
      });
      $("#jqxgrid").on("groupschanged", function () {
        $("#jqxgrid").jqxGrid('clearfilters');
      });

      $('#clearfilteringbutton').jqxButton({
        height: 25
      });
      $('#clearfilteringbutton').click(function () {
        $("#jqxgrid").jqxGrid('clearfilters');
      });
    };

    angular.element(document).ready(function () {
      $scope.init();
    });


  }
]);
