// Array
var arr = [];
console.log(typeof arr); // object

// Create an array with single element
console.log("\nCreate an array with single element");
arr = [10];
console.log(arr.length); // 1
console.log(arr) // [10]
console.log(arr[0]); // 10

// Create an array of size 10
console.log("\nCreate an array of size 10");
arr = new Array(10);
console.log(arr.length); // 10
console.log(arr); // [empty × 10]
console.log(arr[0]); // Undefined

// Create an array with a variety of types
console.log("\nCreate an array with a variety of types");
arr = ["Hello", 10, true, NaN, undefined, -Infinity, null];
console.log(arr);

// Create an array with arrays
console.log("\nCreate an array with arrays");
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr);


// Add an object
console.log("\nArray of objects");
arr = [
    function (name, book) {
        console.log(name + " is the protagonist in the novel " + book)
    },
    {
        name: "Fitzwilliam Darcy",
        gender: "M",
        age: 18
    }
];

// Call the function in index 0
arr[0]("Darcy", "Pride and Prejudice");
// Print:  {name: "Fitzwilliam Darcy", gender: "M", age: 18}
console.log(arr[1]);

// Add/delete/update/search a(n) element from an array
console.log("\npush");
// push: add at least one element to the end of the array
var newLength = arr.push({
    name: "Elizabeth Bennet",
    age: 20,
    spouse: "William Darcy"
}, {
    name: "Jane Bennet",
    allowancePerAnnum: 50
});
console.log(arr);
console.log(newLength);

// unshift: add at least one element to the top of the array
console.log("\nunshift");
newLength = arr.unshift({
    name: "Mary Bennet"
}, {
    name: "Catherine Bennet",
    age: 18
}, {
    name: "Lydia Bennet",
    age: 15
});
console.log(arr);
console.log(newLength);

// pop: remove the last element and return the element you just removed
console.log("\npop");
var removedNode = arr.pop();
console.log(arr);
console.log(removedNode);

// shift: remove the first element and return the element you just removed
console.log("\nshift");
var removedNode = arr.shift();
console.log(arr);
console.log(removedNode);

// loop - for
console.log("\nfor: show Bennets");
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

// loop - forEach
console.log("\nforEach: show Bennets");
// callback: set a function as a parameter of forEach-statement
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