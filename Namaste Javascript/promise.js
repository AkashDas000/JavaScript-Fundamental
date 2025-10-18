

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

console.log(promise);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      // resolve(orderId);
    }
  });
  return promise;
}

function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment Success");
  });
}

function validateCart(cart){
  return true
}