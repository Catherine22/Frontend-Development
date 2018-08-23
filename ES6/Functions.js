function returnString() {
    return "Hello"
}

function add(num1, num2) {
    return num1 + num2
}

function getID(name = "Cath") {
    return name + "0001"
}

function countParams(...params) {
    return params.length
}

//Anonymous function
var sayHello = function() {
    console.log("sayHello")
}

//Anonymous parameterized function
var times = function(num1, num2) {
    return num1 * num2
}

//Function constructor
var devidedBy = new Function("num1", "num2", "return num1 / num2")

//Recursive function
function fibonacci(num) {
    if (num <= 0){
        return 0
    } else if (num == 1 || num == 2){
        return 1
    } else {
        return (fibonacci(num - 1) + fibonacci(num - 2))
    }
}

//Anonymous recursive function
var fib = function(num) {
    if (num <= 0) {
        return 0
    } else if (num == 1 || num == 2) {
        return 1
    } else {
        return (fib(num - 1) + fib(num - 2))
    }
}

//Lambda function
var getCurrentTime = () => {
    var d = new Date()
    var h = (d.getHours() < 10 ? '0' : '') + d.getHours()
    var m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
    return (h + ':' + m)
}

//Optional parentheses for a single parameter
var getMsg = content => { // var getMsg = (content) => {
    return content
}

var getMax = (...nums) => {
    var max = -1
    for (var i=0; i<nums.length; i++){
        if(nums[i]>max){
            max = nums[i]
        }
    }
    return max
}


console.log(returnString())
console.log(add(1, 2))
console.log(getID())
console.log(getID("Bob"))
console.log(countParams(1, 2, 3, 4, 5))
sayHello()
console.log(times(3, 5))
console.log(devidedBy(225, 5))
console.log(fibonacci(9))
console.log(fib(10))
console.log(getCurrentTime())
console.log(getMsg("Hi, there!"))
console.log(getMax(121, 42, 647, 11))
