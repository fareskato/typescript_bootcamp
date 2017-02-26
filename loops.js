/**
 * Loops
 * */
var team = ['foo', 'bar', 'moo', 'baz'];
/*
 * for in returns the element index in the collection
 * */
console.log('The result of for in');
for (var x in team) {
    console.log(x);
}
console.log('The result of for of');
/*
 * for of returns the element value in the collection
 * */
for (var _i = 0, team_1 = team; _i < team_1.length; _i++) {
    var y = team_1[_i];
    console.log(y);
}
