app.controller('salesController', function ($scope, $timeout, $http, LocalStorage, DEFAULT_INVOICE, DEFAULT_LOGO) {
  $scope.title = "Sales";

  $scope.getProductsFromServer = function () {
    $scope.products = [{
      "name": "Cake",
      "cost": 550,
      "id": 4
    }, {
      "name": "Pastry Pineapple",
      "cost": 70,
      "id": 5
    }, {
      "name": "Chips",
      "cost": 50,
      "id": 6
    }, {
      "name": "Biscuits",
      "cost": 35,
      "id": 7
    }, {
      "name": "Candy",
      "cost": 10,
      "id": 8
    }];
  }

  $scope.getNextInvoiceNumber = function () {
    $http.get("http://localhost:3000/api/Invoices/count")
      .then(
        function (response) {
          $scope.invoice.id = response.data.count + 1;
        },
        function (error) {
          console.error('Error setting invoice number:');
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
    }
  }

  $scope.$on("$destroy", function () {
    if($scope.invoice.items.length) {
      LocalStorage.setInvoice($scope.invoice);      
    } else {
      LocalStorage.clear();
    }
  });

  $scope.onNewInvoice = function () {
    LocalStorage.clear();
    $scope.printMode = false;
    $scope.setInvoice(DEFAULT_INVOICE);
    $scope.getNextInvoiceNumber();
    // Clear localstorage
    // Turn printmode off
    // Load default invoice from constants
    // Get the next invoice number
  }

  $scope.onResetInvoice = function () {
    // Clear localstorage
    // Turn printmode off
  }

  $scope.onSaveInvoice = function () {
    // Turn printmode on // disable save, save & print, reset
    // Prompt user
    // Save to localstorage
    // make http call
  }

  $scope.onSaveAndPrintInvoice = function () {
    // Turn printmode on // disable save, save & print, reset
    // Prompt user
    // Save to localstorage
    // make http call
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
    return total;
  }



  $scope.itemToBeEntered = {
    qty: 1
  };
  $scope.selectedId = function (item) {
    console.log(item);
    if (item) {
      $scope.itemToBeEntered.id = item.originalObject.id;
      $scope.itemToBeEntered.cost = item.originalObject.cost;
      $scope.itemToBeEntered.name = item.originalObject.name;
    }
  };
  $scope.selectedName = function (item) {
    console.log(item);
    if (item) {
      $scope.itemToBeEntered.id = item.originalObject.id;
      $scope.itemToBeEntered.cost = item.originalObject.cost;
      $scope.itemToBeEntered.name = item.originalObject.name;
    }
  };

  $scope.enterKeyPressed = function (item) {
    console.log("Enter key pressed");
    $scope.addItem(item);
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
      cost: item.cost
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

  $scope.printInfo = function () {
    window.print();
  };

  // Remotes an item from the invoice
  $scope.removeItem = function (item) {
    $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
  };

  // Calculates the sub total of the invoice
  $scope.invoiceSubTotal = function () {
    var total = 0.00;
    angular.forEach($scope.invoice.items, function (item, key) {
      total += (item.qty * item.cost);
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
    return $scope.calculateTax() + $scope.invoiceSubTotal();
  };

  // Clears the local storage
  $scope.clearLocalStorage = function () {
    var confirmClear = confirm('Are you sure you would like to clear the invoice?');
    if (confirmClear) {
      LocalStorage.clear();
      $scope.setInvoice(DEFAULT_INVOICE);
    }
    $scope.printMode = false;
  };

  // Sets the current invoice to the given one
  $scope.setInvoice = function (invoice) {
    $scope.invoice = invoice;
    $http.get("http://localhost:3000/api/Invoices/count")
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



  // Saves the invoice in local storage
  $scope.saveInvoice = function () {
    LocalStorage.setInvoice($scope.invoice);
    // Do http call
  };

  $scope.newInvoice = function () {
    $scope.clearLocalStorage();
    $scope.printMode = false;
  }

  $scope.saveAndPrintInvoice = function () {
    $scope.printMode = true;
    //$scope.saveInvoice();
    $timeout(function () {
      window.print();
    }, 0);
  }




  angular.element(document).ready(function () {
    $("#idAutocomplete_value").css('width', '90%');
  });
});
