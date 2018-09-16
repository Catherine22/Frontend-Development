// Call a function with a function as an argument
function hello(name) {
  console.log('hello, ' + name);
}

function func(f, arg) {
  return f(arg);
}

func(hello, 'Radley');


// Call a function which returns a function
function rmbToUsd(money) {
  return money * 0.15;
}

function rmbToPound(money) {
  return money * 0.11;
}

function rmb(money) {
  return money;
}

// Return a function
function currency(nationality) {
  if (nationality === 'US') {
    return rmbToUsd;
  } else if (nationality === 'UK') {
    return rmbToPound;
  } else {
    return rmb;
  }
}

var allowance = 100;
var usd = currency('US')(allowance);
var pound = currency('UK')(allowance);
var rmb = rmb(allowance);
console.log(rmb + ' rmb is equal to ' + usd + ' usd or ' + pound + ' pound');
