class Person{
    //properties or characteristics of person
    ssn:number;
    firstName:string;
    lastName:string; //global variable or class leve variables,instance variables
    
    //construtor is responsible to initailize the object
    //initialize the properties(ssn,firstName,lastName) 
    constructor(ssn:number,firstName:string,lastName:string){
      //ssn,firstName,lastName --> localvariables
      //this.firstName ,...-> instane variables
     this.ssn=ssn;
      this.firstName=firstName;
      this.lastName=lastName;

    }
      //actions -> methods

     getFullName():string{  // `
       return `FullName is ${this.firstName} ${this.lastName}`
     }

}


//to accessing an object properties and behaviour/actions
//create an object for class (Person)

//let objectName = new ClassName();  //Note: () -->constructor  
 //let ObejctName =new ClassName("1212","smith","joe")

 let pobj = new Person(31212,"smith","joe");
//accessing the properties using object
//objectName.propertyName

console.log(pobj.ssn);

//accessing the methods using object
//objectName.methodName(if any parameters)

let fln:string =pobj.getFullName();
console.log(fln);