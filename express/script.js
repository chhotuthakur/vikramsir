var instance = new Razorpay({
    key_id: 'YOUR_KEY_ID',
    key_secret: 'YOUR_KEY_SECRET',
  });
  // API signature
// {razorpayInstance}.{resourceName}.{methodName}(resourceId [, params])

// example

instance.payments.fetch(paymentId)

instance.payments.all({
    from: '2016-08-01',
    to: '2016-08-20'
  }).then((response) => {
    // handle success
  }).catch((error) => {
    // handle error
  })

  instance.payments.all({
    from: '2016-08-01',
    to: '2016-08-20'
  }, (error, response) => {
    if (error) {
      // handle error
    } else {
      // handle success
    }
  })

  const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

var options = {
  amount: 50000,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};
instance.orders.create(options, function(err, order) {
  console.log(order);
});

var orderId ;
$(document).ready(function(){
    var settings = {
  "url": "/create/orderId",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "amount": "50000"
  }),
};

//creates new orderId everytime
$.ajax(settings).done(function (response) {

  orderId=response.orderId;
  console.log(orderId);
  $("button").show();
});
});