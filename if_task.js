// Create a variable and console log whether a number is odd or even

let y=Number(prompt("Enter a number: "))
let even = y%2 ==0 ? "Even" : "Odd"
console.log(even)

// Create 3 variables and console log the largest of them. 
// Assume that the user would not enter any two numbers which are the same.

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


// Create a variable called year and enter the a random year. 
// Check if the year is a leap year or not. 
// A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.

year=Number(prompt("Enter a year: "))

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("Leap year")
}else{
    console.log("Not a leap year")
}

// Take as input from a user the temperature if 
// the temperature is above 30°C display “The temperature is too high”,
// if the temperature   is above 15 display “Normal temperature” 
// otherwise display “Cold temperature”

temp=Number(prompt("Enter the temperature: "))

if(temp>30){
    console.log("The temperature is too high")
}else if(temp>15){
    console.log("Normal temperature")
}else{
    console.log("Cold temperature")
}

// Write a js program that checks if a variable x is between 10 and 20 (inclusive) 
// and if another variable y is greater than 100. 
// If both conditions are true, display"Conditions met", 
// otherwise display"Conditions not met"

x=Number(prompt("Enter x: "))
y=Number(prompt("Enter y: "))

if((x>=10 && x<=20) && y>100){
    console.log("Conditions met")
}else{
    console.log("Conditions not met")
}


// Write a js program that checks if a variable password is equal to the string "secret123". 
// If it is, display "Access   granted", 
// otherwise display"Access denied"

password=prompt("Enter your password: ")
let str="secret123"

if(password==str){
    console.log('Access granted')
}else{
    console.log('Access denied')
}

// Write a js program that checks if a variable student_score is greater than 90. 
// If true, check if the attendance is greater than 80. 
// If both conditions are true, display"Excellent student", 
// otherwise display "Good score, but attendance needs improvement"

student_score=Number(prompt("Enter student score: "))
attendance=Number(prompt("Enter student attendance: "))

if(student_score>90){
    if(attendance>80){
        console.log("Excellent student")
    }else{
        console.log("Good score, but attendance needs improvement")
    }
}else{
    if(attendance>80){
        console.log("Good attendance but performance needs improvement")
    }else{
        console.log("Needs improvement on both score and attendance")
    }
}

// Conditional Statement A student's final grade is determined by their exam score 
// (a number between 0 and 100) using the rules below: 
// If the score is 70 or above, the grade is A 
// If the score is 60 to 69, the grade is B 
// If the score is 50 to 59, the grade is C 
// If the score is 40 to 49, the grade is D 
// If the score is below 40, the grade is F 
// Task: Write a JavaScript program that: Stores a student's score in a variable. 
// Uses if, else if, and else statements to determine the grade. 
// Prints the grade to the console.

score=Number(prompt("Enter student score: "))

if(score>=70 && score<=100){
    console.log("grade is A")
}else if(score>=60 && score<=69){
    console.log("grade is B")
}else if(score>=50 && score<=59){
    console.log("grade is C")
}else if(score>=40 && score<=49){
    console.log("grade is D")
}else if(score>=0 && score<=39){
    console.log("grade is F")
}else{
    console.log("Invalid score")
}