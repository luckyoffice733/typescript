var Person = /** @class */ (function () {
    //construtor is responsible to initailize the object
    //initialize the properties(ssn,firstName,lastName) 
    function Person(ssn, firstName, lastName) {
        //ssn,firstName,lastName --> localvariables
        //this.firstName ,...-> instane variables
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //actions -> methods
    Person.prototype.getFullName = function () {
        return "FullName is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
//to accessing an object properties and behaviour/actions
//create an object for class (Person)
//let objectName = new ClassName();  //Note: () -->constructor  
//let ObejctName =new ClassName("1212","smith","joe")
var pobj = new Person(31212, "smith", "joe");
//accessing the properties using object
//objectName.propertyName
console.log(pobj.ssn);
//accessing the methods using object
//objectName.methodName(if any parameters)
var fln = pobj.getFullName();
console.log(fln);
