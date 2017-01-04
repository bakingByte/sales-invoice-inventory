app.controller('inventoryController',['$scope','$http', function ($scope, $http) {
  $scope.title = "Inventory";

  var validateProduct = function(product) {
    if (!product.name) {
      return "Product name cannot be empty!";
    }

    if (isNaN(product.price)) {
      return "Product price should be a number!";
    } else if (product.price < 0) {
      return "Product price should be 0 or more!";
    }
   
    return "";
  };

  $scope.init = function () {
    var url = "/api/Products";
    var theme = 'bootstrap';

    var source = {
      datatype: "json",
      datafields: [{
        name: 'id',
        type: 'int'
      }, {
        name: 'name',
        type: 'string'
      }, {
        name: 'price',
        type: 'int'
      }],
      addrow: function (rowid, rowdata, position, commit) {
        rowdata.id = null;

        var errorMessage = validateProduct(rowdata);
        if (errorMessage) {
          $.notify(errorMessage, "warn");
        } else {
          $http.post("/api/Products", rowdata)
          .then(
            function (response) {
              commit(true, response.data.id);
              $.notify("Product added successfully!!", "success");
            },
            function (error) {
              console.log(error);
              $.notify("Ohh snap!! Something went wrong!", "error");
              commit(false);
            }
          );
        }
        
      },
      updaterow: function (rowid, rowdata, commit) {
        var errorMessage = validateProduct(rowdata);
        if (errorMessage) {
          $.notify(errorMessage, "warn");
        } else {
          $http.put("/api/Products/" + rowid, rowdata)
          .then(
            function (response) {
              commit(true);
              $.notify("Product updated successfully!!", "success");
            },
            function (error) {
              console.log(error);
              $.notify("Ohh snap!! Something went wrong!", "error");
              commit(false);
            }
          );
        }
        
      },
      deleterow: function (rowid, commit) {
        $http.delete("/api/Products/" + rowid)
          .then(
            function (response) {
              commit(true);
              $.notify("Product deleted successfully!!", "success");
            },
            function (error) {
              console.log(error);
              $.notify("Ohh snap!! Something went wrong!", "error");
              commit(false);
            }
          );
      },
      id: 'id',
      url: url
    };

    // Popup
    $("#name").jqxInput({
      theme: theme
    });
    $("#price").jqxInput({
      theme: theme
    });

    $("#name").width(150);
    $("#name").height(23);
    $("#price").width(150);
    $("#price").height(23);
    var editrow = -1;

    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#jqxgrid").jqxGrid({
      theme: 'bootstrap',
      width: '100%',
      height: '480px',
      source: dataAdapter,
      pageable: true,
      //autoheight: true,
      sortable: true,
      filterable: true,
      showfilterrow: true,
      altrows: true,
      enabletooltips: true,
      showeverpresentrow: true,
      everpresentrowposition: "top",
      selectionmode: 'multiplecellsadvanced',
      editable: true,
      columns: [{
        text: 'Id',
        datafield: 'id',
        width: '20%'
      }, {
        text: 'Name',
        datafield: 'name',
        width: '40%'
      }, {
        text: 'Price',
        datafield: 'price',
        width: '40%',
      }]
    });

    $("#jqxgrid").on("rowdoubleclick", function (event) {
      editrow = event.args.rowindex;
      var offset = $("#jqxgrid").offset();
      $("#popupWindow").jqxWindow({
        position: {
          x: parseInt(offset.left) + 60,
          y: parseInt(offset.top) + 60
        }
      });
      // get the clicked row's data and initialize the input fields.
      var dataRecord = $("#jqxgrid").jqxGrid('getrowdata', editrow);
      $("#name").val(dataRecord.name);
      $("#price").val(dataRecord.price);
      // show the popup window.
      $("#popupWindow").jqxWindow('open');
    });

    $("#popupWindow").jqxWindow({
      width: 250,
      resizable: false,
      isModal: true,
      autoOpen: false,
      cancelButton: $("#Cancel"),
      modalOpacity: 0.01
    });
    $("#popupWindow").on('open', function () {
      $("#name").jqxInput('selectAll');
    });

    $("#Cancel").jqxButton({
      theme: theme
    });
    $("#Save").jqxButton({
      theme: theme
    });
    $("#Delete").jqxButton({
      theme: theme
    });

    $("#Save").click(function () {
      if (editrow >= 0) {
        var row = {
          name: $("#name").val(),
          price: $("#price").val(),
        };
        var rowID = $('#jqxgrid').jqxGrid('getrowid', editrow);
        $('#jqxgrid').jqxGrid('updaterow', rowID, row);
        $("#popupWindow").jqxWindow('hide');
      }
    });

    $("#Delete").click(function () {
      if (editrow >= 0) {
        var row = {
          name: $("#name").val(),
          price: $("#price").val(),
        };
        var rowID = $('#jqxgrid').jqxGrid('getrowid', editrow);
        $("#jqxgrid").jqxGrid('deleterow', rowID);
        $("#popupWindow").jqxWindow('hide');
      }
    });
  };

  angular.element(document).ready(function () {
    $scope.init();
  });


}]);
