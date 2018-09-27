# JavaScript

JavaScript = ECMAScript + DOM + BOM     

## Get started
- Upper case and lower case are different
- ***Every statement must end with ```;```.*** Browsers automatically create ```;``` while the developer does not use ```;```. However, that impacts the performance. The worst of all, browsers sometimes add ```;``` incorrectly.
- Blanks and empty lines are ignored. 

### literal， 字面量
literals are allowed to be used directly. For example:      
```javascript
alert(152013257012304);
```
We do not use literals very often, variables are commonly used, like        
```javascript
var id = 152013257012304;
alert(id);
```

### Identifier, 标识符      
An JS identifier might constants numbers, alphabets, underscores and currency symbols ($). But starting with a number is illegal.        
```javascript
var $123_a = 0;
```

### Type, 数据类型      
There are six data types in JavaScript:     
- String        
- Number        
        - Infinity       
        - NaN: Not a number       
        - fraction: Using JS to calculate fractions, you might get an incorrect answer. For example, 0.1 + 0.2 = 0.30000000000000004     
- Boolean       
- Null      
- Undefined     
        - This means the editor has declared a variable, but he/she did not define a value for that variable.           
- Object        

Go to [Type.js] to see more.

### Operator, 运算符或操作符

Go to [Operator.js] to see more.

### Flow control and looping,  流程控制
          
```javascript
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
// while
while(cars[i]){
    console.log(cars[i++]);
}

// for
i = 0;
for(;cars[i];){
    console.log(cars[i++]);
}
```
Find out prime numbers from 1 to 100
```javascript
var i = 2;
var count = 0;
while (i <= 100) {
    if (isPrimeNumber(i)) {
        console.log(i + ' is a prime number');
        count++;
    }
    i++;
}

function isPrimeNumber(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

console.log(count + ' prime numbers were found');
```

### Object

Object combines and associates multiple types (String, Number, Boolean and Object)
        
Three different kinds of Object:        
1. 内建对象     
    a. ES standard      
    b. Math, String, Number, Function, Object...        
2. 宿主对象     
    a. Object offered by the runtime environment (browser). E.g. BOM, DOM       
3. 自定义对象
    
E.g. Create an object with name and age properties.
```javascript
var person = new Object();
person.name = 'Scout';
person.age = 18;
```
or  
```javascript
var person = new Object();
person['name'] = 'Scout';
person['age'] = 18;
```
or
```javascript
var person = {
    name: 'Scout', 
    age: 18
};
```


**Memory**      
stack vs heap

In JS, basic types are saved to stack
```javascript
var a = 123;
var b = a;
a++;
```

In stack:     

| variable | value |
|----------|-------|
|          |       |
| b        | 123   |
| a        | 124   |


Object is saved to heap     

```javascript
var obj = {name: 'Scout'};
var refer = obj;
refer['name'] = 'Jean';
// obj.name becomes 'Jean'
```

We have space for the value of obj with an unique address.        
Heap        

| address | value          |
|---------|----------------|
|         |                |
|         |                |
| 0x001   | name = 'Scout' |
        
In stack, the value refers to addresses.    
Stack       

| variable | value |
|----------|-------|
| refer    | 0x001 |
| obj      | 0x001 |

obj and refer have the same value (the address in heap)     
```javascript
console.log(obj==refer); // true

**Enum**
var obj = {
  name: 'Charlotte',
  age: 19,
  showName: function() {
    console.log(obj.name);
  },
};

for (var key in obj) {
  console.log(`key: ${key}, value: ${obj[key]}`); // name age showName
}
```

When we use 'new' to create an object, the computer will automatically offer new space to the object in heap.

### Function
Function encapsulates and runs code is a kind of object.        
```javascript
var func = new Function(
    // put code here with quotes
    'return \'我是构造函数\';'
);
func.hello = '你好';
func['bye'] = '回见';

console.log(func()); // 我是构造函数
console.log(func.hello); // 你好
console.log(func['bye']); // 回见

```

