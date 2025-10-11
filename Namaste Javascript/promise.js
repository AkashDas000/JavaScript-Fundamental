// const URL = "https://api.github.com/users/alok722"
// const user = fetch(URL)

// user.then(function(data){
//     console.log(data)
// })

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    //reject a promise
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "745779";
    // resolve the promise
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment Success");
  });
}

function validateCart(cart) {
  return true;
}
