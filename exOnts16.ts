class First{
    name:string;  //properties
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    
    getDetails():string{ //methods
         return `${this.name} ${this.age}`;
    }

}

class Second extends First{
       
      city:string;
      streetName:string;

      constructor(city:string,streetName:string){
         super("spiderman",45); //here calling super class constructor
         this.city=city;
         this.streetName=streetName
     }
    

        
   getAllDetails(){
    return `${this.city} ${this.streetName}`;
   }


}

let sobj = new Second("losangles","rovery street");

let ps:string=sobj.getDetails();
console.log(ps);

console.log(sobj.getAllDetails());