# JavaScript

Javascript is one of the core roles in web development (Javascript + CSS + HTML)  
HTML: The content of web pages  
CSS: Styling web pages  
JS: Programming capabilities

## Basics

-   Upper case and lower case are different
-   **Every statement must end with `;`.** Browsers automatically create `;` while the developer does not use `;`. However, that impacts the performance. The worst of all, browsers sometimes add `;` incorrectly.
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
    -   [Literal](#Literal)
    -   [Identifier](#Identifier)
    -   [Type](#Type)
    -   [Operator](#Operator)
    -   [Flow control and looping](#flow)
    -   [Object](#Object)
    -   [Function](#Function)
    -   [Constructor](#Constructor)
    -   [Prototype](#Prototype)
    -   [GC, Garbage Collection](#GC)
    -   [Array](#Array)
    -   [Regular expression](#regular-expression)
    -   [ECMAScrip](#ECMAScrip)
    -   [Chrome debugger](#chrome-debugger)
-   Intermediate Tutorial
    -   [Javascript Engine](#javascript-engine)
    -   [Javascript Runtime](#javascript-runtime)
    -   [Hoisting](#hoisting)
    -   [IIFE](#iife)
    -   [This](#this)
    -   [apply() and call()](#apply-and-call)
    -   [Function currying - bind()](#function-currying-bind)
    -   [Higher Order Functions](#higher-order-functions)
    -   [Closure](#Closure)
    -   [Encapsulation](#encapsulation)
    -   [Prototypal Inheritance](#prototypal-inheritance)
        -   [Extend the functionality of a built-in object](#extend-the-function-of-a-built-in-object)
-   [Reference](#Reference)

### Literal

literals are allowed to be used directly. For example:

```Javascript
alert(152013257012304);
```

We do not use literals very often, variables are commonly used, like

```Javascript
var id = 152013257012304;
alert(id);
```

### Identifier

An JS identifier might constants numbers, alphabets, underscores and currency symbols (\$). But starting with a number is illegal.

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
var person = new Object();
person.name = 'Scout';
person.age = 18;
```

or

```Javascript
var person = new Object();
person['name'] = 'Scout';
person['age'] = 18;
```

or

```Javascript
var person = {
    name: 'Scout',
    age: 18
};
```

**Memory**  
stack vs heap

In JS, basic types are saved to stack

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
function sum(num1, num2) {
    return num1 + num2;
}
```

or

```Javascript
// Anonymous function
var sum = function(num1, num2) {
    return num1 + num2;
};
```

We can retrieve all of the arguments by `arguments`  
`callee`: refer to the current function

```Javascript
function f(a, b, c) {
    console.log(arguments);
    console.log(arguments.callee === f);
}
f('A', 'B', 'C');
// { 0: 'A', 1: 'B', 2: 'C'}
// true
```

`arguments` is an array includes all the arguments of a function, it still exists even if the function is called without arguments.

```Javascript
function f() {
    console.log(arguments);
}
f();
// {}
```

Two ways to convert arguments to an array

1.

```Javascript
let arr = Array.from(arguments);
```

2.

```Javascript
function f(...args) {
    console.log(args);
}
f('A', 'B', 'C');
// ['A', 'B', 'C']
```

-   Input objects as arguments

```Javascript
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

```Javascript
function hello(name) {
    console.log('hello, ' + name);
}

function func(f, arg) {
    return f(arg);
}

func(hello, 'Rally'); // hello, Rally
```

or

```Javascript
function callFuncByFunc(func) {
    return func();
}
callFuncByFunc(function() {
    console.log('hello, Rally');
}); // hello, Rally
```

-   Nested functions  
    Call functions inside a function

```Javascript
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

```Javascript
(function print() {
    console.log('I am instant function');
})(); // I am instant function
```

> **func vs func()**  
> func(): Call the function func()  
> func: the func() object`

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
console.log(julianne.toString()); // [object Object]

// override
julianne.toString = function() {
    return 'Hi, I am Julianne';
};
console.log(julianne.toString()); // Hi, I am Julianne
```

### Override parent's functions

```Javascript
console.log(julianne.toString()); // [object Object]

// override
julianne.toString = function() {
    return 'Hi, I am Julianne';
};
console.log(julianne.toString()); // I am a happy employee
```

### Copy Object

You cannot simply copy an object like `a = b`, because object is passing by reference.

Two ways to shallow copy (which means you cannot clone nested objects):

```Javascript
let a = Object.assign({}, b);
```

```Javascript
let a = {...b};
```

Deep clone

```Javascript
let a = JSON.parse(JSON.stringify(b));
```

### GC

Browsers automatically deal with rubbish (which are basically objects do not be refer by a specific key in the stack) in the heap, there are different solution depends on the browser.

### Array

It can be anything type you need to store in an array

```Javascript
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

```Javascript
var arr = new Array(10);
```

-   Add a value to the end of an array

```Javascript
var arr = [1, 2, 3];
var newLength = arr.push(4); // 4
console.log(arr); // [1, 2, 3, 4]
```

-   Add a value from the top of an array

```Javascript
var arr = [1, 2, 3];
var newLength = arr.unshift(0); // 4
console.log(arr); // [0, 1, 2, 3]
```

-   Remove the last member of an array

```Javascript
var arr = [1, 2, 3];
var removedMember = arr.pop(); // 3
console.log(arr); // [1, 2]
```

-   Remove the first member of an array

```Javascript
var arr = [1, 2, 3];
var removedMember = arr.shift(); // 1
console.log(arr); // [2, 3]
```

#### forEach (IE 8 or order version does not work)

```Javascript
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

```Javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var subArr1 = arr.slice(0, 3); // [a, b, c]
var subArr2 = arr.slice(0, -2); // [a, b, c]
```

#### splice

1. Delete a range of elements in an array  
   splice(from, **element numbers**)

```Javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var subArr1 = arr.splice(1, 3);
console.log('removed: ' + subArr1); // removed: [b, c, d]
console.log(arr); // [a, e]
```

2. Update elements

```Javascript
var arr = ['a', 'b', '*', '*', 'e'];
var anonymousArr = arr.splice(2, 2, 'c', 'd');
console.log(arr); // ["a", "b", "c", "d", "e"]
console.log(anonymousArr); // ["*", "*"]
```

#### concat

Merge 2 arrays

```Javascript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var newArr = arr1.concat(arr2, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]
```

#### join

Convert an array to String

```Javascript
var arr1 = [1, 2, 3];
console.log(arr1.join()); // 1,2,3
console.log(arr1.join('-')); // 1-2-3
```

#### Reverse

```Javascript
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

```Javascript
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

### Regular Expression

NO BLANKS

```Javascript
const reg = new RegExp('YOUR_RULE', 'MODE');
```

or

```Javascript
const reg = /YOUR_RULE/DEMO;
```

> MODE:  
> i: Ignore case  
> g: Global mode

```Javascript
function checkArray(array, reg) {
    const results = {};
    for (let i = 0; i < array.length; i++) {
        results[array[i]] = reg.test(array[i]);
    }
    console.log(results);
}
```

E.g. Include 'abc' and ignore case

```Javascript
const messyABC = ['_.AbC__', 'a_b9c', 'abc', ''];
let reg = /abc/i;
checkArray(messyABC, reg);
// {_.AbC__: true, a_b9c: false, abc: true, "": false}
```

E.g. Include 'a', 'b' and 'c' and ignore case

```Javascript
reg = /a|b|c/i;
checkArray(messyABC, reg);
// {_.AbC__: true, a_b9c: true, abc: true, "": false}
```

> `/a|b|c/i` can be replace by `/[abc]/i` or `/[a-c]/i`

E.g. Capital Letters are included

```Javascript
let randomString = ['_.^$)?<}', 'E123098', 'cdef', '', '02804792'];
reg = /[A-Z]/;
checkArray(randomString, reg);
// {_.^$)?<}: false, E123098: true, cdef: false, "": false, 02804792: false}
```

> `/[A-z]/` is the same as `/[a-z]/i`  
> `/[0-9]` : Numbers are included

E.g 'abc', 'adc' or 'aec' are included

```Javascript
randomString = ['abcdef', 'cda', 'AEC', 'a_e_c', 'aec02804792aec'];
reg = /a[bde]c/; // /abc|adc|aec/
checkArray(randomString, reg);
// {abcdef: true, cda: false, AEC: false, a_e_c: false, aec02804792aec: true}
```

> In this case, you could use either `/a[bde]c/` or `/abc|adc|aec/`

E.g. String starts from 'a'

```Javascript
reg = /^a/;
checkArray(randomString, reg);
// {abcdef: true, cda: false, AEC: false, a_e_c: true, aec02804792aec: true}
```

E.g. String starts from 'aec'

```Javascript
reg = /(aec)$/i;
checkArray(randomString, reg);
// {abcdef: false, cda: false, AEC: true, a_e_c: false, aec02804792aec: true}
```

Cp.

```Javascript
reg = /^(aec)$/i;
checkArray(randomString, reg);
// {abcdef: false, cda: false, AEC: true, a_e_c: false, aec02804792aec: false}
```

E.g. Split String by letters

```Javascript
let message = '1z2bX3L4p5y6f7';
console.log(message.split(/[A-z]/));
// ["1", "2", "", "3", "4", "5", "6", "7"]
```

E.g. Search THE FIRST 'abc', 'adc' or 'aec' from String

```Javascript
message = 'a$bcdef cda a_e_c 0280aec4792';
console.log(message.search(/a[bde]c/));
// 22
```

E.g. Replace THE FIRST 'abc', 'adc' or 'aec' from String

```Javascript
message = '(abc)qwepoim(aec)acpo(adc)';
console.log(message.replace(/a[bde]c/, '@_@'));
// (@_@)qwepoim(aec)acpo(adc)
```

> Replace ALL by MODE=`g`

```Javascript
message = '(abc)qwepoim(aec)acpo(adc)';
console.log(message.replace(/a[bde]c/g, '@_@'));
// (@_@)qwepoim(@_@)acpo(@_@)
```

E.g. Include 'aaaa' (4 consecutive 'a')

```Javascript
randomString = ['aaa', 'aaaa', 'ababababab', 'aaaaaaaa'];
reg = /a{4}/;
checkArray(randomString, reg);
// {aaa: false, aaaa: true, ababababab: false, aaaaaaaa: true}
```

> Check for 5 consecutive 'ab', we use `\(ab){5}\`  
> Check for 'a' + at least 2 and at most 3 consecutive 'bcd' + 'e'

```Javascript
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

```Javascript
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

```Javascript
message = '    ad  min     ';
reg = /\s/g;
console.log(`${message}: ${message.replace(reg, '')}`);
//    ad  min     : admin
```

E.g. Trim the beginning and the end the String

```Javascript
message = '    David Lin     ';
reg = /^\s* | \s*$/g;
console.log(`${message}: ${message.replace(reg, '')}`);
//     David Lin     : David Lim
```

#### Verify phone numbers

1. 11 digits
2. Start by 1
3. the second digit must be 3-9

```Javascript
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

```Javascript
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

### Call stack vs. memory heap

As code runs, it pushes functions into the stack, and pup out after the execution. Simple variables can be stored on the stack, whereas objects and complex data structures are stored in memory heaps.

## Threading

**Javascript is a single-threaded programming language**. But sometimes Javascript can be 'asynchronous', and that's because browsers provide **Web APIs**, which is written in language like C++ to help Javascript to do a couple of operations. E.g. DOM, fetch.

Being single-threaded means there is only one call stack while running, let's take a look at an example of call stack:

```Javascript
function a() {
    b();
}

function b() {
    console.log('done!');
}

a();
```

The call stack will be:

```Javascript
a();
```

```Javascript
b();
a();
```

```Javascript
console.log('done!');
b();
a();
```

Once all the functions is done, they will be popped up in order

```Javascript
b();
a();
```

```Javascript
a();
```

```Javascript
// empty
```

To see how exactly call stack and Web APIs work, go to [loupe].

## Javascript Runtime

The only Javascript time I know, as you might have heard, is Node.js. Node.js makes Javascript be able to run outside of browser. This 'program' uses V8 engine to interpret Javascript creates the entire environment to run Javascript code and offer additional APIs to do things like asynchronous jobs.

## Hoisting

Javascript engine allocates memory for variables and functions before we execute it. E.g.

```Javascript
console.log(teddy);
console.log(sing());

var teddy = 'bear';
function sing() {
  console.log('Hello from the other side...');
}

// undefined
// 'Hello from the other side...'
```

The reason why this code snippet doesn't crash is that Javascript engine hoist it before running `console.log(teddy);`, what it does is `var teddy = undefined;`. The function is moved to the top before being called as well.  
Notice, hoisting is working when the code snippet starts from `var` and `function`, on the other hand, `const` and `let` do not be hoisted. A special case is **function expression**.

```Javascript
console.log(teddy);
console.log(snoopy);
sing();

let teddy = 'bear';
const snoopy = 'dogs';
// function expression
var sing = function() {
    console.log('Hello from the other side...');
}

// Uncaught ReferenceError: Cannot access 'teddy' before initialization
// Uncaught ReferenceError: Cannot access 'snoopy' before initialization
// Uncaught TypeError: sing is not a function
```

### More examples

```Javascript
console.log('#1, a=', a);
var a = 10;
console.log('#2, a=', a);
var a = 20;
console.log('#3, a=', a);
```

Your will get: #1 = undefined, #2 = 10, #3 = 20

```Javascript
console.log('#1, f()=', f());
function f() {
return 0;
}

console.log('#2, f()=', f());
function f() {
return 1;
}

console.log('#3, f()=', f());
```

Your will get: #1 = 1, #2 = 1, #3 = 1

```Javascript
var favouriteFood = 'hot dog';
function toGo() {
  console.log(`I\'d like some ${favouriteFood}`)

  var favouriteFood = 'pizza';
  console.log(`A ${favouriteFood} is just fine`);
}

toGo();
```

The result will be:

```
'I'd like some undefined'
'A pizza is just fine'
```

With Javascript hoisting, this code is actually be executed as:

```Javascript
/*----------------------------------------*/
/**************** Hoisting ****************/
/*----------------------------------------*/
// Assign undefined to statements start with 'var'
var favouriteFood = undefined;

// Define statements start with 'function'
function toGo() {
  console.log(`I\'d like some ${favouriteFood}`)

  var favouriteFood = 'pizza';
  console.log(`A ${favouriteFood} is just fine`);
}
/*----------------------------------------*/
/**************** Hoisting ****************/
/*----------------------------------------*/

var favouriteFood = 'hot dog';
toGo();
```

## IIFE

Aka Immediately-invoked Function Expression, a common Javascript design pattern.  
It allows us to call functions immediately right after it is created. E.g.

Normally, you cannot

```Javascript
function a() {
    // do something
}();
// error -> Uncaught SyntaxError: Unexpected token ')'
```

With IIFE, you can:

```Javascript
// style 1
(function a() {
     console.log('a is running...');
     }
)()
 // a is running...

// style 2
(function a() {
     console.log('a is running...');
     }()
)
 // a is running...
```

Eventually, we can have one global variable containing objects and functions. The advantage is that this code snippet only pollute the global execution context once, i.e. `script1` in next examples, we are scoping things into their own environments.

```Javascript
let script1 = (function () {
    function a1() {
        return 5;
    }
    return {
        a1: a1
    }
})()

script1.a1(); // 5
```

You can access arguments if you need

```Javascript
let script2 = (function (num) {
    function a1() {
        return num;
    }
    return {
        a1: a1
    }
})(12345)

script2.a1(); // 12345
```

## This

Before we dive into `this`, let's have a look at the code snippet

```Javascript
var name = 'Alice';
function whoAmI() {
    console.log(this.name);
}

const obj = {
    name: 'Bob',
    whoAmI: function() {
         console.log(this.name);
    }
}

whoAmI(); // Alice
obj.whoAmI(); // Bob
```

Let change it a little bit

```Javascript
var name = 'Alice';
function whoAmI() {
    console.log(this.name);
}

const obj = {
    name: 'Bob',
    whoAmI: function() {
        var f = function() {
            console.log(this.name);
        };
        return f();
    }
}

whoAmI(); // Alice
obj.whoAmI(); // Alice
```

**In JavaScript our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)**

To make obj.whoAmI() print 'Bob', here are three solutions

1. ES6 arrow function

Arrow function is lexical scope

```Javascript
const obj = {
    name: 'Bob',
    whoAmI: function() {
        var f = () => {
            console.log(this.name);
        };
        return f();
    }
}

obj.whoAmI(); // Bob
```

2. binding this

```Javascript
const obj = {
    name: 'Bob',
    whoAmI: function() {
        var f = function() {
            console.log(this.name);
        };
        return f.bind(this)();
    }
}

obj.whoAmI(); // Bob
```

3. Point this to self

```Javascript
const obj = {
    name: 'Bob',
    whoAmI: function() {
        var self = this;
        var f = function() {
            console.log(self.name);
        };
        return f();
    }
}

obj.whoAmI(); // Bob
```

More examples of how the `this` keyword works in Javascriptreact

```Javascript
var name = 'unknown';
const a = {
    name: 'a',
    echo() {
        return this.name;
    }
}


const b = {
    name: 'b',
    echo() {
        return function() {
            return this.name;
        }
    }
}


const c = {
    name: 'c',
    echo() {
        return () => {
            return this.name;
            }
        }
}


a.echo(); // a
b.echo()(); // unknown
c.echo()(); // c
```

Now, this one is tricky

```Javascript
var name = 'unknown';
const d = {
    name: 'd',
    echo() {
        return this.name;
    }
}

d.echo(); // d

const trick = d.echo;
trick(); // unknown
```

To solve this issue, we have to bind `trick` to the lexical scope, i.e. link `this` to `d` object.

```Javascript
const trick = d.echo.bind(d);
trick(); // d
```

## apply() and call()

Before we explain what `apply()` and `call()` are, let's take a look at the code snippet at first

```Javascript
let wizard = {
    name: 'Merlin',
    health: 80,
    heal() {
        return this.health = 100;
    }
}

console.log(wizard); // {name: "Merlin", health: 80, heal: ƒ}
wizard.heal();
console.log(wizard); // {name: "Merlin", health: 100, heal: ƒ}
```

Then we have another object, this Robin can't `heal` himself

```Javascript
let archer = {
    name: 'Robin Hood',
    health: 30
}
```

To `heal` someone who do not know how to use magic, i.e. to call function from another object, we can used `apply()` or `call()`

```Javascript
// {name: "Robin Hood", health: 30}
wizard.heal.call(archer);
// {name: "Robin Hood", health: 100}
```

The only difference between `apply()` and `call()` is the way to access arguments.

```Javascript
let wizard = {
    name: 'Merlin',
    health: 80,
    heal() {
        return this.health = 100;
    },
    fly(d1, d2, d3) {
        this.health -= d1;
        this.health -= d2;
        this.health -= d3;
        return this.health;
    }
}

let archer = {
    name: 'Robin Hood',
    health: 30
}
```

```Javascript
wizard.fly.call(archer, 1, 3, 5);
// {name: "Robin Hood", health: 21}
```

Or

```Javascript
wizard.fly.apply(archer, [1, 3, 5]);
// {name: "Robin Hood", health: 21}
```

Another example: To find out the max number in a given array

```Javascript
function getMaxNumber(arr){
  return Math.max.apply(null, arr);
}
```

## Function currying - bind()

```Javascript
function add(a, b) {
    return (a + b);
}

add(1, 1); // 2
```

Let's bind the `add()` and see what will happen

```Javascript
const addTwo = add.bind(this, 2);
addTwo(1); // 3

const addTen = add.bind(this, 10);
addTen(1); // 11
```

## Higher Order Functions

Function returns function.

E.g. A HOF function

```Javascript
const multiplyBy = function(n1) {
    return function(n2) {
        return n1 * n2;
    }
}
```

Or written in ES6 style

```Javascript
const multiplyBy = (n1) => (n2) => n1 * n2;
```

And you can call the function

```Javascript
const multiplyByTen = multiplyBy(10);
multiplyByTen(2); // 20
multiplyByTen(5); // 50
```

## Encapsulation

What encapsulation does is to hide some information from the outside world.

For example:

```Javascript
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++; // hide this method
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    }
    setInterval(passTime, 1000);
    return {
        launch,
        totalPeaceTime
    }
}

const ohNo = makeNuclearButton();
ohNo.totalPeaceTime(); // 5
ohNo.launch(); // 💥
```

## Prototypal Inheritance

```Javascript
const lizard = {
    name: 'lizard',
    isVenomous: true
}
const lizardman = {
    name: 'lizardman',
    canDream: true
}
lizardman.__proto__ = lizard;

lizardman.canDream; // true
lizardman.isVenomous; // true
lizardman // {name: "lizardman" canDream: true __proto__: {name: "lizard" isVenomous: true __proto__: {...}}
lizardman.hasOwnProperty('canDream'); // true
lizardman.hasOwnProperty('isVenomous'); // false
```

### Extend the functionality of a built-in object

E.g. Create a `format()` of `Date`

```Javascript
Date.prototype.format = function() {
    let formattedDate = '';
    const yyyy = this.getFullYear();
    const mm = this.getMonth() + 1;
    const dd = this.getDate();

    formattedDate += (mm > 9) ? mm: `0${mm}`;
    formattedDate += '/';
    formattedDate += (dd > 9) ? dd : `0${dd}`;
    formattedDate += '/';
    formattedDate += yyyy;
    return formattedDate;
}

new Date().format(); // 02/20/2020
```

## Reference

-   [Advanced Javascript concepts](https://www.udemy.com/course/advanced-javascript-concepts/)
-   [helloWorld.html](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/HelloWorld.html)
-   [introduction.html](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Introduction.html)
-   [type.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Type.js)
-   [operator.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Operator.js)
-   [function.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Function.js)
-   [array.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Array.js)
-   [utils.html](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Utils.html)
-   [dom.html](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/DOM.html)

[loupe]: http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
