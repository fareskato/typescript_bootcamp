/**
* Class Decorator
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AccountsPayable = (function () {
    function AccountsPayable() {
    }
    AccountsPayable = __decorate([
        /**
        * Class Decorator
        * */ detailedLog('billing'), 
        __metadata('design:paramtypes', [])
    ], AccountsPayable);
    return AccountsPayable;
}());
var ProductManager = (function () {
    function ProductManager() {
    }
    ProductManager = __decorate([
        detailedLog('anything'), 
        __metadata('design:paramtypes', [])
    ], ProductManager);
    return ProductManager;
}());
function detailedLog(dashboard) {
    if (dashboard == 'billing') {
        console.log('Billing process');
        return function (target) { };
    }
    else {
        return function (target) { };
    }
}
var acount = new AccountsPayable;
var pm = new ProductManager;
