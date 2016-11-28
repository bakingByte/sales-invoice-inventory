app.controller('inventoryController', function ($scope, $http) {
  $scope.title = "Inventory";

  $scope.init = function () {
    var url = "http://localhost:3000/api/Products";
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
        console.log('addrow');
        console.log(rowdata);
        rowdata.id = null;
        $http.post("http://localhost:3000/api/Products", rowdata)
             .then(
                 function(response) {
                     console.log(response);
                     commit(true, response.data.id);
                 },
                 function (error) {
                     console.log(error);
                     commit(false);
                 }
             );
      },
      updaterow: function (rowid, rowdata, commit) {
        console.log('update row');
        console.log(rowdata);
        console.log(rowid);
        $http.put("http://localhost:3000/api/Products/" + rowid, rowdata)
             .then(
                 function(response) {
                     console.log(response);
                     commit(true);
                 },
                 function (error) {
                     console.log(error);
                     commit(false);
                 }
             );
      },
      deleterow: function (rowid, commit) {
        $http.delete("http://localhost:3000/api/Products/" + rowid)
             .then(
                 function(response) {
                     console.log(response);
                     commit(true);
                 },
                 function (error) {
                     console.log(error);
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
      height: '100%',
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
      selectionmode: 'singlerow',
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
        width: '40%'
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

  angular.element(document).ready(function() {
    $scope.init();
  });
 

});
