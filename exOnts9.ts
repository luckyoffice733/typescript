//function with rest parameter

function test(...a:string[]):void{
  for(let i of a){
    console.log(i);
  }
}

//let arr=["apple","kiwi","dragon"]

test("apple","kiwi","dragon");


function sumOFTenNumbers(...n:number[]):void{
    let sum=0;
   for(let i of n){
     sum = sum+i
   }
   console.log("sum of ten numbers : "+sum);
}

sumOFTenNumbers(1,2,3,4,5,6,7,8,9,10);

