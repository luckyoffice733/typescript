//Access Modifiers (private,protected,public)
var Employee = /** @class */ (function () {
    function Employee() {
        this.companyName = "HCL";
        this.empName = "Suman";
        this.empSal = 3000;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "EMployee details : ".concat(this.companyName, " ").concat(this.empName, " ").concat(this.empSal);
    };
    return Employee;
}());
var eobj = new Employee();
//accesing the private instance variable companyName;
//console.log(eobj.companyName); //visibility of private modifier is with in the class 
//accesing the protected instance variable empSal;
//Property 'empSal' is protected and only accessible within class 'Employee' and its subclasses.ts(2445)
//console.log(eobj.empSal);
//accesing the public instance variable empName;
console.log(eobj.empName); //
var edetails = eobj.getEmployeeDetails();
console.log(edetails);
