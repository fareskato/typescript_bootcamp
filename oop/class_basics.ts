class Account {
    companyProfile : string;
    compState : string;
    // constructor
    /*
    * Make the constructor arg public => getter and setter
    * */
    constructor(public compName : string, public compCity : string, compState : string){
        this.compState = compState;
        this.companyProfile = compName + ", " + compCity + ", " + compState;
    }
}

let googleAccount = new Account('Google', 'LA', 'googel state');
let yahooAccount = new Account('Yahoo', 'Az', 'yahoo state');

console.log(googleAccount.companyProfile);
console.log(yahooAccount.companyProfile);