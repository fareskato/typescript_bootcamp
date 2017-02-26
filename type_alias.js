var anyNames = ['foo', 'bar', 'baz'];
console.log(anyNames);
// let anyAges : namesArray = [1,2,3]; // => error
/**
 * Functions as type
  */
// create the function type
var myFuncType;
function sayHello(x, y) {
    return "hi " + x + " and hello " + y;
}
function myAddition(a, b) {
    return a + b;
}
// this is OK
myFuncType = myAddition;
console.log(myFuncType(25, 45));
