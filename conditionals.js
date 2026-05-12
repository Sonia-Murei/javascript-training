let x= Number(prompt("Enter a number: "))

if(x%2==0){
    console.log("Even number")
}else{
    console.log("Not an even number")
}

// Write a simple if statement to chech voter eligigbility(assume voter must be 18+)

let age=Number(prompt("Enter your age: "))

if(age>=18){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible to vote")
}

// Write a simple if statement that compares 3 numbers and outputs the largest one

let num1=Number(prompt("Enter num1: "))
let num2=Number(prompt("Enter num2: "))
let num3=Number(prompt("Enter num3: "))

if ((num1 > num2) && (num1 > num3)){
    console.log("Num1 is the largest")
}else if ((num2 > num1) && (num2 > num3)){
    console.log("Num2 is the largest")
}else{
    console.log("Num3 is the largest")
}

//Write a program that determines ticket prices based on age:
//under 12-Ksh 500, under 18-ksh 650, adults-ksh 800, over 60-ksh 400

let Age=Number(prompt("Enter your age: "))

if(age<12){
    console.log("Ticket price ksh 500")
}else if((age<18 && age>=12)){
    console.log("Ticket price ksh 650")
}else if((age>=18 && age<60)){
    console.log("Ticket price ksh 800")
}else if(age>60) {
    console.log("Ticket price ksh 400")
}else{
    console.log("Invalid input")
}

//Write a program that checks whether the length of a username is at least 8 characters
//if length<8 output "too short" otherwise output "correct format"

username=prompt("Enter your username: ")

if(username.length<8){
    console.log("Username is too short")
}else{
    console.log("Username has the correct format")
}

// Write a simple if statement to chech voter eligigbility(assume voter must be 18+)
// Uisng a ternary operator

let a=Number(prompt("Enter your age: "))
let voter = a >= 18 ? "Eligigble to vote" : "Not eligible to vote"
console.log(voter)

// Write a simple if statement to chech whether a number is even or odd
// Uisng a ternary operator

let e=Number(prompt("Enter a number: "))
let even = e%2 ==0 ? "Even" : "Odd"
console.log(even)