// document.writeln("NaderGmail");

// var s = "12.9pt"
// s =parseInt(s);
// console.log(s);
// var f = ("12.9pt");
// f =parseFloat(f);
// console.log(f);


// console.log("4" + 2);
// console.log("4" -2);


// console.log(3=="3");
// console.log(3==="3");

// var temp =30;

// if(temp>=100){
//     document.writeln("boiling");
// }else if(temp<100 && temp>=60){
//     document.writeln("worm");
// }else{
//     document.writeln("cold");
// }


// var s;
// if(temp>=100){
//     s = "boiling";
// }else{
//     s="not boiling";
// }
// document.writeln(s);

// //  var s =(temp>=100)? "boiling":"notboiling";
// //  document.writeln(s);

// var day=1;
// switch(day){
//     case 1:
//         document.writeln("sunday");
//         break;
//      case 2:
//         document.writeln ("monday")
//         break;
//     case 3:
//         document.writeln("tharday")
//         break;
//     case 4:
//         document.writeln("wensday")
//         break;
//     case 5:
//         document.writeln("thurday")
//         break;
//     case 6:
//         document.writeln("friday")
//         break;
        
//     // default:
//     //     document.writeln("none")  
// }

// for(var c=2; c<5; c++){
//     document.writeln(c);
// }


// var w = 5;
// while(w<4){
//     document.writeln(w);
//     w++
// }

// do{
//     document.writeln(w);
//     w++
// }while(w<4)


// function sayHello(){
//     console.log("hello from Nader Gamil");
// }
// sayHello();


// function add(n1=9,n2=11){
//     var t=3;
//     let r=4;
//     var result = n1+n2;
//     return result;
// }
// console.log(add(4,4));
// // console.log(t)
// // console.log(r)


// var y = function (){
//     console.log("hello from Dexter");
// }
// y();


// function CallAnather(fn){
//     console.log("Hi from Morgan");
//     fn();
// }

// CallAnather(function(){
//     console.log("this is a anoymous function");
// });

// // CallAnatherfn(y);



// // for (let i = 0; i < 5; i++) {
// //     var u = 4
// //     console.log(i);
// // }
// // console.log(u);


// var arr = [100,200,300,300,"name","string"]
// console.log(arr);
// console.log(arr[4]);
// arr[0] = "Rick"
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// console.log(arr);
// arr.push(80,90);
// console.log(arr);
// arr.splice(3,0,450);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(8);
// console.log(arr);


// var arr2 =[10,20,40,30,40,50,60,40];
// console.log(arr2.indexOf(20));
// console.log(arr2.lastIndexOf(40));

// var miniArr = arr2.slice(2,5);
// console.log(miniArr);



// var arr3 = [1,2,3,4];
// var arr4 = [5,6,7,8];
// var newArr = arr3.concat(arr4)
// console.log(newArr);


// let arr = [1,2,3];
// let arr2 = [6,7,8];
// let NewArr= arr.concat(arr2)
// console.log(NewArr);

// let arr3=["hi","nader","and","omar"]
// let strArr = arr3.join("")
// console.log(arr3);
// arr.sort()
// console.log(arr3)


// let arr5 = [5,6,7]
// console.log(arr5)
// arr5.sort((a,b => a-b))
// console.log(arr5);


// for(var i=0;i<arr3.length;i++){
//     arr3[i]

// }
// console.log(arr3)


// arr2.forEach(function(element)){
   
// }console.log(element+1)

// for(var element of arr3){
   
// } console.log(arr3)


// var obj1  = 

// let arr= [1,2,4]
// let arr2= [7,8,9]
// let newArr= arr.concat(arr2)
// console.log(newArr)

// let arr3 = ["hello", "Nader", "and","an"]
// let strArr =arr3.join(" ")
// console.log(strArr)
// arr3.sort()
// console.log(arr3)

// let arr5 = [10,2,5]
// console.log(arr5)
// arr5.sort((a,b)=>a-b)
// console.log(arr5)
// arr5.sort((a,b)=>b-a)
// console.log(arr5)

// for(var i=0;i<arr3.length;i++){
//     arr3[i]
// }
// console.log(arr3)

// arr2.forEach(function(element){
//     console.log(element+1)
// })
// for(var element of arr3){
//     console.log(element+" Nader")
// }
// var obj1 = document.getElementById("1")
// console.log(obj1)

// var obj2 =document.getElementsByClassName("class1")[1]
// console.log(obj2)
//  var obj3 = document.getElementsByTagName("h3")[0]
//     console.log(obj3)

//     var obj4 = document.querySelector("#flex-container")
//     console.log(obj4)

//     var obj5 =document.getElementsByTagName("input")[0]
//     obj5.setAttribute("placeholder","Enter your name here") 
//     obj5.setAttribute("value","Nader") 
//     console.log(obj5)

//     obj4.style.background= "grey"

//     var text = document.createElement("div")
//     var text = document.createTextNode("this is a new node")


//     var btn = document.getElementsByTagName("button")[0]
//     btn.addEventListener("click","function(){}")

   let person = {
    name:"Ahmed",
    age:20,
    welcome: function(){
        console.log("welcome " + this.name)
    }
};
person.welcome();

console.log(person.name);

person.name = "john";
console.log(person);

person.major = "Data scince&Ai";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

let person2 = {};
Object.assign(person2, person, {job:"Data scintest"});
console.log(person2);

function Person(name, age){
    this.name = name;
    this.age = age;
}

let obj = new Person("Ahmed", 19);
console.log(obj);
console.log(obj.name);

let obj2 = new Person("john", 24);
console.log(obj2);
console.log(obj2.age);

let a = new Array(1,2,3);
console.log(Array.prototype);


function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(this.name + "make a sound");
}

let wolf = new Animal("wolf");
wolf.speak();


function Dog(name){
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function(){
    console.log(this.name + " barks");
}

let d = new Dog("bubby");
d.speak();


class Animal1{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(this.name + " makes a sound.");
    }
}

class Dog1 extends Animal1{
    constructor(name, type){
        super(name);        
        this.type = type;
    }

    getDAta(){
        console.log("the name and the type is " + this.name + " " + this.type);
    }
}

let anAnimal1 = new Animal1("cat");
anAnimal1.speak();

let d1 = new Dog1("puppy", "type");
d1.speak();
d1.getDAta();



let str = JSON.stringify(person)
console.log(str)

let obj4 = JSON.parse(str)
console.log(obj4)

console.log("task1")
setTimeout(function(){
    console.log("task2")
},3000)
console.log("task3")


