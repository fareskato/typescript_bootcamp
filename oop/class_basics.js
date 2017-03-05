var Account = (function () {
    // constructor
    /*
    * Make the constructor arg public => getter and setter
    * */
    function Account(compName, compCity, compState) {
        this.compName = compName;
        this.compCity = compCity;
        this.compState = compState;
        this.companyProfile = compName + ", " + compCity + ", " + compState;
    }
    return Account;
}());
var googleAccount = new Account('Google', 'LA', 'googel state');
var yahooAccount = new Account('Yahoo', 'Az', 'yahoo state');
console.log(googleAccount.companyProfile);
console.log(yahooAccount.companyProfile);
