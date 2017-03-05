var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AccountStatus = (function () {
    function AccountStatus() {
    }
    AccountStatus.prototype.deleteAccount = function () {
        console.log('deleted .....');
    };
    __decorate([
        admin, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AccountStatus.prototype, "deleteAccount", null);
    AccountStatus = __decorate([
        getStatus('billing'), 
        __metadata('design:paramtypes', [])
    ], AccountStatus);
    return AccountStatus;
}());
// Class decorator
function getStatus(status) {
    if (status == 'billing') {
        console.log('billing status');
        return function (target) { };
    }
    else {
        return function (target) { };
    }
}
// Method decorator
function admin(target, propertyKey, descriptor) {
    console.log('here check the permission');
    return descriptor;
}
var ac1 = new AccountStatus;
ac1.deleteAccount();
// NOTICE : the first run is method decorator then class decorator then the methods
// here check the permission
// billing status
// deleted ..... 
