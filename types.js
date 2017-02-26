/**
 * Data types in Type script:
 * 01 -Boolean
 * 02 -Number
 * 03 -String
 * 04 -Array
 * 05 -Tuple
 * 06 -Enum
 * 07 -Any
 * 08 -Void
 * */
/* Number (contains integers and float) */
/* Array: in type script U have to define the type of the array elements:
 * var ages : number[] = [1, 2, 3]
 * var ages : string[] = ['foo', 'bar', 'baz']
 * */
var ages = [1, 2, 3];
var names = ['fares', 'foo', 'bar'];
console.log(ages);
console.log(names);
/* Tuple : array  with mixed types elements.
 * use tuple when U know how many elements will be in the collection and the type of each element
 * */
var theFather;
theFather = ['fares kato', 38, 'Moscow'];
//theFather = ['fares kato', 38] => ERROR  missing element
//theFather = ['fares kato', 38,242] => ERROR type
var myAddress = ['street', 234];
console.log(theFather);
console.log(myAddress[0]);
console.log(myAddress[1]);
/* Enum */
// Example 01
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected"; // 2
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job1 = ApprovalStatus.Approved;
var job2 = ApprovalStatus.Pending;
var job3 = ApprovalStatus.Rejected;
console.log(job1); // => 0
console.log(job2); // => 1
console.log(job3); // => 2
// Example 02
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue";
})(Colors || (Colors = {}));
var color1 = Colors.Blue;
var color2 = Colors.Green;
var color3 = Colors.Red;
console.log(color1); // =>101
console.log(color2); // =>100
console.log(color3); // =>0
/* any  */
var test = [423, 'test', false];
console.log(test);
/* void:
 * Use this with functions: when function do an action but don't return anything
 * */
function doSomething(msg) {
    console.log(msg);
}
doSomething('This is message');
