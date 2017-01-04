app.controller('salesController',['$scope', '$timeout', '$http', 'LocalStorage', 'DEFAULT_INVOICE', 'DEFAULT_LOGO', function ($scope, $timeout, $http, LocalStorage, DEFAULT_INVOICE, DEFAULT_LOGO) {
  $scope.title = "Sales";

  $scope.checkWhetherItemExistsInProducts = function(item) {
    var flag = false;

    for(var i = 0; i < $scope.products.length; i++) {
      if($scope.products[i].id == item.id && $scope.products[i].name == item.name) {
        flag = true;
        break;
      }
    }

    return flag;
  }

  var validateInvoiceItems = function (invoiceItems) {
   

    for(var i = 0; i<invoiceItems.length; i++) {
      var invoiceItem = invoiceItems[i];

      if (isNaN(invoiceItem.quantity)) {
        return "" + invoiceItem.productName + " should have a numeric quantity!";
      } else if (invoiceItem.quantity < 1) {
        return "" + invoiceItem.productName + " should have more than 0 quantity!";
      }

      if (isNaN(invoiceItem.unitPrice)) {
        return "" + invoiceItem.productName + " should have a numeric price!";
      } else if (invoiceItem.unitPrice < 0) {
        return "" + invoiceItem.productName + " price should be 0 or more!";
      }

    }

    if(!invoiceItems.length) {
      return "invoice should have some items!";
    }
  };

  $scope.getProductsFromServer = function () {
    $http.get("/api/Products")
      .then(
        function (response) {
          $scope.products = response.data;
        },
        function (error) {
          $.notify("Ohh snap!! Something went wrong while fetching latest Products!", "error");
          console.log(error);
        });
  }

  $scope.getNextInvoiceNumber = function () {
    $http.get("/api/Invoices/count")
      .then(
        function (response) {
          $scope.invoice.id = response.data.count + 1;
        },
        function (error) {
          $.notify("Ohh snap!! Something went wrong while fetching new invoice id!", "error");
          console.log(error);
        }
      );
  }

  $scope.pageLoadOrReload = function () {
    $scope.getProductsFromServer();
    var invoice = LocalStorage.getInvoice();
    $scope.invoice = invoice ? invoice : DEFAULT_INVOICE;

    if (!invoice) {
      $scope.getNextInvoiceNumber();
      $scope.invoice.items = [];
    }
  }

  $scope.$on("$destroy", function () {
    if ($scope.invoice.items.length) {
      LocalStorage.setInvoice($scope.invoice);
    } else {
      LocalStorage.clear();
    }
  });

  $scope.onNewInvoice = function () {
    LocalStorage.clear();
    $scope.printMode = false;
    $scope.setInvoice(DEFAULT_INVOICE);
    $scope.invoice.items = [];
    $scope.getNextInvoiceNumber();
    // Clear localstorage
    // Turn printmode off
    // Load default invoice from constants
    // Get the next invoice number
  }

  $scope.onResetInvoice = function () {
    LocalStorage.clear();
    $scope.invoice.items = [];
    $scope.printMode = false;
    // Clear localstorage
    // Turn printmode off
  }

  $scope.onSaveInvoice = function () {

    // Turn printmode on // disable save, save & print, reset
    // Prompt user
    // Save to localstorage
    // make http call
    var confirmSave = confirm('Are you sure you would like to save the invoice?');
    if (confirmSave) {
      //$scope.printMode = true;
      LocalStorage.setInvoice($scope.invoice);
      $scope.saveInvoiceToServer($scope.invoice, false);
    }
  }

  $scope.onSaveAndPrintInvoice = function () {
    var confirmSave = confirm('Are you sure you would like to save the invoice?');
    if (confirmSave) {
      //$scope.printMode = true;      
      LocalStorage.setInvoice($scope.invoice);
      $scope.saveInvoiceToServer($scope.invoice, true);
    }
  }

  $scope.saveInvoiceToServer = function (invoice, isPrintEnabled) {
    var invoiceData = {
      quantity: invoice.quantity,
      totalPrice: invoice.totalPrice,
      date: invoice.date
    };

    var itemsData = [];

    for (var i = 0; i < invoice.items.length; i++) {
      var itemData = {
        invoiceId: invoice.id,
        productId: invoice.items[i].id,
        productName: invoice.items[i].name,
        unitPrice: invoice.items[i].price,
        quantity: invoice.items[i].qty,
        totalPrice: invoice.items[i].price * invoice.items[i].qty,
        date: invoice.date
      };
      itemsData.push(itemData);
    }

    var errorMessageInvoiceItems = validateInvoiceItems(itemsData);
    if (errorMessageInvoiceItems) {
      $.notify(errorMessageInvoiceItems, "warn");
    } else {
      $http.post("/api/Invoices", invoiceData)
        .then(
          function (response) {
            console.log("Invoice saved successfully!!");
            saveInvoiceItemsToServer(itemsData, isPrintEnabled);
          },
          function (error) {
            console.log("error in saving invoice");
            $.notify("Ohh snap!! Something went wrong!", "error");
          }
        );
    };

    saveInvoiceItemsToServer = function (itemsData, isPrintEnabled) {
      $http.post("/api/InvoiceItems", itemsData)
        .then(
          function (response) {
            console.log("Success in saving invoice");
            $.notify("Invoice saved successfully!", "success");
            $scope.printMode = true;
            if (isPrintEnabled) {
              $('.notifyjs-wrapper').trigger('notify-hide');
              $timeout(window.print(), 100);
            }
          },
          function (error) {
            console.log("error in saving invoice");
             $.notify("Ohh snap!! Something went wrong!", "error");
          }
        );
    }
  }

  var localstorage = {}

  $scope.saveInvoice = {
    quantity: 0,
    totalPrice: 0,
    date: '2016-11-27',
    items: [{
      "invoiceId": 0,
      "productId": 0,
      "productName": "string",
      "unitPrice": 0,
      "quantity": 0,
      "totalPrice": 0,
      "date": "2016-11-27",
      "id": 0
    }]
  }

  $scope.calculateTotalNumberOfItems = function () {
    var total = 0;
    angular.forEach($scope.invoice.items, function (item, key) {
      total += parseInt(item.qty);
    });
    $scope.invoice.quantity = total;
    return total;
  }



  $scope.itemToBeEntered = {
    qty: 1
  };
  $scope.selectedId = function (item) {
    console.log(item);
    if (item) {
      $scope.itemToBeEntered.id = item.originalObject.id;
      $scope.itemToBeEntered.price = item.originalObject.price;
      $scope.itemToBeEntered.name = item.originalObject.name;
    }
  };
  $scope.selectedName = function (item) {
    console.log(item);
    if (item) {
      $scope.itemToBeEntered.id = item.originalObject.id;
      $scope.itemToBeEntered.price = item.originalObject.price;
      $scope.itemToBeEntered.name = item.originalObject.name;
    }
  };

  $scope.enterKeyPressed = function (item) {
    console.log("Enter key pressed");
    if ($scope.checkWhetherItemExistsInProducts(item)) {
       $scope.addItem(item);
    }
    else {
      $.notify("This item doesnot exist in Inventory table. Please update your inventory first!", "warn");
    }
  };

  (function init() {
    // Attempt to load invoice from local storage
    ! function () {
      $scope.pageLoadOrReload();
    }();

    // Set logo to the one from local storage or use default
    ! function () {
      var logo = LocalStorage.getLogo();
      $scope.logo = logo ? logo : DEFAULT_LOGO;
    }();

    $scope.availableCurrencies = [];

  })()
  // Adds an item to the invoice's items
  $scope.addItem = function (item) {
    var itemToBeAdded = new Object({
      id: item.id,
      name: item.name,
      qty: item.qty,
      price: item.price
    });
    if (!itemToBeAdded.name || itemToBeAdded.name.length <= 0) {
      itemToBeAdded.name = $("#nameAutocomplete_value").val();
    }
    $scope.invoice.items.push(itemToBeAdded);
    $scope.$broadcast('angucomplete-alt:clearInput');
    $scope.itemToBeEntered = {
      qty: 1
    }
  }

  // Remotes an item from the invoice
  $scope.removeItem = function (item) {
    $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
  };

  // Calculates the sub total of the invoice
  $scope.invoiceSubTotal = function () {
    var total = 0.00;
    angular.forEach($scope.invoice.items, function (item, key) {
      total += (item.qty * item.price);
    });
    return total;
  };

  // Calculates the tax of the invoice
  $scope.calculateTax = function () {
    return (($scope.invoice.tax * $scope.invoiceSubTotal()) / 100);
  };

  // Calculates the grand total of the invoice
  $scope.calculateGrandTotal = function () {
    //$scope.saveInvoice();
    $scope.invoice.totalPrice = $scope.calculateTax() + $scope.invoiceSubTotal();
    return $scope.invoice.totalPrice;
  };

  // Sets the current invoice to the given one
  $scope.setInvoice = function (invoice) {
    $scope.invoice = invoice;
    $http.get("/api/Invoices/count")
      .then(
        function (response) {
          $scope.invoice.invoice_number = response.data.count + 1;
        },
        function (error) {
          console.error('Error setting invoice number:');
          console.log(error);
        }
      );
    //$scope.saveInvoice();
  };

  angular.element(document).ready(function () {
    $("#idAutocomplete_value").css('width', '90%');
  });
}]);
