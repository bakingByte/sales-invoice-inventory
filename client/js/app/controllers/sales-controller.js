app.controller('salesController', function ($scope) {
  $scope.title = "Sales";

  $scope.init = function () {

    /* Shivving (IE8 is not supported, but at least it won't look as awful)
/* ========================================================================== */

    (function (document) {
      var
        head = document.head = document.getElementsByTagName('head')[0] || document.documentElement,
        elements = 'article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output picture progress section summary time video x'.split(' '),
        elementsLength = elements.length,
        elementsIndex = 0,
        element;

      while (elementsIndex < elementsLength) {
        element = document.createElement(elements[++elementsIndex]);
      }

      element.innerHTML = 'x<style>' +
        'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
        'audio[controls],canvas,video{display:inline-block}' +
        '[hidden],audio{display:none}' +
        'mark{background:#FF0;color:#000}' +
        '</style>';

      return head.insertBefore(element.lastChild, head.firstChild);
    })(document);

    /* Prototyping
    /* ========================================================================== */

    (function (window, ElementPrototype, ArrayPrototype, polyfill) {
      function NodeList() {
        [polyfill]
      }
      NodeList.prototype.length = ArrayPrototype.length;

      ElementPrototype.matchesSelector = ElementPrototype.matchesSelector ||
        ElementPrototype.mozMatchesSelector ||
        ElementPrototype.msMatchesSelector ||
        ElementPrototype.oMatchesSelector ||
        ElementPrototype.webkitMatchesSelector ||
        function matchesSelector(selector) {
          return ArrayPrototype.indexOf.call(this.parentNode.querySelectorAll(selector), this) > -1;
        };

      ElementPrototype.ancestorQuerySelectorAll = ElementPrototype.ancestorQuerySelectorAll ||
        ElementPrototype.mozAncestorQuerySelectorAll ||
        ElementPrototype.msAncestorQuerySelectorAll ||
        ElementPrototype.oAncestorQuerySelectorAll ||
        ElementPrototype.webkitAncestorQuerySelectorAll ||
        function ancestorQuerySelectorAll(selector) {
          for (var cite = this, newNodeList = new NodeList; cite = cite.parentElement;) {
            if (cite.matchesSelector(selector)) ArrayPrototype.push.call(newNodeList, cite);
          }

          return newNodeList;
        };

      ElementPrototype.ancestorQuerySelector = ElementPrototype.ancestorQuerySelector ||
        ElementPrototype.mozAncestorQuerySelector ||
        ElementPrototype.msAncestorQuerySelector ||
        ElementPrototype.oAncestorQuerySelector ||
        ElementPrototype.webkitAncestorQuerySelector ||
        function ancestorQuerySelector(selector) {
          return this.ancestorQuerySelectorAll(selector)[0] || null;
        };
    })(this, Element.prototype, Array.prototype);

    /* Helper Functions
    /* ========================================================================== */

    function generateTableRow() {
      var emptyColumn = document.createElement('tr');

      emptyColumn.innerHTML = '<td><a class="cut">-</a><span contenteditable></span></td>' +
        '<td><span contenteditable></span></td>' +
        '<td><span data-prefix>$</span><span contenteditable>0.00</span></td>' +
        '<td><span contenteditable>0</span></td>' +
        '<td><span data-prefix>$</span><span>0.00</span></td>';

      return emptyColumn;
    }

    function parseFloatHTML(element) {
      return parseFloat(element.innerHTML.replace(/[^\d\.\-]+/g, '')) || 0;
    }

    function parsePrice(number) {
      return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
    }

    /* Update Number
    /* ========================================================================== */

    function updateNumber(e) {
      var
        activeElement = document.activeElement,
        value = parseFloat(activeElement.innerHTML),
        wasPrice = activeElement.innerHTML == parsePrice(parseFloatHTML(activeElement));

      if (!isNaN(value) && (e.keyCode == 38 || e.keyCode == 40 || e.wheelDeltaY)) {
        e.preventDefault();

        value += e.keyCode == 38 ? 1 : e.keyCode == 40 ? -1 : Math.round(e.wheelDelta * 0.025);
        value = Math.max(value, 0);

        activeElement.innerHTML = wasPrice ? parsePrice(value) : value;
      }

      updateInvoice();
    }

    /* Update Invoice
    /* ========================================================================== */

    function updateInvoice() {
      var total = 0;
      var cells, price, total, a, i;

      // update inventory cells
      // ======================

      for (var a = document.querySelectorAll('table.inventory tbody tr'), i = 0; a[i]; ++i) {
        // get inventory row cells
        cells = a[i].querySelectorAll('span:last-child');

        // set price as cell[2] * cell[3]
        price = parseFloatHTML(cells[2]) * parseFloatHTML(cells[3]);

        // add price to total
        total += price;

        // set row total
        cells[4].innerHTML = price;
      }

      // update balance cells
      // ====================

      // get balance cells
      cells = document.querySelectorAll('table.balance td:last-child span:last-child');

      // set total
      cells[0].innerHTML = total;

      // set balance and meta balance
      cells[2].innerHTML = document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(total - parseFloatHTML(cells[1]));

      // update prefix formatting
      // ========================

      var prefix = document.querySelector('#prefix').innerHTML;
      for (a = document.querySelectorAll('[data-prefix]'), i = 0; a[i]; ++i) a[i].innerHTML = prefix;

      // update price formatting
      // =======================

      for (a = document.querySelectorAll('span[data-prefix] + span'), i = 0; a[i]; ++i)
        if (document.activeElement != a[i]) a[i].innerHTML = parsePrice(parseFloatHTML(a[i]));
    }

    /* On Content Load
    /* ========================================================================== */

    function onContentLoad() {
      updateInvoice();

      var
        input = document.querySelector('input'),
        image = document.querySelector('img');

      function onClick(e) {
        var element = e.target.querySelector('[contenteditable]'),
          row;

        element && e.target != document.documentElement && e.target != document.body && element.focus();

        if (e.target.matchesSelector('.add')) {
          document.querySelector('table.inventory tbody').appendChild(generateTableRow());
        } else if (e.target.className == 'cut') {
          row = e.target.ancestorQuerySelector('tr');

          row.parentNode.removeChild(row);
        }

        updateInvoice();
      }

      function onEnterCancel(e) {
        e.preventDefault();

        image.classList.add('hover');
      }

      function onLeaveCancel(e) {
        e.preventDefault();

        image.classList.remove('hover');
      }

      function onFileInput(e) {
        image.classList.remove('hover');

        var
          reader = new FileReader(),
          files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
          i = 0;

        reader.onload = onFileLoad;

        while (files[i]) reader.readAsDataURL(files[i++]);
      }

      function onFileLoad(e) {
        var data = e.target.result;

        image.src = data;
      }

      if (window.addEventListener) {
        document.addEventListener('click', onClick);

        document.addEventListener('mousewheel', updateNumber);
        document.addEventListener('keydown', updateNumber);

        document.addEventListener('keydown', updateInvoice);
        document.addEventListener('keyup', updateInvoice);

        input.addEventListener('focus', onEnterCancel);
        input.addEventListener('mouseover', onEnterCancel);
        input.addEventListener('dragover', onEnterCancel);
        input.addEventListener('dragenter', onEnterCancel);

        input.addEventListener('blur', onLeaveCancel);
        input.addEventListener('dragleave', onLeaveCancel);
        input.addEventListener('mouseout', onLeaveCancel);

        input.addEventListener('drop', onFileInput);
        input.addEventListener('change', onFileInput);
      }
    }

    window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);







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
