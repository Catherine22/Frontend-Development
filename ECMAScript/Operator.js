//bitwise Operators
var operators = ["&", "|", "^"]
var desc = ["AND", "OR", "XOR"]
var numbers = [0, 1]
var res = ""

for (var i = 0; i < operators.length; i++) {
    console.log("\n" + desc[i])
    for (var j = 0; j <  numbers.length; j++){
        for (var k = 0; k < numbers.length; k++) {

        res += numbers[j]
        res += " "
        res += operators[i]
        res += " "
        res += numbers[k]
        res += " = "
        res += eval(numbers[j] + operators[i] + numbers[k])

        console.log(res)
        res = ""
        }
    }
}

operators = ["<<", ">>", ">>>"]
numbers = [15, 234, 0, 5]

for (var i = 0; i < operators.length; i++) {
    console.log("\n" + operators[i])
    for (var j = 0; j < numbers.length; j++) {
        for (var k = 0; k < 3; k++) {

            res += dec2bin(numbers[j])
            res += " "
            res += operators[i]
            res += " "
            res += k
            res += " = "
            res += dec2bin(eval(numbers[j] + operators[i] + k))

            console.log(res)
            res = ""
        }
    }
}
console.log("\n")

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}


//typeOf
const e = 2.71828183
var name = "C Chen"
var isAdult = false

console.log(typeof (e))
console.log(typeof (name))
console.log(typeof (isAdult))