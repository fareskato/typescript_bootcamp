/**
 * Create function expression
 * */
// The same as function type declaration
var yetAnotherFullName;
yetAnotherFullName = function (ar1, ar2) {
    return ar1 + ' ' + ar2;
};
console.log(yetAnotherFullName('bada', 'mada'));
/* All in one line */
var anotherFullName = function (f_name, l_name) {
    return f_name + ' ' + l_name;
};
console.log(anotherFullName('foo', 'bar'));
