// Call a function with a function as an argument
function hello(name) {
  console.log('hello, ' + name);
}

function func(f, arg) {
  return f(arg);
}

func(hello, 'Radley');


// Nested functions
function funcParent() {
  function funcChild() {
    console.log('child');
  }
  console.log('parent');
  return funcChild();
}
funcParent();

// Run instant functions
(function print() {
  console.log('I am instant function');
}());


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

let allowance = 100;
let usd = currency('US')(allowance);
let pound = currency('UK')(allowance);
let cash = rmb(allowance);
console.log(cash + ' rmb is equal to ' + usd + ' usd or ' + pound + ' pound');

// Set a function as a value in an object
var obj = {
  name: 'Charlotte',
  age: 19,
  showName: function() {
    console.log(obj.name);
  },
};
obj.showName();

// Prototype
function Employee(name, id) {
  this.name = name;
  this.id = id;
}

Employee.prototype.TAG = 'Employee';
Employee.prototype.showName = function() {
  console.log(this.name);
};

let julianne = new Employee('Julianne', 1);
console.log(julianne); // Employee {name: "Julianne", id: 1, showname: ƒ}
console.log(julianne.TAG); // Employee
julianne.showName(); // Julianne


// Override
console.log(julianne.toString());
Employee.prototype.toString = function() {
  return 'I am a happy employee';
};
console.log(julianne.toString());

