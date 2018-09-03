# JavaScript

JavaScript = ECMAScript + DOM + BOM     

## Get started
- Upper case and lower case are different
- ***Every statement must end with ```;```.*** Browsers automatically create ```;``` while the developer does not use ```;```. However, that impacts the performance. The worst of all, browsers sometimes add ```;``` incorrectly.
- Blanks and empty lines are ignored. 

### literal， 字面量
literals are allowed to be used directly. For example:      
```JavaScript
alert(152013257012304);
```
We do not use literals very often, variables are commonly used, like        
```JavaScript
var id = 152013257012304;
alert(id);
```

### Identifier, 标识符      
An JS identifier might contants numbers, alphebets, underscores and currency symbols ($). But starting with a number is illegal.        
```JavaScript
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

### Opertor, 运算符或操作符

Go to [Operator.js] to see more.

### Flow control and looping,  流程控制
          
```JavaScript
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
```JavaScript
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
