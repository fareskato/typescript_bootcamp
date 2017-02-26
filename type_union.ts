/**
 * Type Union
 * */
// Example 01
// the array can take strings and numbers
type PeopleArray = Array<string|number>
var peopleString : PeopleArray = ['foo', 'bar', 'baz']
console.log(peopleString[0]);
var peopleNumbers : PeopleArray = [1, 2, 3];
console.log(peopleNumbers[1]);

// Example 02
// can use array of strings and string
var newNames : string[]|string;
newNames = ['test', 'text'];
console.log(newNames);
newNames = 'this is text';
console.log(newNames);

