# JavaScript

Javascript is one of the core roles in web development (Javascript + CSS + HTML)  
HTML: The content of web pages  
CSS: Styling web pages  
JS: Programming capabilities

## Basics

-   Upper case and lower case are different
-   **_Every statement must end with `;`._** Browsers automatically create `;` while the developer does not use `;`. However, that impacts the performance. The worst of all, browsers sometimes add `;` incorrectly.
-   Blanks and empty lines are ignored.
-   IDEs You might need:
    -   Brackets
    -   Visual Studio Code

### ESLint and Prettier

1. Add eslint and prettier plugins for Visual Studio Code
2. Press `command` + `shift` + `p` and search 'settings.json'
3. Add the following rules:

```json
{
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "explorer.confirmDragAndDrop": false,
    "window.zoomLevel": 0,
    "cSpell.language": "en-GB",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "vetur.validation.template": false,
    "vetur.completion.scaffoldSnippetSources": {
        "workspace": "💼",
        "user": "(User)",
        "vetur": ""
    },
    "eslint.validate": [
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        }
    ],
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "prettier.singleQuote": true,
    "prettier.arrowParens": "always",
    "prettier.tabWidth": 4,
    "prettier.jsxBracketSameLine": false,
    "prettier.jsxSingleQuote": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

The settings include vue.js (You need to install vuter as well) and react native formatting.

## Navigator

-   Basics
    -   [Literal， 字面量](#Literal)
    -   [Identifier, 标识符](#Identifier)
    -   [Type, 数据类型](#Type)
    -   [Operator, 运算符或操作符](#Operator)
    -   [Flow control and looping,   流程控制](#Flow)
    -   [Object](#Object)
    -   [Function](#Function)
    -   [Constructor, 构造函数](#Constructor)
    -   [Prototype](#Prototype)
    -   [GC, Garbage Collection](#GC)
    -   [Array](#Array)
    -   [Regular expression, 正则表达式](#正则表达式)
    -   [ECMAScrip](#ECMAScrip)
    -   [DOM](#DOM)
    -   [Chrome debugger](#chrome-debugger)
-   Core of Javascript
    -   [Javascript Engine](#javascript-engine)
-   [Reference](#Reference)

### Literal

literals are allowed to be used directly. For example:

```javascript
alert(152013257012304);
```

We do not use literals very often, variables are commonly used, like

```javascript
var id = 152013257012304;
alert(id);
```

### Identifier

An JS identifier might constants numbers, alphabets, underscores and currency symbols (\$). But starting with a number is illegal.

```javascript
var $123_a = 0;
```

### Type

There are six data types in JavaScript:

-   String
-   Number
    -   Infinity
    -   NaN: Not a number
    -   fraction: Using JS to calculate fractions, you might get an incorrect answer. For example, 0.1 + 0.2 = 0.30000000000000004
-   Boolean
-   Null
-   Undefined
    -   This means the editor has declared a variable, but he/she did not define a value for that variable.
-   Object

Go to [Type.js] to see more.

### Operator

Go to [Operator.js] to see more.

### Flow

```javascript
var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 0;
// while
while (cars[i]) {
    console.log(cars[i++]);
}

