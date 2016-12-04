// Service for accessing local storage
app.service('LocalStorage', ['localStorageService', function(localStorageService) {

  var Service = {};

  // Returns true if there is a logo stored
  var hasLogo = function() {
    return !!localStorageService.get('logo');
    // return !!localStorage['logo'];
  };

  // Returns a stored logo (false if none is stored)
  Service.getLogo = function() {
    if (hasLogo()) {
      return localStorage['logo'];
    } else {
      return false;
    }
  };

  Service.setLogo = function(logo) {
    localStorageService.set('logo', logo);
    // localStorage['logo'] = logo;
  };

  // Checks to see if an invoice is stored
  var hasInvoice = function() {
    return !(localStorageService.get('invoice') == '' || localStorageService.get('invoice') == null);
    // return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
  };

  // Returns a stored invoice (false if none is stored)
  Service.getInvoice = function() {
    if (hasInvoice()) {
      return JSON.parse(localStorageService.get('invoice'));
      // return JSON.parse(localStorage['invoice']);
    } else {
      return false;
    }
  };

  Service.setInvoice = function(invoice) {
    localStorageService.set('invoice',JSON.stringify(invoice));    
    // localStorage['invoice'] = JSON.stringify(invoice);
  };

  // Clears a stored logo
  Service.clearLogo = function() {
    localStorageService.set('logo', '');
    // localStorage['logo'] = '';
  };

  // Clears a stored invoice
  Service.clearinvoice = function() {
    localStorageService.set('invoice', '');
    // localStorage['invoice'] = '';
  };

  // Clears all local storage
  Service.clear = function() {
    Service.clearinvoice();
    Service.clearLogo();
  };

  return Service;

}]);