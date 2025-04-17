//union type

let result:number|string;
result=10;
console.log(result);
result="keshav";
console.log(result);
//result=true
//console.log(result);


//Type --> your custom datatype using existing type

type hcl=string; //alias name for existing data type

let message:hcl="Hello world";
console.log("alias");
console.log(message);


//Type inference
let a:number=20;
let b=10; //based on the value assign to the variable it will have the datatype.

console.log("type inferences")
console.log(typeof a)
console.log(typeof b)