// for
i = 0;
for (; cars[i]; ) {
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
        if (number % i === 0) return false;
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
| -------- | ----- |
|          |       |
| b        | 123   |
| a        | 124   |

Object is saved to heap

```javascript
var obj = { name: 'Scout' };
var refer = obj;
refer['name'] = 'Jean';
// obj.name becomes 'Jean'
```

We have space for the value of obj with an unique address.  
Heap

| address | value          |
| ------- | -------------- |
|         |                |
|         |                |
| 0x001   | name = 'Scout' |

In stack, the value refers to addresses.  
Stack

| variable | value |
| -------- | ----- |
| refer    | 0x001 |
| obj      | 0x001 |

obj and refer have the same value (the address in heap)

```javascript
console.log(obj == refer); // true

var obj = {
    name: 'Charlotte',
    age: 19,
    showName: function() {
        console.log(obj.name);
    }
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
    "return '我是构造函数';"
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

We can retrieve all of the arguments by `arguments`  
`callee`: refer to the current function

```javascript
function testArgument(a, b, c) {
    console.log(
        `We now have ${arguments.length} arguments: [${arguments[0]}, ${arguments[1]}, ${arguments[2]}]`
    );
    console.log(arguments.callee === testArgument);
}

testArgument('a1', 'a2', 'a3');
// We now have 3 arguments: [a1, a2, a3]
// true
```

`arguments` is an array includes all the arguments of a function, it still exists even if the function is called without arguments.

```javascript
function func() {
    console.log(`We have ${arguments.length} arguments`);
    console.log(`Arguments:[${arguments[0]}, ${arguments[1]}]`);
}
func('Hello', 123);
// We have 2 arguments
// Arguments:[Hello, 123]
```

-   Input objects as arguments

```javascript
function package(container) {
    return (
        'height:' +
        container.height +
        ' width:' +
        container.width +
        ' length:' +
        container.length
    );
}

var box = { height: 3, width: 9, length: 7 };
package(box);
```

-   Call a function with a function as an argument

```javascript
function hello(name) {
    console.log('hello, ' + name);
}

function func(f, arg) {
    return f(arg);
}

func(hello, 'Rally'); // hello, Rally
```

or

```javascript
function callFuncByFunc(func) {
    return func();
}
callFuncByFunc(function() {
    console.log('hello, Rally');
}); // hello, Rally
```

-   Nested functions  
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

-   Run instant functions  
    There is no variable to refer to this function, which means this function can only be run once.

```javascript
(function print() {
    console.log('I am instant function');
})(); // I am instant function
```

> **func vs func()**  
> func(): Call the function func()  
> func: the func() object`

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

-   Call a function which returns a function

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

-   对象的方法，Set a function as a value in an object

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

### Constructor

Technically, Constructor is a function used to create objects, Constructor usually starts with a capital letter.  
Use `new` to call a constructor.

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

### Apply and call functions

We have 3 ways to run a function: `func()`, `func.call()` and `func.apply()`. When it comes to `call()` and `apply()`, the first argument we input is used to assign to `this`.

1. No argument

```javascript
var carWorld = {
    car: 'trunk',
    showCar: function() {
        console.log(this.car);
    }
};
carWorld.showCar(); // trunk
carWorld.showCar.call({ car: 'Sport car' }); // Sport car
carWorld.showCar.apply({ car: 'Motorhome' }); // Motorhome
```

2. Call a function with arguments

```javascript
function showCar(color) {
    console.log(`${this.car}, color=${color}`);
}

showCar('black'); // undefined, color=black
showCar.call({ car: 'Sport car' }, 'red'); // Sport car, color=red
showCar.apply({ car: 'Motorhome' }, ['white']); // Motorhome, color=white
```

[Function.js]

### GC

Browsers automatically deal with rubbish (which are basically objects do not be refer by a specific key in the stack) in the heap, there are different solution depends on the browser.

### Array

It can be anything type you need to store in an array

```javascript
var obj = { name: 'Ana' };
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

-   Add a value to the end of an array

```javascript
var arr = [1, 2, 3];
var newLength = arr.push(4); // 4
console.log(arr); // [1, 2, 3, 4]
```

-   Add a value from the top of an array

```javascript
var arr = [1, 2, 3];
var newLength = arr.unshift(0); // 4
console.log(arr); // [0, 1, 2, 3]
```

-   Remove the last member of an array

```javascript
var arr = [1, 2, 3];
var removedMember = arr.pop(); // 3
console.log(arr); // [1, 2]
```

-   Remove the first member of an array

```javascript
var arr = [1, 2, 3];
var removedMember = arr.shift(); // 1
console.log(arr); // [2, 3]
```

#### forEach (IE 8 or order version does not work)

```javascript
var arr = ['Joanne', 'Irene', 'Catherine'];

arr.forEach(function(value, index, array) {
    console.log(`value:${value}, index:${index}, array:[${array}]`);
});

// value:Joanne, index:0, array:Joanne,Irene,Catherine
// value:Irene, index:1, array:Joanne,Irene,Catherine
// value:Catherine, index:2, array:Joanne,Irene,Catherine
```

#### slice

Return a range of elements in an array

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var subArr1 = arr.slice(0, 3); // [a, b, c]
var subArr2 = arr.slice(0, -2); // [a, b, c]
```

#### splice

1. Delete a range of elements in an array  
   splice(from, **element numbers**)

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var subArr1 = arr.splice(1, 3);
console.log('removed: ' + subArr1); // removed: [b, c, d]
console.log(arr); // [a, e]
```

2. Update elements

```javascript
var arr = ['a', 'b', '*', '*', 'e'];
var anonymousArr = arr.splice(2, 2, 'c', 'd');
console.log(arr); // ["a", "b", "c", "d", "e"]
console.log(anonymousArr); // ["*", "*"]
```

#### concat

Merge 2 arrays

```javascript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var newArr = arr1.concat(arr2, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]
```

#### join

Convert an array to String

```javascript
var arr1 = [1, 2, 3];
console.log(arr1.join()); // 1,2,3
console.log(arr1.join('-')); // 1-2-3
```

#### Reverse

```javascript
arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1]
```

#### Sort

Sort by unicode  
In `function(a, b)`, a is the top member whereas b is the last member.

> `return`:  
> more than 0: the two elements will exchange  
> 0: the two elements are the same  
> < 0: the two elements won't exchange

```javascript
var randoms = [9, 2, 4, 7, 10];
randoms.sort(function(a, b) {
    return a - b;
});
console.log(randoms); // [2, 4, 7, 9, 10]

