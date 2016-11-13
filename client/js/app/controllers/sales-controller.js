app.controller('salesController', function ($scope) {
  $scope.title = "Sales";

  $scope.init = function () {
    var url = "http://localhost:3000/api/Products";
    var theme = 'light';

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
      }, {
        name: 'quantity',
        type: 'int'
      }, {
        name: 'totalPrice',
        type: 'int'
      }],
      addrow: function (rowid, rowdata, position, commit) {
        /*console.log('addrow');
        console.log(rowdata);
        rowdata.id = null;
        $http.post("http://localhost:3000/api/Invoices", rowdata)
            .then(
                function(response) {
                    console.log(response);
                    commit(true, response.data.id);
                },
                function (error) {
                    console.log(error);
                    commit(false);
                }
            );*/
        commit(true);
      },
      updaterow: function (rowid, rowdata, commit) {
        /*console.log('update row');
        console.log(rowdata);
        console.log(rowid);
        $http.put("http://localhost:3000/api/Invoices/" + rowid, rowdata)
            .then(
                function(response) {
                    console.log(response);
                    commit(true);
                },
                function (error) {
                    console.log(error);
                    commit(false);
                }
            );*/
        commit(true);
      },
      deleterow: function (rowid, commit) {
        /*$http.delete("http://localhost:3000/api/Invoices/" + rowid)
          .then(
            function (response) {
              console.log(response);
              commit(true);
            },
            function (error) {
              console.log(error);
              commit(false);
            }
          );*/
        commit(true);
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
    $("#quantity").jqxInput({
      theme: theme
    });

    $("#name").width(150);
    $("#name").height(23);
    $("#price").width(150);
    $("#price").height(23);
    $("#quantity").width(150);
    $("#quantity").height(23);
    var editrow = -1;

    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#jqxgrid").jqxGrid({
      width: 850,
      source: dataAdapter,
      pageable: true,
      autoheight: true,
      sortable: false,
      filterable: false,
      showfilterrow: false,
      altrows: true,
      enabletooltips: true,
      showeverpresentrow: true,
      everpresentrowposition: 'top',
      selectionmode: 'singlerow',
      editable: true,
      editmode: 'dblclick',
      showtoolbar: true,
      rendertoolbar: function (toolbar) {
        var me = this;
        var container = $("<div style='margin: 5px;'></div>");
        toolbar.append(container);
        container.append('<input style="margin-left: 5px;" id="deleterowbutton" type="button" value="Delete Selected Row" />');    
        $("#deleterowbutton").jqxButton();
        // delete row.
        $("#deleterowbutton").on('click', function () {
          var selectedrowindex = $("#jqxgrid").jqxGrid('getselectedrowindex');
          var rowscount = $("#jqxgrid").jqxGrid('getdatainformation').rowscount;
          if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
            var id = $("#jqxgrid").jqxGrid('getrowid', selectedrowindex);
            var commit = $("#jqxgrid").jqxGrid('deleterow', id);
          }
        });
      },
      columns: [{
        text: 'Id',
        datafield: 'id',
        width: '10%'
      }, {
        text: 'Name',
        datafield: 'name',
        width: '40%'
      }, {
        text: 'Price',
        datafield: 'price',
        width: '15%'
      }, {
        text: 'Quantity',
        datafield: 'quantity',
        width: '15%'
      }, {
        text: 'Total',
        datafield: 'totalPrice',
        width: '20%'
      }]
    });

    /*$("#jqxgrid").on("rowdoubleclick", function (event) {
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
    $("#quantity").val(dataRecord.name);
    $("#totalPrice").val(dataRecord.name);        
    // show the popup window.
    $("#popupWindow").jqxWindow('open');
    });*/
    $("#name, #price, #quantity, #totalPrice, #id").on('change', function (event) {
      var datafield = event.target.id;
      $("#jqxgrid").jqxGrid('setcolumnproperty', datafield, 'editable', event.args.checked);
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
          quantity: $("#quantity").val(),
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
          quantity: $("#quantity").val(),
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
});
