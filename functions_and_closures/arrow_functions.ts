/**
 * arrow functions have 2 good things:
 * 01- no need to use function keyword
 * 02- Solve the this keyword problem (inside nested functions)
 */
// Traditional functions
/*
function getAnyData(anyData : string) : string {
    return anyData;
}
*/
// arrow function
let getAnyData = (anyData : string) : string => {
    return anyData
}
console.log(getAnyData('this is a test'));
