//ReadOnly variable

  class Person{

     readonly ssn:number;
      firstName:string;
      lastName:string;

    constructor(ssn:number,firstName:string,lastName:string){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName
    }

  }

  let pobj = new Person(12121,"sumit","deshpande");
  console.log(pobj.firstName);
  console.log(pobj.lastName);
  console.log(pobj.ssn)

  //initializw the readOnly property
  //Cannot assign to 'ssn' because it is a read-only property
//pobj.ssn=332323332;


