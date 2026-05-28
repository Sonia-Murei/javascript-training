// practice questions:
// 1.Write a function that counts how many times each character appears in a string. 
// e.g "Hello World"

let str = prompt("Enter your input: ")

function countChar(str) {
    let count = {};

    for (let char of str) {
        // char is a variable that temporarily stores each character during the loop.
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
// Loop through each character
// If the character already exists, increase it by 1
// Otherwise start it at 1
    return count;
}

console.log(countChar(str));

// 2.Write a JavaScript function that reverse a number.

let Numb= Number(prompt("Enter a number: "))

function reverseNumb(Numb) {
    let reversed = Numb.toString().split("").reverse().join("");
    return Number(reversed);
}

console.log(reverseNumb(Numb));

// 3.Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' Expected Output : 'abeemrstw'

let Str = prompt("Enter your input: ")

function alphabeticalOrder(Str) {
    return Str.split("").sort().join("");
}

console.log(alphabeticalOrder(Str));

// 4.Write a JavaScript function that accepts a string as a parameter and 
// counts the number of vowels within the string.

vow=prompt("Enter your input: ")

function countVowels(vow) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of vow) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels(vow));

// .includes() checks whether something exists inside a string or array. 
// It returns a boolean.

// 5.Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '

let title = prompt("Enter a sentence: ")

function capitalizeWords(title) {
    let words = title.split(" "); //Splits the sentence into words

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    // Converts the first character to uppercase
    // Adds the rest of the word using slice(1) -> from the 2nd letter to the last letter.

    return words.join(" ");
}

console.log(capitalizeWords(title))
