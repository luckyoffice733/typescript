//Access Modifiers (private,protected,public)

class Employee{
   
   private companyName:string="HCL";
   public empName:string="Suman";
   protected empSal:number=3000;

   public getEmployeeDetails():string{

    return `EMployee details : ${this.companyName} ${this.empName} ${this.empSal}`
   }

}

let eobj = new Employee();
   
//accesing the private instance variable companyName;
//console.log(eobj.companyName); //visibility of private modifier is with in the class 

//accesing the protected instance variable empSal;
//Property 'empSal' is protected and only accessible within class 'Employee' and its subclasses.ts(2445)
//console.log(eobj.empSal);

//accesing the public instance variable empName;

console.log(eobj.empName) //

let edetails=eobj.getEmployeeDetails();
console.log(edetails)