Technically, the above code is correct, but we don't use that very often. Instead, we do:       
```javascript
function sum(num1, num2) {
  return num1 + num2;
}
```
or

```javascript
// Anonymous function
var sum = function(num1, num2) {
  return num1 + num2;
};
```

- Input objects as arguments
```javascript
function package(container) {
  return 'height:' + container.height + ' width:' + container.width + ' length:' + container.length;
}

var box = {height: 3, width: 9, length: 7};
package(box);
```

- Call a function with a function as an argument
```javascript
function hello(name) {
  console.log('hello, ' + name);
}

function func(f, arg) {
  return f(arg);
}

func(hello, 'Radley'); // hello, Radley
```
or

```javascript
function callFuncByFunc(func) {
  return func();
}
callFuncByFunc(function() {
  console.log('hello, Radley');
}); // hello, Radley
```

- Nested functions      
Call functions inside a function
```javascript
function funcParent() {
  function funcChild() {
    console.log('child');
  }
  console.log('parent');
  return funcChild();
}
funcParent(); // parent child
```

- Run instant functions     
There is no variable to refer to this function, which means this function can only be run once.
```javascript
(function print() {
  console.log('I am instant function');
}()); // I am instant function
```

>**func vs func()**      
>func(): Call the function func()      
>func: the func() object`  

```javascript
function sayHello() {
  console.log('Hi, there!');
}
function fun(a) {
  console.log(a);
}

fun(sayHello()); // undefined
fun(sayHello); // ƒ sayHello() { console.log('Hi, there!'); }
```

- Call a function which returns a function        
```javascript
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
var cash = rmb(allowance);
console.log(cash + ' rmb is equal to ' + usd + ' usd or ' + pound + ' pound'); // 100 rmb is equal to 15 usd or 11 pound
```

- 对象的方法，Set a function as a value in an object        
```javascript
var obj = {};
obj.name = 'Charlotte';
obj.age = 19;
// 对象的方法
obj.showName = function() {
  console.log(obj.name);
};
obj.showName();
```

### 构造函数，Constructor
Technically, Constructor is a function used to create objects, Constructor usually starts with a capital letter.        
Use ```new``` to call a constructor.        
```javascript
function Employee(name, id) {
  this.name = name;
  this.id = id;

  this.showname = function() {
    console.log(this.name);
  };
}

var julianne = new Employee('Julianne', 1);
console.log(julianne); // Employee {name: "Julianne", id: 1, showname: ƒ}
julianne.showname(); // Julianne
```

However, if we initialize the Employee 1,000 times, which means we will create 1,000 showname functions. We can make all the objects share the same function
```javascript
function Employee(name, id) {
  this.name = name;
  this.id = id;
  this.showname = printName;
}

function printName() {
  console.log(this.name);
}

var julianne = new Employee('Julianne', 1);
console.log(julianne); // Employee {name: "Julianne", id: 1, showname: ƒ}
julianne.showname(); // Julianne
```

The above solution is still not perfect, it occupies global space and it would lead to potential bug. So the best way to solve this issue is to use **prototype**

### Prototype
Set a function in the prototype of Employee, every new Employee object can use the function we just create.
```javascript
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
```

### Override functions
```javascript
console.log(julianne.toString()); // [object Object]

// override
julianne.toString = function() {
  return 'Hi, I am Julianne';
};
console.log(julianne.toString()); // Hi, I am Julianne
```

### Override parent's functions
```javascript
console.log(julianne.toString()); // [object Object]

