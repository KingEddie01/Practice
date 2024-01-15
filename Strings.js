let fullName = "Praise Bassey";
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+ 1);
console.log(firstName);
console.log(lastName);


let number = [1,2,3,4,5,6,7];
let word = "Eddie Udeh";
let digit =[2,4,6,8,10];


console.log(...number);
console.log(...word);

function sum(x,y,callback){
    let answer = x+y;
    callback(answer)
}
function callback(func){
    console.log(func);
}
let numero = [1,4,6,3,8,9,24]
let newNumber = numero.filter(addEven);

function addEven(element){
    return element % 2 == 0;
}
function print(element){
    console.log(element);
}
newNumber.forEach(print)


let grades = [10,20,30,40,50]


const store = new Map([
    ["mango",100],
    ["banana",50],
    ["guava",70],
    ["apple",200]
]);
store.set("avocado",300);
store.set("grapes",400);
store.get("apple",);
console.log(store.has("grapes"));
store.delete("grapes")

store.forEach((value,key) => console.log(`${key},$${value}`));


const Car ={
    model: "Mercedes Benz",
    colour : "matt black",
    year: 2023,

    drive : function(){
        console.log("smooth drive");
    },
    brake : function(){
        console.log("halt car gently");
    }
}
"<br>"
console.log(Car.model);
console.log(Car.colour);
console.log(Car.year);

Car.drive();
Car.brake();

class Player{
    score = 0.5;
    ability = "agile";

    play(){
        console.log("game start");
    }
    pause(){
        console.log("game onhold");
    }
}

const player1 = new Player();

player1.score += 2;

console.log(player1.score);
console.log(player1.ability);

player1.play();
player1.pause();


class Student{
    constructor(name,age,score){
        this.name = name;
        this.age = age;
        this.score = score;
    }
    study(){
        console.log(`${this.name} is studying`)
    }
}
const student1 = new Student("Eddie", 30,90);
console.log(student1.name);
console.log(student1.age);
console.log(student1.score);

student1.study();

class Automobile{
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Automobile.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...Go!!!")
    }
 }
 const car1 = new Automobile("Lamboghini")
 const car2 = new Automobile("Bugatti")
 const car3 = new Automobile("Ferrari")
 const car4 = new Automobile("Porsche")
 const car5 = new Automobile("Tesla")
 const car6 = new Automobile("Benz")


console.log(Automobile.numberOfCars)
Automobile.startRace();

class Animal{
    alive = true;
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}
class Rabbit extends Animal {
    name = "Bunnie";
     run(){
        console.log(`${this.name} is running`)
    }
}
class Fish extends Animal {
    name = "Sharky";
     swim(){
        console.log(`${this.name} is swimming`)
    }
}
class Eagle extends Animal {
    name = "Moyin";
     fly(){
        console.log(`${this.name} is flying`)
    }
}
const fish = new Fish();
const rabbit = new Rabbit();
const eagle = new Eagle();

console.log(fish.alive);
fish.eat();
fish.sleep();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

console.log(eagle.alive);
eagle.eat();
eagle.sleep();
eagle.fly();

class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Son extends Human{
    constructor(name,age,occupation){
        super(name,age)
        this.occupation = occupation;
    }
}
const son = new Son("Lucas",25,"Engineer");
console.log(son.name);
console.log(son.age);
console.log(son.occupation);

try{
let x = window.prompt("Enter a number");
x = Number(x);

if(isNaN(x)) throw "its not a number"

if(x == "") throw "its empty"

console.log(`${x} is a number`);
}
catch(error){
    console.log(error)
}
finally{
    console.log("I will always run")
}

let timer1 = setTimeout(firstMessage,6000)
let timer2 = setTimeout(secondMessage,3000)
let timer3 = setTimeout(thirdMessage,4000)

function firstMessage(){
    alert(`what is your name`)
}
function secondMessage(){
    alert(`what is your age`)
}
function thirdMessage(){
    alert(`what is your occupation`)
}

document.getElementById("addButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`it was nice to meet you`);
}

let count = 0;

let max = window.prompt("Enter number of counts")
max = Number(max);

let timer = setInterval(countDown,1000);


function countDown(){
    count += 1;
    console.log(count);
    if (count >= max){
        clearInterval(timer)
    }
}

const myLabel = document.getElementById("myLabel");
timeDisplay();

function timeDisplay(){
    let date = new Date();
    myLabel.innerHTML = dateFormat(date);

    function dateFormat(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "pm" : "am";

        hours = hours%12 || 12;

        return `${hours}:${minutes}:${seconds} ${amOrpm}`

    }
}
console.time("Response time")

alert(`click the ok button`)

console.timeEnd("Response time")



const promise = new Promise((resolve,reject) => {
    
    let fileLoaded = false;
    
    if(fileLoaded){
        
        resolve("File is loaded");
    }
    else{
        reject("File not loaded")
    }
})
promise.then(value => console.log(value))
         .catch(error => console.log(error));


const newPromise = new Promise(resolve => {
    setTimeout(resolve,5000)
})
newPromise.then(()=>console.log("Thanks for your patience")
);     