let number = 27;
let firstName = "Eddie";
let graduated = true;

number += number;

//  window.alert("i am king Eddie");
    


console.log(number);
console.log(graduated);
console.log(firstName);

document.getElementById("p1").innerHTML = "hello king " + firstName;
document.getElementById("p2").innerHTML = " greatness " + number;
document.getElementById("p3").innerHTML = "have you graduated =  " + graduated;


// let username = window.prompt("what is your name");
// console.log(username);
let user;

document.getElementById("mybutton").onclick = function (){
    user = document.getElementById("mytext").value;
    console.log(user);
    document.getElementById("mylabel").innerHTML = user;

    }
let a;
let b;
let c;   
document.getElementById("buttonforc").onclick = function(){
    a = document.getElementById("myinput").value;
    a = Number(a);
    b = document.getElementById("myinput1").value;
    b = Number(b);
    c = Math.pow(a,2) + Math.pow(b,2);
    document.getElementById("label4").innerHTML = "Value of c : " + c
    console.log(c);
} 

let count = 0;

document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetButton").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseButton").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}


let x;
let y;
let z;

document.getElementById("rollbtn").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;

}
document.getElementById("submitbutton").onclick = function(){
    const checkBox = document.getElementById("box");
    if(checkBox.checked){
        console.log("you are subscribed");
    }
    else{
        console.log("you are not subscribed");
    }
}
document.getElementById("drop").onclick = function(){
    const visaCard = document.getElementById("visaCard");
    const masterCard = document.getElementById("masterCard");
    const verveCard = document.getElementById("verveCard");

    if(visaCard.checked){
        console.log("You are using a visa card");
    }
    else if (masterCard.checked){
        console.log("You are using a master card");
    }
    else if (verveCard.checked){
        console.log("You are using a verve card");
    }
    else{
        console.log("You must select a payment card type.")
    }
}

// let symbol = window.prompt("Enter symbol");
// let row = window.prompt("Enter the number of rows");
// let column = window.prompt("Enter the number of column");

// for(let i = 1;i <= row; i++ ){
//     for (let j = 1;j <= column; j++ ){
//         document.getElementById("myTable").innerHTML += symbol;
//     }
//     document.getElementById("myTable").innerHTML += "<br>";
// }


checkPosition(true);

function checkPosition(win){
    win ? console.log("you win") : console.log("you loose");
}
let identity = "Edmund";
let occupation = "Senior Software Engineer";
let car = "Mercedez Benz GlE63s"

let text = `I am ${identity}"<br>"
            i am a ${occupation} "<br>"
            i drive a ${car}`;

function display(){
   let show = document.getElementById("benz").innerHTML = text;
   console.log(show);

}
display();

{
let myNum = 1025.60;

myNum = myNum.toLocaleString("en-US",{style : "currency", currency : "USD"});

console.log(myNum);

let myNum1 = 100;

myNum1 = myNum1.toLocaleString(undefined,{style : "unit", unit :"meter"});

console.log(myNum1);
}


const result = Math.floor(Math.random()*5 + 1);

document.getElementById("buttonGuess").onclick = function(){
    let num = document.getElementById("guess").value;
    
    if (num == result){
        alert(`Congratulations!!! you are a winner`)
    }
    else if (num > result){
        alert(`number too large`)
    }
    else{
        alert(`number too small`)
    }

}



document.getElementById("cbutton").onclick = function(){
    let amount = document.getElementById("converter").value;
    amount = Number(amount);
   
    if(document.getElementById("naira").checked && amount > 0){
        amount *= 789.50;
        amount = amount.toLocaleString(undefined,{style :"currency", currency : "NGN"})
        document.getElementById("finalDisplay").innerHTML = "new convert is : " + amount;
    }
    else if(document.getElementById("euro").checked && amount > 0){
        amount *= 0.93;
        amount = amount.toLocaleString(undefined,{style :"currency", currency : "EUR"})
        document.getElementById("finalDisplay").innerHTML = "new convert is : " + amount;
        }
    else if(document.getElementById("pounds").checked && amount > 0){
        amount *= 0.80;
        amount = amount.toLocaleString(undefined,{style :"currency", currency : "GBP"})
        document.getElementById("finalDisplay").innerHTML = "new convert is : " + amount;
        } 
    else{
        document.getElementById("finalDisplay").innerHTML = "Enter a valid amount";

    }
}
