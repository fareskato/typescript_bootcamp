@getStatus('billing')
class AccountStatus{
    constructor(){}

    @admin
    deleteAccount(){
        console.log('deleted .....');
    }
}


// Class decorator
function getStatus(status : string) {
    if(status == 'billing'){
        console.log('billing status');
        return function(target : Object){}
    } else {
        return function(target : Object){}
    }
}


// Method decorator
function admin(target : Object, propertyKey : string, descriptor : TypedPropertyDescriptor<any>) : any {
    console.log('here check the permission');
    return descriptor;
}

let ac1 = new AccountStatus;
ac1.deleteAccount();

// NOTICE : the first run is method decorator then class decorator then the methods
// here check the permission
// billing status
// deleted .....