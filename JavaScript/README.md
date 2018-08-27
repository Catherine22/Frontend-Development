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

Go to [TYPE.md] to see more.

### Array 
Array is able to include every tpye. For example, functions (which are a kind of object).               
- Declare an array with number 10, your code would be like:             
```JavaScript
var arr = [10];
```             
- Create an array of size 5, your code would be:                
```JavaScript
var arr = new Array(5); // arr.length is 5, for each element is undefined
```             
- Create an array containing a function and an objects
```JavaScript
var arr = [
        function(name, book){console.log(name + " is the protagonist in the novel " + book)}, 
        {name: "Fitzwilliam Darcy", gender: "M", age: 18}];

// Call the function in index 0
arr[0]("Darcy", "Pride and Prejudice");
// Print:  {name: "Fitzwilliam Darcy", gender: "M", age: 18}
console.log(arr[1]); 
```             
- Add/delete a(n) element from an array
```JavaScript
// push: add at least one element to the end of the array
var newLength = arr.push(
        {name: "Elizabeth Bennet", age: 20, spouse: "William Darcy"}, 
        {name: "Jane Bennet", allowancePerAnnum: 50});
// newLength is 4

// unshift: add at least one element to the top of the array
newLength = arr.unshift(
    {name: "Mary Bennet"},
    {name: "Catherine Bennet", age: 18},
    {name: "Lydia Bennet", age: 15}
);
// newLength is 7
```
```JavaScript
// pop: remove the last element and return the element you just removed
var removedNode = arr.pop();
// removedNode is {name: "Jane Bennet", allowancePerAnnum: 50}

// shift: remove the first element and return the element you just removed
removedNode = arr.shift();
// removedNode is {name: "Mary Bennet"}
```             
- for: find Bennets               
```JavaScript
function getBennets1(arr) {
    var bennets = [];
    for (var i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i].name).indexOf("Bennet") > -1) {
            bennets.push(arr[i]);
        }
    }
    return bennets;
}
console.log(getBennets1(arr));
```             
- foreach: find Bennets         
        - Browser support ![screenshot][1]              
```JavaScript
function getBennets2(arr) {
    var bennets = [];
    // Technically, the 1st parameter is arr[i], the 2nd parameter is i and the 3rd parameter is arr
    arr.forEach(function (value, index, obj) {
        if (JSON.stringify(value.name).indexOf("Bennet") > -1) {
            bennets.push(value);
        }
    });
    return bennets;
}
console.log(getBennets2(arr));
```

Go to [Collection] to see more


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

[Collection]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/Collection.html>

[TYPE.md]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript/TYPE.md>


[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/JavaScript/screenshot_forEach.png
