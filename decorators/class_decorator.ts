/**
* Class Decorator
* */

@detailedLog('billing')
class AccountsPayable{
    constructor(){}
}


@detailedLog('anything')
class ProductManager{
    constructor(){}
}


function detailedLog(dashboard : string) {
    if(dashboard == 'billing'){
        console.log('Billing process');
        return function(target : Object){};
    } else {
        return function(target : Object){};
    }
}

let acount = new AccountsPayable;
let pm = new ProductManager;


