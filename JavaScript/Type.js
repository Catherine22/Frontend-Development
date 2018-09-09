// String
console.log("\nString");
var myString1 = "Hello";
var myString2 = 'Hello';
var myString3 = "'You've got pleasure out of me in this life, and want to save yourself through me in the life to come.'says Nekhlyudov.";
var myString4 = "\"You've got pleasure out of me in this life, and want to save yourself through me in the life to come.\"says Nekhlyudov.";
var myString5 = "\\";
var myString6 = "\\\\";
console.log(myString1);
console.log(myString2);
console.log(myString3);
console.log(myString4);
console.log(myString5);
console.log(myString6);


// number
// NaN: Not a number       
// fraction: Using JS to calculate fractions, you might get an incorrect answer.For example, 0.1 + 0.2 = 0.30000000000000004
console.log("\nNumber");
var myNumber0 = Number.MIN_VALUE; //5e-324 means the smallest fraction which is bigger than 0
var myNumber1 = Number.MAX_VALUE; //1.7976931348623157e+308
var myNumber2 = -Number.MAX_VALUE * Number.MAX_VALUE; //-Infinity
var myNumber3 = Infinity;
var myNumber4 = "abc" * "def"; //NaN
var myNumber5 = NaN;
var myNumber6 = 0.1 + 0.2;
console.log(myNumber1);
console.log(myNumber2);
console.log(myNumber3);
console.log(myNumber4); //NaN
console.log(myNumber5);
console.log(myNumber6); //0.30000000000000004

// hexadecimal
console.log("hexadecimal - starting from 0x");
console.log("0x10 = " + 0x10); // 16
console.log("0xff = " + 0xff); // 255

// octal
console.log("octal - starting from 0");
console.log("010 = " + 0o10); // 8
console.log("077 = " + 0o77); // 63

// binary, only browsers such as Chrome and firefox support
console.log("binary - starting from 0b");
console.log("0b10 = " + 0b10); // 2
console.log("0b11111 = " + 0b11111); // 31

// boolean
console.log("\nboolean");
var bool = true;
console.log(typeof (bool));

// null
console.log("\nNull");
var b = null;
console.log(typeof b);

// undefined
console.log("\nUndefined");
var u;
console.log(typeof u);

// convert a type to a String     
console.log("\nconvert a type to a String - toString()");
var number = 12345;
number = number.toString();
console.log(typeof number);

var myBool = true;
myBool = myBool.toString(); // myBool is "true"
console.log(typeof myBool);

// Error: Type.js:59 Uncaught TypeError: Cannot read property 'toString' of null
// var myNull = null;
// myNull = myNull.toString();
// console.log(typeof myNull);

// Error: Type.js:64 Uncaught TypeError: Cannot read property 'toString' of null
// var myUndef;
// myUndef = myUndef.toString();
// console.log(typeof myUndef);

console.log("\nconvert a type to a String - String()");
// Number and boolean call toString() actually.
number = 12345;
number = String(number);
console.log(number);

myBool = true;
myBool = String(myBool); // myBool is "true"
console.log(myBool);

var myNull = null;
myNull = String(myNull);
console.warn(myNull); // myNull is "null"

var myUndef;
myUndef = String(myUndef);
console.warn(myUndef); // myUndef is "undefined"



// convert a type to a number     
console.log("\nconvert a type to a number - Number()");
var myStringNumber = '12345';
myStringNumber = Number(myStringNumber);
console.log(myStringNumber);

myStringNumber = 'abc';
myStringNumber = Number(myStringNumber);
console.warn(myStringNumber); // myStringNumber is NaN

myStringNumber = '  ';
myStringNumber = Number(myStringNumber);
console.warn(myStringNumber); // blank is 0

myStringNumber = null;
myStringNumber = Number(myStringNumber);
console.warn(myStringNumber); // null is 0

myStringNumber = undefined;
myStringNumber = Number(myStringNumber);
console.warn(myStringNumber); // undefined is NaN

myStringNumber = true;
myStringNumber = Number(myStringNumber);
console.warn(myStringNumber); // true is 1 and false is 0


console.log("\nconvert a string to a number - parseInt(), parseFloat()");
// parseInt() is particularly used to convert a String to a number, it automatically pick up numbers inside of the string.
var width = '20px';
width = parseInt(width);
console.log(width); // 20

width = 'b123d456';
width = parseInt(width);
console.log(width); // NaN

width = '123.6avdsx32';
width = parseInt(width);
console.log(width); // 123 - remove string following '.'

width = '123.6avdsx32';
width = parseFloat(width);
console.log(width); // 123.6

width = '123.456.789';
width = parseFloat(width);
console.log(width); // 123.456

// For example, run parseInt('070'), then Edge covers it to 70. IE8, by contrast, covers it to 56 (octal)
width = '070';
width = parseInt(width, 8); // octal
console.warn(width); // 56
width = '0x11';
width = parseInt(width, 16); // hexadecimal
console.warn(width); // 17


// For each non-String value, parseInt() will call String() first before converting.
width = true;
width = parseInt(width);
console.log(width); // boolean, undefined, null, and blanks = NaN

width = 123.456;
width = parseInt(width);
console.log(width); // 123 - remove numbers following '.'

console.log("\nconvert a type to a boolean - Boolean()");
// It turns to false when the number is 0 or NaN.
var myBool = 123;
myBool = Boolean(myBool);
console.log(myBool); // true

myBool = 0;
myBool = Boolean(myBool);
console.warn(myBool); // false

myBool = -10;
myBool = Boolean(myBool);
console.log(myBool); // true

myBool = NaN;
myBool = Boolean(myBool);
console.warn(myBool); // false

myBool = Infinity;
myBool = Boolean(myBool);
console.log(myBool); // true

// It turns to false when the String is empty.
myBool = 'false';
myBool = Boolean(myBool);
console.warn(myBool); // true

myBool = '';
myBool = Boolean(myBool);
console.warn(myBool); // false

// It turns to false when the type is undefined and null
myBool = null;
myBool = Boolean(myBool);
console.warn(myBool); // false

myBool = undefined;
myBool = Boolean(myBool);
console.warn(myBool); // false