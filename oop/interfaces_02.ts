// Create interface function :

interface MyInvoice {
  (name : string, total : number) : void;
}

let anotherInvoice : MyInvoice = function(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

//then invoke 
anotherInvoice('Google', 12345);