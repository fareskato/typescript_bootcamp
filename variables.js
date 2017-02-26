/***
  There are three types of variables in typesscript
  var: U can redeclare and redifine
  let: U can redifine BUT can not redeclare
  const : define for one time
*/
// var
var fooName = 'foo';
console.log(fooName);
var fooName = 'bar';
// let
console.log(fooName);
var barTitle = 'this is title';
console.log(barTitle);
barTitle = 'this is another title';
console.log(barTitle);
//let barTitle = 'this is another title';  => can't redeclare
// const
var anyAge = 23;
// anyAge = 45;
console.log(anyAge);
