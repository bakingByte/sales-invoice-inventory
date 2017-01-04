// The default logo for the invoice
app.constant('DEFAULT_LOGO', 'dist/img/bakery-logo.jpg')

var format_two_digits = function(n) {
    return n < 10 ? '0' + n : n;
};

var time_format = function(d) {
    hours = format_two_digits(d.getHours());
    minutes = format_two_digits(d.getMinutes());
    seconds = format_two_digits(d.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
}

var getCurrentDate = function () {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var date = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (day + ' ' + monthNames[monthIndex] + ' ' + year + '   ' + time_format(date));
}

// The invoice displayed when the user first uses the app
app.constant('DEFAULT_INVOICE', {
  tax: 0.00,
  id: 100,
  date: getCurrentDate(),
  currencySymbol: '₹',
  printMode: false,
  customer: {
    name: 'Mr. John Doe',
    web_link: 'John Doe Designs Inc.',
    address1: '1 Infinite Loop',
    address2: 'Cupertino, California, US',
    postal: '90210'
  },
  company: {
    name: 'Maharashtra Hindu Bakery',
    web_link: 'www.metawarelabs.com',
    address1: 'Station Road, Opposite Arlin Tower,',
    address2: 'Bhayander West, Thane,',
    postal: '401101',
    phone: '+91-9854632650'
  },
  items: [
    // { qty: 10, description: 'Gadget', cost: 9.95 }
  ]
});

$.notify.defaults({
  autoHide: true,
   autoHideDelay: 3000
});