randoms.sort(function(a, b) {
    return b - a;
});
console.log(randoms); // [10, 9, 7, 4, 2]
```

[Array.js]

### 正则表达式

NO BLANKS

```javascript
const reg = new RegExp('YOUR_RULE', 'MODE');
```

or

```javascript
const reg = /YOUR_RULE/DEMO;
```

> MODE:  
> i: Ignore case  
> g: Global mode

```javascript
function checkArray(array, reg) {
    const results = {};
    for (let i = 0; i < array.length; i++) {
        results[array[i]] = reg.test(array[i]);
    }
    console.log(results);
}
```

E.g. Include 'abc' and ignore case

```javascript
const messyABC = ['_.AbC__', 'a_b9c', 'abc', ''];
let reg = /abc/i;
checkArray(messyABC, reg);
// {_.AbC__: true, a_b9c: false, abc: true, "": false}
```

E.g. Include 'a', 'b' and 'c' and ignore case

```javascript
reg = /a|b|c/i;
checkArray(messyABC, reg);
// {_.AbC__: true, a_b9c: true, abc: true, "": false}
```

> `/a|b|c/i` can be replace by `/[abc]/i` or `/[a-c]/i`

E.g. Capital Letters are included

```javascript
let randomString = ['_.^$)?<}', 'E123098', 'cdef', '', '02804792'];
reg = /[A-Z]/;
checkArray(randomString, reg);
// {_.^$)?<}: false, E123098: true, cdef: false, "": false, 02804792: false}
```

> `/[A-z]/` is the same as `/[a-z]/i`  
> `/[0-9]` : Numbers are included

E.g 'abc', 'adc' or 'aec' are included

```javascript
randomString = ['abcdef', 'cda', 'AEC', 'a_e_c', 'aec02804792aec'];
reg = /a[bde]c/; // /abc|adc|aec/
checkArray(randomString, reg);
// {abcdef: true, cda: false, AEC: false, a_e_c: false, aec02804792aec: true}
```

> In this case, you could use either `/a[bde]c/` or `/abc|adc|aec/`

E.g. String starts from 'a'

```javascript
reg = /^a/;
checkArray(randomString, reg);
// {abcdef: true, cda: false, AEC: false, a_e_c: true, aec02804792aec: true}
```

E.g. String starts from 'aec'

```javascript
reg = /(aec)$/i;
checkArray(randomString, reg);
// {abcdef: false, cda: false, AEC: true, a_e_c: false, aec02804792aec: true}
```

Cp.

```javascript
reg = /^(aec)$/i;
checkArray(randomString, reg);
// {abcdef: false, cda: false, AEC: true, a_e_c: false, aec02804792aec: false}
```

E.g. Split String by letters

```javascript
let message = '1z2bX3L4p5y6f7';
console.log(message.split(/[A-z]/));
// ["1", "2", "", "3", "4", "5", "6", "7"]
```

E.g. Search THE FIRST 'abc', 'adc' or 'aec' from String

```javascript
message = 'a$bcdef cda a_e_c 0280aec4792';
console.log(message.search(/a[bde]c/));
// 22
```

E.g. Replace THE FIRST 'abc', 'adc' or 'aec' from String

```javascript
message = '(abc)qwepoim(aec)acpo(adc)';
console.log(message.replace(/a[bde]c/, '@_@'));
// (@_@)qwepoim(aec)acpo(adc)
```

> Replace ALL by MODE=`g`

```javascript
message = '(abc)qwepoim(aec)acpo(adc)';
console.log(message.replace(/a[bde]c/g, '@_@'));
// (@_@)qwepoim(@_@)acpo(@_@)
```

E.g. Include 'aaaa' (4 consecutive 'a')

```javascript
randomString = ['aaa', 'aaaa', 'ababababab', 'aaaaaaaa'];
reg = /a{4}/;
checkArray(randomString, reg);
// {aaa: false, aaaa: true, ababababab: false, aaaaaaaa: true}
```

> Check for 5 consecutive 'ab', we use `\(ab){5}\`  
> Check for 'a' + at least 2 and at most 3 consecutive 'bcd' + 'e'

```javascript
randomString = ['abcde', 'abcdbcdbcde', 'abcdbcdbcdbcdbcde', 'bcd', 'abcd'];
reg = /a(bcd){2,3}e/;
checkArray(randomString, reg);
// {abcde: false, abcdbcdbcde: true, abcdbcdbcdbcdbcde: false, bcd: false, abcd: false}
```

> Now we have:  
> `element{n, }`: at least n elements  
> `element{n, m}`: at least n and at most m elements  
> `element+`: equal to `element{1, }`  
> `element*`: equal to `element{0, }`

```javascript
randomString = ['ABC', 'ABCABC', 'AABBCC', 'DEF'];
reg = /(abc)+/i;
checkArray(randomString, reg);
// {ABC: true, ABCABC: true, AABBCC: false, DEF: false}

