/**
 * Create function expression
 * */
// The same as function type declaration
let yetAnotherFullName : (x:string, y:string) => string;

yetAnotherFullName = function (ar1:string, ar2:string) {
    return ar1 + ' ' + ar2;
}
console.log(yetAnotherFullName('bada','mada'));


/* All in one line */
let anotherFullName : (first:string, last:string) => string = function(f_name:string, l_name:string) {
    return f_name + ' ' + l_name;
}

console.log(anotherFullName('foo', 'bar'));
