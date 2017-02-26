/**
 * Loops
 * */

let team : string[] =  ['foo', 'bar', 'moo', 'baz'];

/*
 * for in returns the element index in the collection
 * */
console.log('The result of for in');
for(let x in team ){
    console.log(x);
}
console.log('The result of for of');

/*
 * for of returns the element value in the collection
 * */
for(let y of team ){
    console.log(y);
}
