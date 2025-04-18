//Gettters and Setters --> encapsulated classes
class Person{
    private personId:number;
    private name:string;
    private age:number;

   public  setPersonId(personId:number):void{
    this.personId=personId;
   }

   public getPersonId():number{
    return this.personId;
   }

  public setName(name:string):void{
     this.name=name;
  }
  public getName():string{
    return this.name;
  }
    
   public setAge(age:number):void{
    this.age=age
   }

   public getAge():number{
    return this.age;
   }

}

let pobj = new Person();

//to initialize the private properties using setter methods or mutators
pobj.setAge(45);
pobj.setPersonId(2121);
pobj.setName("Arjun Reddy");

//getting the private properties using getter methods or accessors.
console.log("Person Details")
console.log(pobj.getPersonId())
let nt =pobj.getName();
console.log(nt)
console.log(pobj.getAge())