// override
julianne.toString = function() {
  return 'Hi, I am Julianne';
};
console.log(julianne.toString()); // I am a happy employee
```

## Garbage Collection 
Browsers automatically deal with rubbish (which are basically objects do not be refer by a specific key in the stack) in the heap, there are different solution depends on the browser.

## Collection
- Array     

It can be anything type you need to store in an array          
```javascript
var obj = {name: 'Ana'};
var func = function() {
  console.log('I am a function');
};
var arr = ['a', 1, undefined, true, null, func, obj];
console.log(arr);
// call functions
arr[5](); // I am a function
```

Initialize an array of size 10      
```javascript
var arr = new Array(10);
```

- Add a value to the end of an array
```javascript
var arr = [1, 2, 3];
var newLength = arr.push(4); // 4
console.log(arr); // [1, 2, 3, 4]
```

- Add a value from the top of an array
```javascript
var arr = [1, 2, 3];
var newLength = arr.unshift(0); // 4
console.log(arr); // [0, 1, 2, 3]
```

- Remove the last member of an array
```javascript
var arr = [1, 2, 3];
var removedMember = arr.pop(); // 3
console.log(arr); // [1, 2]
```

- Remove the first member of an array
```javascript
var arr = [1, 2, 3];
var removedMember = arr.shift(); // 1
console.log(arr); // [2, 3]
```

### forEach (IE 8 or order version does not work)
```javascript
var arr = ['Joanne', 'Irene', 'Catherine'];

arr.forEach(function(value, index, array) {
  console.log(`value:${value}, index:${index}, array:[${array}]`);
});

// value:Joanne, index:0, array:Joanne,Irene,Catherine
// value:Irene, index:1, array:Joanne,Irene,Catherine
// value:Catherine, index:2, array:Joanne,Irene,Catherine
```

### slice
Return a range of elements in an array
```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var subArr1 = arr.slice(0, 3); // [a, b, c]
var subArr2 = arr.slice(0, -2); // [a, b, c]
```

### splice
1. Delete a range of elements in an array      
splice(from, **element numbers**)
```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var subArr1 = arr.splice(1, 3);
console.log("removed: "+ subArr1); // removed: [b, c, d]
console.log(arr); // [a, e]
```

2. Update elements      
```javascript
var arr = ['a', 'b', '*', '*', 'e'];
var anonymousArr = arr.splice(2, 2, 'c', 'd');
console.log(arr); // ["a", "b", "c", "d", "e"]
console.log(anonymousArr); // ["*", "*"]
```

### concat
Merge 2 arrays      
```javascript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var newArr = arr1.concat(arr2, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### join
Convert an array to String      

```javascript
var arr1 = [1, 2, 3];
console.log(arr1.join()); // 1,2,3
console.log(arr1.join('blank')); // 1-2-3
```

### Reverse
```javascript
arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1]
```

### Sort
Sort by unicode     
In ```function(a, b)```, a is the top member whereas b is the last member.      
> ```return```:     
more than 0: the two elements will exchange        
0: the two elements are the same        
< 0: the two elements won't exchange       

```javascript
var randoms = [9, 2, 4, 7, 10];
randoms.sort(function(a, b) {
  return a-b;
});
console.log(randoms); // [2, 4, 7, 9, 10]

randoms.sort(function(a, b) {
  return b-a;
});
console.log(randoms); // [10, 9, 7, 4, 2]
```

## ECMAScrip
A specification for JavaScript. JavaScript will be executed by a distinct engine of individual browser. V8 engine of Chrome for example, showing high performance while running JavaScript.     

### ESLint
```
npm install eslint --save-dev
```
```
npm install --save-dev eslint-config-google
```
.eslintrc
```
{
    "extends": ["eslint:recommended", "google"],
    "rules": {
        // Additional, per-project rules...
    }
}
```

## DOM


## BOM


## Tips
- Try to package JS code outside html files so that the JS code is able to be reused or cached by browsers. See [Introduction]

## Cast
[尚硅谷JavaScript视频]


[尚硅谷JavaScript视频]:<https://www.bilibili.com/video/av21589800/?p=1&spm_id_from=333.788.multi_page.1>

[HelloWorld]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/HelloWorld.html>

[Introduction]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Introduction.html>

[Type.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Type.js>
[Operator.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Operator.js>


[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/JavaScript/screenshot_forEach.png
