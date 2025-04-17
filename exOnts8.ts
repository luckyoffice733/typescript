//functions
//default argument funtion
function msg():void{
  console.log("hello")
}

//function with arguments of type and return type
function addition(a:number,b:number):number{
     var c =a+b;
    return c;
}
//function with default value for th arguements
function add(x:number,y=10){
   console.log(x+y);
}

msg();
let res:number=addition(10,40);
console.log("sum is : "+res);

add(10);

//arrow functions

let sum=(n1,n2)=>n1+n2;

console.log("arrow function : "+sum(30,30));






