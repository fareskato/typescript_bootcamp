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
let ages : number[] = [1, 2, 3]
let names : string[] = ['fares','foo','bar']
console.log(ages)
console.log(names)


/* Tuple : array  with mixed types elements.
 * use tuple when U know how many elements will be in the collection and the type of each element
 * */

let theFather : [string, number, string ];
theFather = ['fares kato', 38, 'Moscow']
//theFather = ['fares kato', 38] => ERROR  missing element
//theFather = ['fares kato', 38,242] => ERROR type

let myAddress : [string, number] = ['street', 234];
console.log(theFather);
console.log(myAddress[0]);
console.log(myAddress[1]);


/* Enum */
// Example 01
enum ApprovalStatus {
    Approved,  // 0
    Pending,  // 1
    Rejected  // 2
};
let job1 : ApprovalStatus = ApprovalStatus.Approved;
let job2 : ApprovalStatus = ApprovalStatus.Pending;
let job3 : ApprovalStatus = ApprovalStatus.Rejected;
console.log(job1); // => 0
console.log(job2); // => 1
console.log(job3); // => 2

// Example 02
enum Colors {
    Red,
    Green = 100,
    Blue
}
let color1 : Colors = Colors.Blue;
let color2 : Colors = Colors.Green;
let color3 : Colors = Colors.Red;
console.log(color1 ); // =>101
console.log(color2 ); // =>100
console.log(color3 ); // =>0

/* any  */
let test : any[] = [423, 'test', false]
console.log(test);
/* void:
 * Use this with functions: when function do an action but don't return anything
 * */

function doSomething(msg : string) : void {
    console.log(msg);
}
doSomething('This is message');