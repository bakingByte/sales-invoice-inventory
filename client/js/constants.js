// The default logo for the invoice
app.constant('DEFAULT_LOGO', 'img/bakery-logo.png')

// The invoice displayed when the user first uses the app
app.constant('DEFAULT_INVOICE', {
  tax: 0.00,
  invoice_number: 100,
  customer_info: {
    name: 'Mr. John Doe',
    web_link: 'John Doe Designs Inc.',
    address1: '1 Infinite Loop',
    address2: 'Cupertino, California, US',
    postal: '90210'
  },
  company_info: {
    name: 'Abhishek Bakery',
    web_link: 'www.metawarelabs.com',
    address1: 'Mira-Bhayander',
    address2: 'Mumbai, Maharashtra ',
    postal: '400082',
    phone: '+91-9854632650'
  },
  items:[
    // { qty: 10, description: 'Gadget', cost: 9.95 }
  ]
});