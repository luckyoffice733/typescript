//inheritance 
//acquiring properties and methods from Parent class to Child Class
//it is recommended to create the objct for Child class
//if we create the object  for child class ,we can access child class properties and methods
//as well as we can access Parent class Properties and methods.
//the main advantage of inheritance is code reusability.
//for inheritance we will use 'extends' keyboard

class Animal{  //parent
    public eat(){
        console.log('animal can eat');
    }   
}
class Dog extends Animal{ //child
    public bark(){
        console.log("bow...bow");
    }   
}
class Cat extends Animal{ //child
     public sound(){
        console.log('meaow...meaow')
     }
}


let dobj= new Dog();
dobj.bark();
dobj.eat();

let cobj = new Cat();
cobj.sound();
cobj.eat();


