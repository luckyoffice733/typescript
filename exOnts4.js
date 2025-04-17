//enum
//group all constants of directions
var direction;
(function (direction) {
    direction[direction["North"] = 0] = "North";
    direction[direction["East"] = 1] = "East";
    direction[direction["South"] = 2] = "South";
    direction[direction["West"] = 3] = "West"; //3
})(direction || (direction = {}));
console.log(direction.North); //
console.log(direction.East);
console.log(direction.South);
console.log(direction.West);
var direction1;
(function (direction1) {
    direction1[direction1["North"] = 10] = "North";
    direction1[direction1["East"] = 11] = "East";
    direction1[direction1["South"] = 12] = "South";
    direction1[direction1["West"] = 13] = "West";
})(direction1 || (direction1 = {}));
console.log(direction1.North); //
console.log(direction1.East);
console.log(direction1.South);
console.log(direction1.West);
var direction3;
(function (direction3) {
    direction3["North"] = "UP";
    direction3["East"] = "manipur";
    direction3["South"] = "telangana";
    direction3["West"] = "nagpur";
})(direction3 || (direction3 = {}));
console.log("=====");
console.log(direction3.North); //
console.log(direction3.South);
