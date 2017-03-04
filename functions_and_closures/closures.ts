
function fatherFullName (fName: string) : void {
   var n :string = fName;
    function printName(){
        console.log(n);
    }
    printName();
}

fatherFullName('Foo Bar');


/**** The inner functions have access to the outer scope even AFTER the values are returned *****/

function sonFullName (fName: string)  {
    var n :string = fName;
    return function(){
        console.log(n);
    }
}
var sonName = sonFullName('Son Bar');
sonName();

/****  Example  ****/
function lineup(){
    var nowBatting : number = 1;

    return{
        nextBatter (){
            nowBatting++
        },
        currentBatter (){
            return nowBatting;
        }
    }
}

let batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
