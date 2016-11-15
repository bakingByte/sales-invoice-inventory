app.controller('salesController', function ($scope, $http, LocalStorage, DEFAULT_INVOICE, DEFAULT_LOGO ) {
  $scope.title = "Sales";

  $scope.currencySymbol = '₹';
  $scope.logoRemoved = false;
  $scope.printMode   = false;




  (function init() {
    // Attempt to load invoice from local storage
    !function() {
      var invoice = LocalStorage.getInvoice();
      $scope.invoice = invoice ? invoice : DEFAULT_INVOICE;
    }();

    // Set logo to the one from local storage or use default
    !function() {
      var logo = LocalStorage.getLogo();
      $scope.logo = logo ? logo : DEFAULT_LOGO;
    }();

    $scope.availableCurrencies = [];

  })()
  // Adds an item to the invoice's items
  $scope.addItem = function() {
    $scope.invoice.items.push({ qty:1, cost:0, description:"" });
  }

  // Toggle's the logo
  $scope.toggleLogo = function(element) {
    $scope.logoRemoved = !$scope.logoRemoved;
    LocalStorage.clearLogo();
  };

  // Triggers the logo chooser click event
  $scope.editLogo = function() {
    // angular.element('#imgInp').trigger('click');
    document.getElementById('imgInp').click();
  };

  $scope.printInfo = function() {
    window.print();
  };

  // Remotes an item from the invoice
  $scope.removeItem = function(item) {
    $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
  };

  // Calculates the sub total of the invoice
  $scope.invoiceSubTotal = function() {
    var total = 0.00;
    angular.forEach($scope.invoice.items, function(item, key){
      total += (item.qty * item.cost);
    });
    return total;
  };

  // Calculates the tax of the invoice
  $scope.calculateTax = function() {
    return (($scope.invoice.tax * $scope.invoiceSubTotal())/100);
  };

  // Calculates the grand total of the invoice
  $scope.calculateGrandTotal = function() {
    saveInvoice();
    return $scope.calculateTax() + $scope.invoiceSubTotal();
  };

  // Clears the local storage
  $scope.clearLocalStorage = function() {
    var confirmClear = confirm('Are you sure you would like to clear the invoice?');
    if(confirmClear) {
      LocalStorage.clear();
      setInvoice(DEFAULT_INVOICE);
    }
  };

  // Sets the current invoice to the given one
  var setInvoice = function(invoice) {
    $scope.invoice = invoice;
    $http.get("http://localhost:3000/api/Invoices/count")
      .then(
        function(response) {
          $scope.invoice.invoice_number = response.data.count + 1;
        },
        function(error) {
          console.error('Error setting invoice number:');
          console.log(error);
        }
      );
    saveInvoice();
  };

  // Reads a url
  var readUrl = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('company_logo').setAttribute('src', e.target.result);
        LocalStorage.setLogo(e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  };

  // Saves the invoice in local storage
  var saveInvoice = function() {
    LocalStorage.setInvoice($scope.invoice);
  };

  // Runs on document.ready
  angular.element(document).ready(function () {
    // Set focus
    document.getElementById('invoice-number').focus();

    // Changes the logo whenever the input changes
    document.getElementById('imgInp').onchange = function() {
      readUrl(this);
    };
  });
});
