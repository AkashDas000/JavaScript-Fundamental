const myThrottling = (fn, d) => {
  return function (...args) {
    document.getElementById("btn").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFunc = myThrottling(() => {
  document.getElementById("btn").disabled
  
  = false;

  console.log("user clicked");
}, 3000);
