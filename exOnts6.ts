
//function functionName(parameters/arguments):returnType{
     //logic
//}
function log(message):void{
    console.log("welcome to void return type: "+message)
}

log("Smith");


function addition(a:number,b:number):number{
    let c =a+b;
    return c;
}

let res:number=addition(50,60);
console.log("sum of two numbers : "+res)