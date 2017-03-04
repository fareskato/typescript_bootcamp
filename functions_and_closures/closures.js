function fatherFullName(fName) {
    var n = fName;
    function printName() {
        console.log(n);
    }
    printName();
}
fatherFullName('Foo Bar');
/**** The inner functions have access to the outer scope even AFTER the values are returned *****/
function sonFullName(fName) {
    var n = fName;
    return function () {
        console.log(n);
    };
}
var sonName = sonFullName('Son Bar');
sonName();
/****  Example  ****/
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () {
            nowBatting++;
        },
        currentBatter: function () {
            return nowBatting;
        }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
