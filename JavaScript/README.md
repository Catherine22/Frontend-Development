# JavaScript

Javascript is one of the core roles in web development (Javascript + CSS + HTML)  
HTML: The content of web pages  
CSS: Styling web pages  
JS: Programming capabilities

## Navigator

-   [ESLint and Prettier](#eslint-and-prettier)
-   [Javascript Engine](#javascript-engine)
    -   [Problematic keywords](#problematic-keywords)
    -   [Call stack vs. memory heap](#call-stack-vs-memory-heap)
    -   [Threading](#threading)
-   [Javascript Runtime](#javascript-runtime)
-   [Hoisting](#hoisting)
    -   [More Examples](#more-examples)
-   [IIFE](#iife)
-   [This](#this)
-   [apply() and call()](#apply-and-call)
-   [Function currying - bind()](#function-currying-bind)
-   [Higher Order Functions](#higher-order-functions)
-   [Closure](#Closure)
-   [Encapsulation](#encapsulation)
-   [Prototypal Inheritance](#prototypal-inheritance)
    -   [Extend the functionality of a built-in object](#extend-the-function-of-a-built-in-object)
-   [FP and OOP](#fp-and-oop)
-   [Constructor Function](#constructor-function)
-   [Reference](#Reference)

## ESLint and Prettier

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
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    "prettier.singleQuote": true,
    "prettier.arrowParens": "always",
    "prettier.tabWidth": 4,
    "prettier.jsxBracketSameLine": false,
    "prettier.jsxSingleQuote": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

The settings include vue.js (You need to install vuter as well) and react native formatting.

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

### Threading

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

### More Examples

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

Arrow function is lexically scoped whereas regular function is dynamically scoped.

Example 1: Regular function vs. arrow function

```Javascript
var skill = 'fists of thunder';
function DemonHunter() {
    this.job = 'demon hunter';
    this.skill = 'cluster arrow';
}
const eve = new DemonHunter();

// regular function
DemonHunter.prototype.attack = function() {
    console.log(this.skill);
}

eve.attack(); // cluster arrow

// arrow function
DemonHunter.prototype.attack = () => {
    console.log(this.skill);
}

eve.attack(); // fists of thunder
```

Example 2: Put an arrow function inside a regular function

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

-   `__proto__` points to `prototype`.
-   Only functions have access to `prototype`

Example 1

```Javascript
function Necromancer(name, weapon, skill) {
    this.name = name;
    this.weapon = weapon;
    this.skill = skill;
    this.job = 'necromancer';
}
Necromancer.prototype.attack = function () {
    console.log(this.skill);
}

const necromancer1 = new Necromancer('Simon', 'corpse lance', 'devour');
necromancer1.attack(); // devour

necromancer1.__proto__.attack; // function () { console.log(this.skill); }
Necromancer.prototype.attack // function () { console.log(this.skill); }
necromancer1.prototype; // undefined -> Only functions have access to prototype
Necromancer.prototype === necromancer1.__proto__; // true
```

Example 2

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

## FP and OOP

FP, aka function programming  
OOP, aka object-oriented programming

An OOP example:

```Javascript
const necromancer1 = {
    name: 'Simon',
    job: 'necromancer',
    weapon: 'corpse lance',
    skill: 'devour',
    attack() {
        console.log(skill);
    }
}

const necromancer2 = {
    name: 'Lucas',
    job: 'necromancer',
    weapon: 'cauldron',
    skill: 'frailty',
    attack() {
        console.log(skill);
    }
}
```

In FP, it will be:

```Javascript
function createNecromancer(name, weapon, skill) {
    return {
        name,
        weapon,
        skill,
        job: 'necromancer'
    }
}

const necromancerFunctions = {
    attack() {
        console.log(this.skill);
    }
}

const necromancer1 = createNecromancer('Simon', 'corpse lance', 'devour');
necromancer1.attack = necromancerFunctions.attack;
const necromancer2 = createNecromancer('Lucas', 'cauldron', 'frailty');
necromancer2.attack = necromancerFunctions.attack;
```

Instead of attach `attack` manually, (it will be a nightmare if we have hundreds of necromancers). We can use `Object.create` to add the attack function at the beginning.

```Javascript
const necromancerFunctions = {
    attack() {
        console.log(this.skill);
    }
}

function createNecromancer(name, weapon, skill) {
    let necromancer = Object.create(necromancerFunctions);
    necromancer.name = name;
    necromancer.weapon = weapon;
    necromancer.skill = skill;
    necromancer.job = 'necromancer';
    return necromancer;
}

const necromancer1 = createNecromancer('Simon', 'corpse lance', 'devour');
const necromancer2 = createNecromancer('Lucas', 'cauldron', 'frailty');
```

## Constructor Function

Instead of using `Object.create()`, we can use Constructor Function.  
With `new` keyword, we are creating a new object.

Two rules to implement a constructor function:

1. add `new`
2. function name starts with a capital letter. (coding style)

```Javascript
function Necromancer(name, weapon, skill) {
    this.name = name;
    this.weapon = weapon;
    this.skill = skill;
    this.job = 'necromancer';
}
Necromancer.prototype.attack = function () {
    console.log(this.skill);
}

const necromancer1 = new Necromancer('Simon', 'corpse lance', 'devour');
const necromancer2 = new Necromancer('Lucas', 'cauldron', 'frailty');
```

In the proceeding code snippet, `this` of Necromancer refers to `necromancer1` and `necromancer2` because of `new`.

## Reference

-   [Advanced Javascript concepts](https://www.udemy.com/course/advanced-javascript-concepts/)

[loupe]: http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
