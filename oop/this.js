/*
* Problem with this in nested functions
*/
var Person = (function () {
    function Person(balance) {
        this.balance = balance;
    }
    Person.prototype.printBalancs = function () {
        console.log(this.balance);
    };
    /***** nested function : to fix the this problem use arrow functions *****/
    // printLater(time){
    //   setTimeout(function(){
    //      console.log(this.balance);        
    //   },time);
    // }
    Person.prototype.printLater = function (time) {
        var _this = this;
        setTimeout(function () {
            console.log(_this.balance);
        }, time);
    };
    return Person;
}());
var person = new Person(2300);
person.printBalancs();
person.printLater(2000);