reg = /(abc)*/i;
checkArray(randomString, reg);
// {ABC: true, ABCABC: true, AABBCC: true, DEF: true}
```

> Special statements
> `/w`: `[A-z0-9_]`, including letters, numbers or '_'  
> `/W`: ```[^A-z0-9_]`, no letters, numbers and '_'`/d`:`[0-9_]`, numbers only`/D`:`[^0-9_]`, no numbers`/s`: blanks only`/S`: no blanks`/bVOCABULARY/b`: check whether or not a vocabulary exists`/bVOCABULARY/b```: check if a vocabulary does not exist

E.g. `trim()`

```javascript
message = '    ad  min     ';
reg = /\s/g;
console.log(`${message}: ${message.replace(reg, '')}`);
//    ad  min     : admin
```

E.g. Trim the beginning and the end the String

```javascript
message = '    David Lin     ';
reg = /^\s* | \s*$/g;
console.log(`${message}: ${message.replace(reg, '')}`);
//     David Lin     : David Lim
```

#### Verify phone numbers

1. 11 digits
2. Start by 1
3. the second digit must be 3-9

```javascript
randomString = [
    '135-1234-1234',
    'A135-1234-1234A',
    '135 1234 1234',
    '1-35-1234-1-2-3-4',
    '19200001234',
    '110-1234-1234',
    '03200001234',
    '135-1234-12345',
    '1350000123'
];
reg = /^1[3-9][0-9]{9}$/;
let results = {};
for (let i = 0; i < randomString.length; i++) {
    // remove blanks and '_'
    let res = randomString[i].replace(/[-\s]/g, '');
    results[randomString[i]] = reg.test(res);
}
console.log(results);

