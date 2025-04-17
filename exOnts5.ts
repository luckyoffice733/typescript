
let st:string[] =[];
st[0]="apple";
st[1]="orange";
//st[2]=30; invalid

//sometimes, you may need to store a value,in an variable. But you dont know its types. then
//we can declare type as any.
console.log("iterating elements from array st")
for(let s of st){
    console.log(s)
}

let st1:any[] =[];
st1[0]=true;
st1[1]="sumit despande";
st1[2]=10;

console.log("iterating elements from array st1")
for(let s of st1){
    console.log(s)
}
