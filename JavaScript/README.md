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

  this.showname = function showName() {
    console.log(this.name);
  }
}

var julianne = new Employee('Julianne', 1);
console.log(julianne); // Employee {name: "Julianne", id: 1, showname: ƒ}
julianne.showname(); // Julianne
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
