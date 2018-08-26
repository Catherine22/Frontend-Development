### Type, 数据类型      
There are six data types in JavaScript:     
- String

```JavaScript
var myString1 = "Hello";
var myString2 = 'Hello';
var myString3 = "'You've got pleasure out of me in this life, and want to save yourself through me in the life to come.'says Nekhlyudov.";
var myString4 = "\"You've got pleasure out of me in this life, and want to save yourself through me in the life to come.\"says Nekhlyudov.";
var myString5 = "\\";
var myString6 = "\\\\";
```

- Number        
NaN: Not a number       
fraction: Using JS to calculate fractions, you might get an incorrect answer. For example, 0.1 + 0.2 = 0.30000000000000004
```JavaScript
var myNumber0 = Number.MIN_VALUE;//5e-324 means the smallest fraction which is bigger than 0
var myNumber1 = Number.MAX_VALUE;//1.7976931348623157e+308
var myNumber2 = -Number.MAX_VALUE * Number.MAX_VALUE;//-Infinity
var myNumber3 = Infinity;
var myNumber4 = "abc" * "def";//NaN
var myNumber5 = NaN;
var myNumber6 = 0.1 + 0.2;
console.log(typeof myNumber3);//Number
console.log(typeof myNumber4);//NaN
console.log(typeof myNumber6);//0.30000000000000004
```

- Boolean       
```JavaScript
var bool = true;
console.log(typeof(bool)); //boolean
```     
- Null      
```JavaScript
var a = null;
console.log(typeof a); //object 
```     
- Undefined      
```JavaScript
var a;
console.log(typeof a); //undefined 
```     
- Object