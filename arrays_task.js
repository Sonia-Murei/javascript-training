// Assignment 1: Create an Array
// Create an array named colors with the following elements: 'red', 'green', 'blue'.

colors=['red','green','blue']

// Assignment 2: Access and Modify Array Elements
// Given the array colors, access the second element and change it to 'pink'. 
// Then, display the modified array.

colors[1]='pink'
console.log(colors)

// Assignment 3: Determine the Length of an Array
// Given the array colors, determine its length and store it in a variable lengthOfColors. 
// Then, display lengthOfColors.

lengthOfColors=colors.length
console.log(lengthOfColors)

// Assignment 4: Use .pop() Method
// Given the array colors, use the .pop() method to remove the last element from the array. 
// Then, display the modified array.

colors.pop()
console.log(colors)

// Assignment 1: Combine Arrays
// Given two arrays arr1 and arr2, combine them into a single array combined Array 
// using the .concat() method. 
// Then, remove the first element from combinedArray using the .shift() method. 
// Finally, display the modified combinedArray.

arr1=['Apple','Pear','Grapes',true,10,9,8]
arr2=['Tomatoes','Cabbage','Onions',false,2,3,4]

combined=arr1.concat(arr2)
console.log(combined)

combined.shift()
console.log(combined)

// Assignment 2: Extract Subarray
// Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 to index 4 
// using the .slice() method. 
// Then, modify the extractedArray by replacing its elements with 'x', 'y', and 'z' 
// using the .splice() method. Finally, 
// display both the sourceArray and the modified extractedArray.

sourceArray=[10,20,30,40,55,68,79,88,95,102]
extractedArray=sourceArray.slice(2,5)
console.log(extractedArray)

extractedArray.splice(0,3,'x','y','z')

console.log(extractedArray)
console.log(sourceArray)