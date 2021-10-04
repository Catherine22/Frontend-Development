# JavaScript

Javascript is one of the core roles in web development (Javascript + CSS + HTML)  
HTML: The content of web pages  
CSS: Styling web pages  
JS: Programming capabilities

## Navigator

- [JavaScript](#javascript)
  - [Navigator](#navigator)
  - [ESLint and Prettier](#eslint-and-prettier)
  - [Javascript Engine](#javascript-engine)
    - [Problematic keywords](#problematic-keywords)
    - [Call stack vs memory heap](#call-stack-vs-memory-heap)
    - [Execution context](#execution-context)
    - [Threading](#threading)
  - [Javascript Runtime](#javascript-runtime)
  - [Hoisting](#hoisting)
    - [More Examples](#more-examples)
  - [IIFE](#iife)
  - [This](#this)
  - [apply() and call()](#apply-and-call)
  - [Function currying - bind()](#function-currying---bind)
  - [Recap `this`](#recap-this)
  - [Types](#types)
  - [Invoking functions](#invoking-functions)
  - [Higher-Order Functions](#higher-order-functions)
  - [Encapsulation](#encapsulation)
  - [Prototypal Inheritance](#prototypal-inheritance)
    - [Extend the functionality of a built-in object](#extend-the-functionality-of-a-built-in-object)
  - [FP and OOP](#fp-and-oop)
  - [Constructor Function](#constructor-function)
  - [Promises](#promises)
    - [Promises Chaining](#promises-chaining)
    - [Promise.all](#promiseall)
    - [Promise Race](#promise-race)
    - [Conclusion - 3 ways to handle promises](#conclusion---3-ways-to-handle-promises)
  - [Queue Priority](#queue-priority)
  - [Concurrency and Parallelism](#concurrency-and-parallelism)
  - [Modules](#modules)
    - [ECMAScript](#ecmascript)
      - [ES6](#es6)
      - [ES8](#es8)
      - [ES9](#es9)
  - [Reference](#reference)

## ESLint and Prettier

1. Add eslint and prettier plugins for Visual Studio Code
2. Press `command` + `shift` + `p` and search 'settings.json'. See [vscode-settings.json]

The settings include vue.js (You need to install `vuter` as well) and react-native formatting.

## Javascript Engine

![JS engine's pipeline](https://miro.medium.com/max/2038/1*ZIH_wjqDfZn6NRKsDi9mvA.png)
[reference](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)

-   [AST explorer](https://astexplorer.net/)

> So, is Javascript an interpreted language?
> Ans: Not technically. Because it depends on how the JS engine deals with it.

### Problematic keywords

JS engine cannot optimise code snippets properly with these keywords. I.e. These keywords are functional, but it would slow the execution a little bit.

-   eval()
-   arguments
-   for in
-   with
-   delete
-   hidden classes
-   inline caching

### Call stack vs memory heap

In the JavaScript engine, we need memory heap and call stacks to store data and execute code.

A memory heap is a place that holds data as a cabinet, which allocates and releases memory. It allows us to point to memory with variables, storing any arbitrary data. For example, the following code `const num = 1;` instructs the JavaScript engine to allocate memory for a number.

Call stacks keep track of where we are in the code to run the code in order. Every time we invoke functions, we use call stacks. As we run the code, it pushes functions into the stack and pup out after the execution.

### Execution context

Here are steps of how JavaScript engine executes the function as follows:

```JavaScript
function func2() {
	return true;
}
function func1() {
	return func2();
}
func1();
```

1. JavaScript engine creates an execution context for `func1()`.
2. JavaScript engine adds that execution context to the stack.
3. The JavaScript engine creates another execution context for `func2()` and adds it to the stack.
4. After the `func2()` has been executed, the JavaScript engine will remove its execution context from the stack as well as `func1()`.

The very first execution context that the JavaScript engine creates is the global execution context, which generates global objects and `this` in the real world.

### Threading

**Javascript is a single-threaded programming language**. But sometimes Javascript can be ''asynchronous, and that is because browsers provide **Web APIs**, which is written in languages like C++ to help Javascript do a couple of operations. E.g. DOM, fetch.

Being single-threaded means there is only one call stack while running. Take a look at an example of call stacks:

```JavaScript
function a() {
    b();
}

function b() {
    console.log('done!');
}

a();
```

The call stack is:

```JavaScript
a();
```

```JavaScript
b();
a();
```

```JavaScript
console.log('done!');
b();
a();
```

Once all the functions have been executed, they pop up in order.

```JavaScript
b();
a();
```

```JavaScript
a();
```

```JavaScript
// empty
```

To see how exactly call stack and Web APIs work, go to [loupe].

## Javascript Runtime

As you might have heard, Node.js makes Javascript be able to run outside of the browser. This program uses a V8 engine to interpret Javascript, creates the entire environment to run Javascript code and offer additional APIs to do things like asynchronous jobs.

On top of the engine, a browser has `Web APIs`. It offers things like `DOM`, `AJAX(XMLHttpRequest)` and `Timeout(setTimeout)`

## Hoisting

Javascript engine allocates memory for variables and functions during the creation phase. E.g.

```JavaScript
console.log(teddy);
console.log(sing());

var teddy = 'bear';
function sing() {
  console.log('Hello from the other side...');
}

// undefined
// 'Hello from the other side...'
```

The above code snippet doesn't crash our apps because the Javascript engine hoists it before running `console.log(teddy);`, it executes `var teddy = undefined;`. That is called half hoisting. Functions are fully hoisting. They are moved to the top of the code, and therefore, we can invoke functions before they are declared.

Notice, hoisting is working when the code snippet starts from `var` and `function`. On the other hand, `const` and `let` do not be hoisted. A particular case is **function expression**.

```JavaScript
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

```JavaScript
console.log('#1, a=', a);
var a = 10;
console.log('#2, a=', a);
var a = 20;
console.log('#3, a=', a);
```

You get: #1 = undefined, #2 = 10, #3 = 20

```JavaScript
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

You get: #1 = 1, #2 = 1, #3 = 1

```JavaScript
var favouriteFood = 'hot dog';
function toGo() {
  console.log(`I\'d like some ${favouriteFood}`)

  var favouriteFood = 'pizza';
  console.log(`A ${favouriteFood} is just fine`);
}

toGo();
```

The result is:

```
'I'd like some undefined.'
'A pizza is just fine'
```

With Javascript hoisting, this code is executed as:

```JavaScript
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

IIFE is known as Immediately-invoked Function Expression, a typical Javascript design pattern.  
It lets you call functions immediately right after it is created. E.g.

Typically, you cannot code as follows:

```JavaScript
function a() {
    // do something
}();
// error -> Uncaught SyntaxError: Unexpected token ')'
```

With IIFE, you can:

```JavaScript
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

Eventually, you can have one global variable containing objects and functions. The advantage is that this code snippet only pollutes the global execution context once, i.e. `script1`. In the following examples, you are scoping things into their environments.

```JavaScript
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

```JavaScript
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

Example 1,

```JavaScript
function a() {
	console.log('a', this);
	function b() {
		console.log('b', this);
		const c = {
			print: function() {
				console.log('c', this);
			}
		}
        c.print();
	}
    b();
}
a();

```

If you execute the above piece of code on the browser, you will get:

-   a > the Window object
-   b > the Window object
-   c > {print: f}

It does not matter where we write a piece of code. All that matters is how they get called during invocation.

Example 2,

```JavaScript
const obj = {
    f1() {
        console.log('f1', this);
        function f2() {
            console.log('f2', this);
        }
        f2();
    },
};
obj.f1();
```

-   f1 > {f1: f}
-   f2 > the Window object

Again, it does not matter where the code is written. All that matters is where the code is executed. `f1` is called inside the `obj`, and `f2` is called inside `f1`.

**In JavaScript, our lexical scope (available data + variables where the function was defined) determines our available variables, not where the function is called (dynamic scope). Everything in JavaScript is lexically scoped EXCEPT FOR THE `this` KEYWORD.**

To fix such an issue, we can either use arrow functions from ES6 or binding objects. We know that arrow functions are lexically bound.

Now, we can change the above example so that the `this` can be bound to `f1` in `f2`. This approach is more recommended than the next one.

```JavaScript
const obj = {
    f1() {
        console.log('f1', this);
        const f2 = () => {
            console.log('f2', this);
        };
        f2();
    },
};
obj.f1();
```

-   f1 > {f1: f}
-   f2 > {f1: f}

Another method to address such an issue is to bind the `this` to `f1`. This approach can be written in two ways.

```JavaScript
const obj = {
    f1() {
        console.log('f1', this);
        function f2() {
            console.log('f2', this);
        }
        return f2.bind(this);
    },
};
obj.f1()();
```

```JavaScript
const obj = {
    f1() {
        console.log('f1', this);
        const self = this;
        function f2() {
            console.log('f2', self);
        }
        f2();
    },
};
obj.f1();
```

-   f1 > {f1: f}
-   f2 > {f1: f}

```JavaScript
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

Let's change it a little bit.

```JavaScript
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

To make `obj.whoAmI()` print `Bob`, here are three solutions:

1. ES6 arrow function

Arrow functions are lexically scoped, whereas functions are dynamically scoped.

Example 1: Regular function vs arrow function

```JavaScript
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

```JavaScript
const obj = {
    name: 'Bob',
    whoAmI: function () {
        var f = () => {
            console.log(this.name);
        };
        return f();
    },
};

obj.whoAmI(); // Bob
```

2. Using the `this` keyword to bind an object.

```JavaScript
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

3. Creating a variable and pointing to the object.

```JavaScript
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

```JavaScript
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

Now, this one is tricky.

```JavaScript
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

To solve this issue, you have to bind `trick` to the lexical scope, i.e. link `this` to `d` object.

```JavaScript
const trick = d.echo.bind(d);
trick(); // d
```

## apply() and call()

We first go through the code snippet.

```JavaScript
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

Then you have another object. This Robin can't `heal` himself.

```JavaScript
let archer = {
    name: 'Robin Hood',
    health: 30
}
```

To `heal` someone who does not know how to use magic, i.e. To borrow a function from another object, you can use `apply()` or `call()`.

```JavaScript
// {name: "Robin Hood", health: 30}
wizard.heal.call(archer);
// {name: "Robin Hood", health: 100}
```

The only difference between `apply()` and `call()` is the way to access arguments.

```JavaScript
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

```JavaScript
wizard.fly.call(archer, 1, 3, 5);
// {name: "Robin Hood", health: 21}
```

Or

```JavaScript
wizard.fly.apply(archer, [1, 3, 5]);
// {name: "Robin Hood", health: 21}
```

Another example: To find out the max number in a given array

```JavaScript
function getMaxNumber(arr){
  return Math.max.apply(null, arr);
}
```

## Function currying - bind()

```JavaScript
function add(a, b) {
    return (a + b);
}

add(1, 1); // 2
```

Bind the `add()` and see what will happen

```JavaScript
const addTwo = add.bind(this, 2);
addTwo(1); // 3

const addTen = add.bind(this, 10);
addTen(1); // 11
```

## Recap `this`

1. Implicit binding

```JavaScript
const person = {
    name: 'Karen',
    showName() {
        console.log(this.name);
    }
}

person.showName(); // Karen
```

2. Explicit binding

E.g. To bind `window` to this.

```JavaScript
const person = {
    name: 'Karen',
    browsingHistory: function() {
        console.log(this.history.length);
    }.bind(window)
}

person.browsingHistory(); // 1
```

3. Arrow function

```JavaScript
const person = {
    name: 'Karen',
    showName: function() {
        let sayMyName = () => {
            // without arrow function, `this` should be `window`
            console.log(this.name);
        }
        return sayMyName();
    }
}
```

## Types

JavaScript has seven types: number, string, boolean, undefined, null, object, symbol. The symbol is a new type being added to ES6. `undefined` is an absence of a definition, whereas `null` is an absence of value. Underneath the hook, functions and arrays are objects. All the types above except objects are primitives. The value of those types matches the exact value stored in memory; there is no ambiguity. An object, on the other hand, contains references. It refers to somewhere in memory, not a value.

## Invoking functions

```JavaScript
function f1() {
    // do something
}

const obj = {
    f2: function () {
        // do something
    },
    // ES6 syntax
    f3() {
        // do something
    },
}

const f4 = function () {
    // do something
};

f1();
obj.f2();
obj.f3()
f4();
```

## Higher-Order Functions

Function returns function.

E.g. A HOF function

```JavaScript
const multiplyBy = function(n1) {
    return function(n2) {
        return n1 * n2;
    }
}
```

Or it can be written in ES6 style.

```JavaScript
const multiplyBy = (n1) => (n2) => n1 * n2;
```

And you can call the function.

```JavaScript
const multiplyByTen = multiplyBy(10);
multiplyByTen(2); // 20
multiplyByTen(5); // 50
```

## Encapsulation

What encapsulation does is hide some information from the outside world.

For example:

```JavaScript
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

In JavaScript, there are no classes. Instead, we have what is called prototypal inheritance. Suppose we want `lizardmen` to invoke the sunbathe from the `lizard` object. The code is shown below.

```JavaScript
const lizard = {
    name: 'lizard',
    sunbathe: () => {
        console.log('sunbathing...')
    }
}
const lizardmen = {
    name: 'lizardman',
}
```

The best solution is to bind the `sunbathe` function the `lizardmen` object.

```JavaScript
const lizardmenSunbathe = lizard.sunbathe.bind(lizardmen);
lizardmenSunbathe();
```

By using `__proto__`, we can inherit the `sunbathe` function. However, we should never do it this way. It is possible what we mess up new properties with default properties.

```JavaScript
lizardmen.__proto__ = lizard;
lizardmen.sunbathe();
```

Lastly, we can create a prototype chain up to the `lizard` object.

```JavaScript
const lizardmen = Object.create(lizard);
lizardmen.name = 'lizardmen';
lizardmen.sunbathe();
```

Another concept is `prototype`.

-   `__proto__` points to `prototype`.
-   We use `prototype` when we have a constructor function. For example,

```JavaScript
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

```JavaScript
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

```JavaScript
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

```JavaScript
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

In FP, it is

```JavaScript
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

Instead of attaching `attack` manually (it will be a nightmare if you have hundreds of necromancers). You can use `Object.create` to add the attack function at the beginning.

```JavaScript
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

Instead of using `Object.create()`, you can use Constructor Function.  
With the `new` keyword, you are creating a new object.

Two rules to implement a constructor function:

1. add `new`.
2. function name starts with a capital letter. (coding style)

```JavaScript
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

## Promises

A promise is an object that may produce a single value sometime in the future. Either a resolved value or a reason that it's not resolved (rejected)

E.g.

```JavaScript
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error, it broke');
    }
});

promise.then(result => console.log(result)); // stuff worked
```

### Promises Chaining

```JavaScript
promise.then(result => `result: ${result}`)
    .then(result => `${result}?`)
    .catch(err => console.log(err))
    .then(result => console.log(`${result}!`)); // result: stuff worked?!
```

Because the `catch statement` is before `then`, which means if any error happens in the last `then` code snippet, this `catch` cannot handle it.

### Promise.all

The `Promise.all()` waits until all the promises are resolved and then log out the values.

```JavaScript
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, '100ms');
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, '1s');
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, '3s');
})

Promise.all([p1, p2, p3]).then(value => {
    console.log(value);
    // After 3 seconds, you get an array -- ["100ms", "1s", "3s"]
})
```

More examples

```JavaScript
const URLs = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(URLs.map(url => {
    return fetch(url).then(response => response.json());
})).then(results => {
    console.log("Posts:", results[0]);
    console.log("Comments:", results[1]);
    console.log("Albums:", results[2]);
});
```

If any of the URLs are wrong, you get failed responses.

```JavaScript
const URLs = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    '???'
];

Promise.all(URLs.map(url => {
    return fetch(url).then(response => response.json());
})).then(results => {
    console.log("Posts:", results[0]);
    console.log("Comments:", results[1]);
    console.log("Albums:", results[2]);
}).catch(() => console.log('Failed to fetch data.'));
```

### Promise Race

You pick up the fastest resolve and don't care about the others.

```JavaScript
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, '100ms');
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, '1s');
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, '3s');
})

Promise.race([p1, p2, p3]).then(value => {
    console.log(value);
    // After 100ms, you gets "100ms"
})
```

### Conclusion - 3 ways to handle promises

For example

```JavaScript
const promisify = (item, delay) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(item), delay);
});

const p1 = promisify('a', 1000);
const p2 = promisify('b', 3000);
const p3 = promisify('c', 2000);
```

1. Execute three promises in parallel

```JavaScript
async function parallel() {
    const promises = [p1, p2, p3];
    const [output1, output2, output3] = await Promise.all(promises);
    return `Parallel is done: ${output1} ${output2} ${output3}`
}
parallel().then(console.log); // Parallel is done: a b c
```

2. Get the first result by leveraging `Promise.race` (In this case, you don't care about all the other ones)

```JavaScript
async function race() {
    const promises = [p1, p2, p3];
    const output = await Promise.race(promises);
    return `Race is done: ${output}`
}
race().then(console.log); // Race is done: a
```

3. Sequence

```JavaScript
async function sequence() {
    const output1 = await p1;
    const output2 = await p2;
    const output3 = await p3;
    return `Sequence is done: ${output1} ${output2} ${output3}`
}
sequence().then(console.log); // Sequence is done: a b c
```

## Queue Priority

In Javascript, there are three queues:

1. Callback Queue (Task Queue)

```JavaScript
setTimeout(() => {
    console.log('hello from setTimeout');
}, 0);
```

2. Job Queue (Microtask Queue)

```JavaScript
Promise.resolve('hello from promise')
    .then(data => console.log(data));
```

3. Others

```JavaScript
console.log('hello from console.log')
```

Now, if you run those queues at a time, you get:

```JavaScript
setTimeout(() => {
    console.log('hello from setTimeout');
}, 0);

Promise.resolve('hello from promise')
    .then(data => console.log(data));

console.log('hello from console.log');

// hello from console.log
// hello from promise
// hello from setTimeout
```

Event loop checks Job queue first. Make sure it's empty before it starts the callback queue.

## Concurrency and Parallelism

-   Concurrency: single-core CPU, do task one by on
-   Concurrency + Parallelism: Multi-core CPU, do tasks concurrently.

## Modules

### ECMAScript

#### ES6

ES6, ECMAScript 2015

[ES6 Overview](http://es6-features.org/#Constants)

-   separate an array

Let's say you have a function with four arguments available.

```JavaScript
function sum (a, b, c, d) {
    return a + b + c + d;
}
```

You can stuff arguments from an array by retrieving each one.

```JavaScript
const arr = [1, 2, 3, 4];
sum(...arr); // 10
```

#### ES8

ES8, ECMAScript 2017

`async`/`await` syntax

E.g. `fetch` in ES6 style.

```JavaScript
const callback = (res) => console.log('res', res);
function getComments(callback) {
  return fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(responseJson => {
        // Test error handling
        // throw new Error('Test error!');
      return callback(responseJson);
    })
    .catch(console.error);
}

getComments(callback);
```

`fetch` in ES8 style.

```JavaScript
async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const responseJson = await response.json();
    // Test error handling
    // throw new Error('Test error!');
    return responseJson;
}

try {
    const res = await getComments();
    console.log('res', res);
} catch (error) {
    console.error(error);
}
```

Example 2, `Promise.all` in ES6 style

```JavaScript
const URLs = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(URLs.map(url => {
    return fetch(url).then(response => response.json());
})).then(results => {
    console.log("Posts:", results[0]);
    console.log("Comments:", results[1]);
    console.log("Albums:", results[2]);
}).catch(() => console.log('Failed to fetch data.'));
```

`Promise.all` in ES8 style

```JavaScript
const URLs = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

try {
    const [posts, comments, albums] = await Promise.all(URLs.map(url => {
    return fetch(url).then(response => response.json());
}));
    console.log("Posts:", posts);
    console.log("Comments:", comments);
    console.log("Albums:", albums);
} catch (err) {
    console.log('Failed to fetch data.');
}
```

#### ES9

ES9, ECMAScript 2018

-   Object spread operator

Let's say you have an object myGarage

```JavaScript
const myGarage = {
    sedan: 'Tesla',
    suv: 'Land Rover',
    sportsCar: 'Lamborghini'
}
```

With an object spread operator, you can separate the object effortlessly.

```JavaScript
const { sedan, ...rest } = myGarage;
console.log(sedan); // 'Tesla'
console.log(rest); // {suv: "Land Rover", sportsCar: "Lamborghini"}
```

-   For await of

In ES8, you can have `Promise.all` like this:

```JavaScript
const URLs = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

try {
    const [posts, comments, albums] = await Promise.all(URLs.map(url => {
    return fetch(url).then(response => response.json());
}));
    console.log("Posts:", posts);
    console.log("Comments:", comments);
    console.log("Albums:", albums);
} catch (err) {
    console.log('Failed to fetch data.');
}
```

Here is what you can do in ES9,

```JavaScript
const URLs = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

const arrayOfPromises = URLs.map(url => fetch(url));
const responses = [];
for await (let request of arrayOfPromises) {
    const response = await request.json();
    responses.push(response);
}

console.log("Posts:", responses[0]);
console.log("Comments:", responses[1]);
console.log("Albums:", responses[2]);
```

## Reference

-   [Advanced Javascript concepts](https://www.udemy.com/course/advanced-javascript-concepts/)
-   [loupe](http://latentflip.com/loupe/)

[vscode-settings.json](../vscode-settings.json)
