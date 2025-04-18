//static property and method
//static property and method we can access it by using classNamee

class Employee{

    static headCount:number=0; //static property
   firstName:string;  //instance
   lastName:string    //instance property

   constructor(firstName:string,lastName:string){
      this.firstName=firstName;
      this.lastName=lastName;
      //acessing the static property using ClassName
      Employee.headCount++;
   }


}

let eobj = new Employee("madhu","polala");

console.log(eobj.firstName+" "+eobj.lastName)
console.log("static variable: "+Employee.headCount)////acessing the static property using ClassName

let eobj1 = new Employee("anushka","pal");

console.log(eobj1.firstName+" "+eobj1.lastName)
console.log("static variable: "+Employee.headCount)////acessing the static property using ClassName