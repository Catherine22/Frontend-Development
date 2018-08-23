//Global or local variables

var num = 10
function test() {
    var num = 100;
    console.log("num = " + num + " in test() #1") 
    
    //Block Scope
    {
        console.log("Run Block Scope")
        let num = 200;
        console.log("num = " + num + " in test() #2")
        console.log("Stop Block Scope")
    }

    console.log("num = " + num + " in test() #3") 
}
console.log("num = " + num + " outside test()")
test()


//'var' vs 'let'
var n1 = 10
var n1 = 0 //n1 = 0

let n2 = 10
n2 = 9 //OK, n2 = 9
// let n2 = 0 //Error: Identifier 'n2' has already been declared

//const: a read-only reference to a value.
const PI = 3.14
// PI = 5 //Error: Assignment to constant variable.


//variable Hoisting
function hoist() {
    for (var i=0; i<5; i++) {
        console.log("Loop " + i)
    }

    console.log("Loop becomes " + i + " outside the for-loop")
}
hoist()