let values=[1,2,3,'Apple','Samsung',false]
console.log(values) //6
console.log(values[4])

values[5] = true
console.log(values)

//length
console.log(values.length)

//.at()

console.log(values.at(5)) //true
console.log(values.at(-2)) //samsung

//slicing
console.log(values.slice(2,5)) // [3,'Apple','Samsung']

//Adding items by Pushing (at the end)
values.push("HP",8,9,10)
console.log(values) //[1, 2, 3, 'Apple', 'Samsung', true, 'HP', 8, 9, 10

//Adding items by unshifting (at the start)
values.unshift("Mango","Peach",100)
console.log(values) //['Mango', 'Peach', 100, 1, 2, 3, 'Apple', 'Samsung', true, 'HP', 8, 9, 10]

//Removing values with pop(from the end)
values.pop()
console.log(values) //['Mango', 'Peach', 100, 1, 2, 3, 'Apple', 'Samsung', true, 'HP', 8, 9]

//Removing values with shift(from the start)
values.shift()
console.log(values) //['Peach', 100, 1, 2, 3, 'Apple', 'Samsung', true, 'HP', 8, 9]

//Checking whether a certain value exists in an arrays using Includes
console.log(values.includes(8)) //true
console.log(values.includes(50)) //false

//Spread Operator
let num1=[10,20,30]
let num2=[40,50,60]
let num3=[...num1,...num2] 

console.log(num3) //(6) [10,20,30,40,50,60]

