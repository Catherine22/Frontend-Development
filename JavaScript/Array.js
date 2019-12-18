// Remove duplicates
let arr = [1, 2, 3, 2, 1, 3, 4, 2, 5];

arr.forEach(function(value, index) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== index && arr[i] === value) {
            arr.splice(i, 1);
        }
    }
});

console.log(arr);
