// Class Declaration
class student{
    constructor(name, age){
        this.name=name
        this.age = age
    }
}

// Class expressions
 const Teacher =class{
    constructor(name, age){
        this.name = name
        this.age= age
    }
 }


 // static keyword

 class Example {
    static show(){
        console.log("static function")
    }
 }
 Example.show()

 //class inheritance

 class Student {   
    constructor(a) {   
     this.name = a;  
    }   
 }   
 class User extends Student {   
    show() {   
       console.log("The name of the student is:  "+this.name)   
    }   
 }   
 var obj = new User('Sahil');   
 obj.show()  

 //The super keyword
 class Parent {   
    show() {   
       console.log("It is the show() method from the parent class");  
    }  
 }  
 class Child extends Parent {   
    show() {  
       super.show();  
       console.log("It is the show() method from the child class");  
    }   
 }   
 var obj = new Child();   
 obj.show();  


//  Getting and Setting
class Circle {
   constructor(radius) {
     this._radius = radius;
   }
   get radius() {
     return this._radius;
   }
   set radius(value) {
     if (value > 0) {
       this._radius = value;
     } else {
       console.log('Radius must be positive');
     }
   }
   get area() {
     return Math.PI * Math.pow(this._radius, 2);
   }
 }
 const circle = new Circle(5);
 console.log(circle.area); 
 circle.radius = 10;
 console.log(circle.area); 

//  class expression
const Animal = class {
   constructor(name) {
     this.name = name;
   }
 
   speak() {
     console.log(`${this.name} makes a sound.`);
   }
 };
 
 const dog = new Animal('Dog');
 dog.speak();
 
 


