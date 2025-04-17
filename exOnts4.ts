//enum

//group all constants of directions

enum direction
{         //log =0
   North,//0 
   East, //1
   South, //2
   West //3
}

console.log(direction.North);//
console.log(direction.East);
console.log(direction.South);
console.log(direction.West);


enum direction1
{         
   North=10,
   East=11, 
   South=12, 
   West=13
}

console.log(direction1.North);//
console.log(direction1.East);
console.log(direction1.South);
console.log(direction1.West);

enum direction3
{         
   North="UP",
   East="manipur", 
   South="telangana", 
   West="nagpur"
}
console.log("=====")
console.log(direction3.North);//
console.log(direction3.South);
