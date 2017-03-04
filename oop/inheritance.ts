class Report {
    companyProfile : string;
    constructor(public name : string){
        this.companyProfile = name;
    }
}

class Invoice extends Report{
    constructor(public name :string, public total : number){
        super(name);
    }
    printInvoice(){
        return this.name + ' ' + this.total;
    }
}

class BillOfLading extends Report{
    constructor(public name : string, public city : string, public state : string){
        super(name);
    }
    printBill(){
        return this.name + ' ' + this.city + ' ' + this.state;
    }
}
let myReport = new Report('Microsoft');
let myInvoice = new Invoice('google', 243);
let myBill = new BillOfLading('yahoo', 'OA','city');
console.log(myReport.companyProfile);
console.log(myInvoice.printInvoice());
console.log(myBill.printBill());

