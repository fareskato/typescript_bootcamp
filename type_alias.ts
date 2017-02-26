/**
 * Arrays as type
 * */
type namesArray = Array<string>
let anyNames : namesArray = ['foo', 'bar', 'baz'];
console.log(anyNames);

// let anyAges : namesArray = [1,2,3]; // => error

/**
 * Functions as type
  */
// create the function type
let myFuncType : (arg1: number, arg2: number) => number;

function sayHello(x:string, y:string) : string {
    return `hi ${x} and hello ${y}`;
}
function myAddition(a: number, b :number) : number {
    return a + b;
}


// this is OK
myFuncType = myAddition;
console.log(myFuncType(25,45));

// this will not work
//myFuncType = sayHello;
//console.log(myFuncType('foo', 'bar'));

/**
 * Objects as type
 * */
type ComplexObject = {data: number[], output : (all:boolean) => number[] };