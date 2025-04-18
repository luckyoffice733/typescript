//abstract class

abstract class Employee{
     firstName:string;
     lastName:string;

     constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
     }

     display(){
        console.log(this.firstName+" "+this.lastName)
     }

}

//cannot create object for the abstract class
//Cannot create an instance of an abstract class.
//let eobj = new Employee("martin","john");

//to access the properties and methods from the abstract classes indirectly means with 
//help of subclasses(child classess)

class Test extends Employee{

    print(): void {
         console.log("we are in the Test class"); 
    }

}

let tobj = new Test("Maritn","john");

tobj.print();
tobj.display();//we are accessing the display() from the abstract class
