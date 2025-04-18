//interface

interface Person{
   firstName:string;
   lastName:string;
   age?:number; //optional to intialize.

}


function getFullName(ps:Person):string{
  return `fullName is : ${ps.firstName} ${ps.lastName}`;
}

let p ={firstName:"mohan",lastName:"rao"} //javascript object creation;

console.log(getFullName(p))