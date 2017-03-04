/*
* Problem with this in nested functions 
*/

class Person{ 
  balance : number


  constructor(balance : number) {
    this.balance = balance;
  }

  printBalancs(){
    console.log(this.balance);
  }

  /***** nested function : to fix the this problem use arrow functions *****/
  // printLater(time){
  //   setTimeout(function(){
  //      console.log(this.balance);        
  //   },time);
  // }

 printLater(time){
    setTimeout(() => {
       console.log(this.balance);        
    },time);
  }


}

let person = new Person(2300);
person.printBalancs();
person.printLater(2000);