/*
{1-35-1234-1-2-3-4: true
110-1234-1234: false
135 1234 1234: true
135-1234-1234: true
135-1234-12345: false
1350000123: false
03200001234: false
19200001234: true
A135-1234-1234A: false}
*/
```

#### Verify email addresses

[letters, numbers and/or _] + (optional) [. + letters, numbers and/or _] + @ + [letters and/or numbers] + . + [2-5 letters] + (optional)[. + 2-5 letters]

```javascript
randomString = [
    'test@test.com',
    'a.b_@gmail.com',
    'david.lim@gmail.com',
    'test@test_1.com',
    'testgmail.com',
    'test@gmail',
    'test@@test.com',
    'test@test.a',
    'test@abcdfghjklertyui.com.abc.qwert.12345',
    'test@ddd.abcdef',
    'test@abc.com.dddddd',
    'test!@gmail.com',
    'test..c@gmail.com',
    'test@abc.123',
    'david.lim@gmail.comorgm'
];

reg = /\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
const validString = [];
for (let i = 0; i < randomString.length; i++) {
    if (reg.test(randomString[i])) validString.push(randomString[i]);
}
console.log(`Valid email:\n[${validString.join(',\n')}]`);

/*
Valid email:
[test@test.com,
david.lim@gmail.com,
test@test_1.com]
*/
```

### ECMAScrip

A specification for JavaScript. JavaScript will be executed by a distinct engine of individual browser. V8 engine of Chrome for example, showing high performance while running JavaScript.  
GO to [ES6 example](https://github.com/Catherine22/Front-end-warm-up/tree/master/ES6) to learn more.

### DOM
DOM, Document Object Model.     

> Document: Document is basically a file, in DOM, we are normally referring to .html files        
> Object: Objects in html files, every html tag is a object       
> Model: Model is how you layout this structure       

Example:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My title</title>
    <head>
    <body>
        <h1>Hello</h1>
    </body>
</html>
```

Your DOM view will be
```
├─DOCTYPE: html
└─HTML
  ├─HEAD
  | ├─#text:
  | ├─TITLE
  | |  └─#text: My title
  | └─#text:
  └─BODY
    ├─#text:
    ├─H1
    | └─#text: Hello
    └─#text:
```

[DOM online viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)        
[DOM Document](https://www.w3.org/TR/DOM-Level-2-Core/)     

### Chrome Debugger

![3](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/JavaScript/screenshot_debugger.png)

-   open developer tools panel: `⌘` + `⌥` + `i`
-   You can create your own code snippet to run JavaScript, add the `debugger` keyword to stop the execution

## Javascript Engine

![JS engine's pipeline](https://miro.medium.com/max/2038/1*ZIH_wjqDfZn6NRKsDi9mvA.png)
[reference](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)

-   [AST explorer](https://astexplorer.net/)

> So, is Javascript an interpreted language?
> Ans: Not technically. Because it depends on how JS engine deals with it.

### Problematic keywords

JS engine cannot optimise code snippet properly with these keywords. I.e. These keywords is absolutely functional, but it would slower the execution a little bit.

-   eval()
-   arguments
-   for in
-   with
-   delete
-   hidden classes
-   inline caching

## Reference

-   [Advanced Javascript concepts](https://www.udemy.com/course/advanced-javascript-concepts/)
-   [helloworld](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/HelloWorld.html)
-   [introduction](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Introduction.html)
-   [type.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Type.js)
-   [operator.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Operator.js)
-   [function.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Function.js)
-   [array.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Array.js)
-   [utils.html](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Utils.html)
-   [dom.html](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/DOM.html)
