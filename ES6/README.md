# ECMAScript
ES5: First released in 2009   
ES6, ECMAScript 2015: First released in 2015    
ES7, ECMAScript 2016: First released in 2016    
ES8, ECMAScript 2016: First released in 2017

## ES5 Review
1. Define variables by ```var```    
2. Define function constructor by ```new```
3. ```eval```   
4. Unique variables

[ES5 example](https://github.com/Catherine22/Front-end-warm-up/tree/master/ES6/ES5.html)

### Strict Mode
```JavaScript
'use strict';
```

## ES6 Review
### 1. JSON   
- Convert JSON to JS objects via ```var JS_OBJECT = JSON.parse(JSON_STRING)```    
- Convert JS objects to JSON via ```var JSON_STRING = JSON.stringify(JS_OBJECT)```    

### 2. Object.create(prototype, [descriptors])    
- ```value```: the value of the property   
- ```writable```: (false) whether or not the value can be modified    
- ```configurable```: (false) whether or not the value can be removed     
- ```enumerable```: (false)     

E.g. Create person2 with ```username```, ```age```, ```sex``` and ```title```   
```JavaScript
const person1 = {username: 'Bob', age: 20};
const person2 = Object.create(person1, {
  sex: {
    value: 'M',
    writable: true,
    enumerable: true
  },
  title: {
    value: 'chef',
    writable: true,
    configurable: true,
  }
});
```
Assign value = 'M' by ```value: 'M'```      

In ```sex```, ```writable``` is true, so we can update ```sex```    
```JavaScript
person2.sex = 'F';
```

In ```title```, ```configurable``` is true, so we can delete ```title```    
```JavaScript
delete person2.title;
```

Enum properties (```enumerable``` must be ```true```)
```JavaScript
for (const i in person2) {
  console.log(i);
  // title is not available due to enumerable = false
}
```

### 3. Object.defineProperties(object, [descriptors])
```JavaScript
const person3 = {firstName: 'Conan', lastName: 'Bryan'};
const person4 = Object.defineProperties(person3, {
    fullName: {
        get: function () {
            return `${this.firstName} ${this.lastName}`;
            },
        set: function(data) {
            const name = data.split(' ');
            this.firstName = name[0];
            this.lastName = name[1];
            }
     }
});

console.log(person4.fullName); // Conan Bryan
person4.fullName = "Conan O'Bryan";
console.log(person4.fullName); // firstName = Conan, lastName = 'O'Bryan'
```

Call ```get``` and ```set```
```JavaScript
const person5 = {
    firstName: 'Conan',
    lastName: 'Bryan',
     get fullName () {
        return `${this.firstName} ${this.lastName}`;
        },
     set fullName (data) {
        const name = data.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
        }
 };
console.log(person5.fullName); // Conan Bryan
person5.fullName = "Conan O'Bryan";
console.log(person5.fullName); // firstName = Conan, lastName = 'O'Bryan'
```
[ES6 example](https://github.com/Catherine22/Front-end-warm-up/tree/master/ES6/ES6.html)
