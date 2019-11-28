// +, -, *, /, %
console.log('\n+');
let result = 123 + 456;
console.log(result); // 579

result = true + 3; // true = 1
console.log(result); // 4

result = null + 22; // null = 0
console.log(result); // 22

result = 15 + NaN;
console.log(result); // NaN

// It returns a sting while there is at least one String
result = '' + 9; // blank = 0
console.log(result); // 9, a String

result = '123' + '456';
console.log(result); // 123456, a String

result = 1 + 2 + '3';
console.warn(result); // 33, a String

result = '1' + 2 + 3;
console.warn(result); // 123, a String

result = 1 + +'2' + 3;
console.warn(result); // 6, a number

result = 0;
console.log(++result);

result = 0;
console.log(result++);
console.warn(result);

// For any value do a '-', '*' or '/' comes to a number, meaning you can convert a value to a number by '-', '*' or '/'
console.log('\n-');
result = '10';
console.log(typeof (result - 0));

result = 100 - '1';
console.log(result); // 99

result = '100' + 2 - 3;
console.warn(result); // 999

console.log('\n*');
result = 2 * '9';
console.log(result); // 18

result = 2 * null;
console.log(result); // 0

console.log('\n/');
result = 18 / 4;
console.log(result); // 4.5

console.log('\n%');
result = 18 % 4;
console.log(result); // 2

result = -18 % 5;
console.log(result); // -3

console.log('\n!');
result = false;
console.log(!result);

result = 10;
console.log(!result);

console.log('\n&&');
false && console.log('false && me'); // not showing
true && console.log('true && me'); // showing

console.log('\n||');
false || console.log('false || me'); // showing
true || console.log('true || me'); // not showing

// Biwise operators
console.log('\nAND');
console.log(1 & 1); // 1
console.log(1 & 0); // 0
console.log(0 & 1); // 0
console.log(0 & 0); // 0

console.log('\nOR');
console.log(1 | 1); // 1
console.log(1 | 0); // 1
console.log(0 | 1); // 1
console.log(0 | 0); // 0

console.log('\nXOR');
console.log(1 ^ 1); // 0
console.log(1 ^ 0); // 1
console.log(0 ^ 1); // 1
console.log(0 ^ 0); // 0
