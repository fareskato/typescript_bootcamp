var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Report = (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
var Invoice = (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        _super.call(this, name);
        this.name = name;
        this.total = total;
    }
    Invoice.prototype.printInvoice = function () {
        return this.name + ' ' + this.total;
    };
    return Invoice;
}(Report));
var BillOfLading = (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        _super.call(this, name);
        this.name = name;
        this.city = city;
        this.state = state;
    }
    BillOfLading.prototype.printBill = function () {
        return this.name + ' ' + this.city + ' ' + this.state;
    };
    return BillOfLading;
}(Report));
var myReport = new Report('Microsoft');
var myInvoice = new Invoice('google', 243);
var myBill = new BillOfLading('yahoo', 'OA', 'city');
console.log(myReport.companyProfile);
console.log(myInvoice.printInvoice());
console.log(myBill.printBill());
