var person = {
    name  : "khaled",
    age : 20 ,
    welcome : function(){
        console.log("welcome" + this.person) 
    }
}
function Person (name , age){
    this.name= name 
    this.age= age
}
let p1 = new Person("Mahmoud", 20)
let p2 = new Person("Khaled", 20)

function Animal(name){
    this.name = name
}
Animal.prototype.speak = function(){
    console.log(this.name + " sound")
}
let obj = new Animal("dog")
obj.speak()
function Dog(name){
    Animal.call(this,name)
}
Dog.prototype = Object.create(Animal.prototype)
let dog1 = new Dog("doggy")
dog1.speak()
class Animal2 {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(this.name + " sound")
    }
}
class Dog2 extends Animal2 {
    constructor(name,breed){
        super (name)
        this.breed = breed
    }
    speak(){
        console.log(this.name + " another sound")
    }
    getinfo(){
        console.log(this.name + " is a " + this.breed)
    }
}
let obj2 = new Animal2("lion")
let dog2 = new Dog2("doggy","bulldog")
obj2.speak()
dog2.speak()
let str = JSON.stringify(person)
console.log(str)
console.log("Task1")
setTimeout(function(){
    console.log("Hello after 2 seconds")
},2000) 
console.log("Task2")