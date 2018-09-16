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
```

When we use 'new' to create an object, the computer will automatically offer new space to the object in heap.

## ECMAScrip
A specification for JavaScript. JavaScript will be executed by a distinct engine of individual browser. V8 engine of Chrome for example, showing high performance while running JavaScript.     


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
