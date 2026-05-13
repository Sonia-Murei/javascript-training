let person={
    name:"Jane Doe",
    age:29,
    address:"123 Kimathi st",
    "is employed": true
}
console.log(person)

//Accessing values in objects
//dot notation
console.log(person.address)

//bracket notation
console.log(person["is employed"]) //true
console.log(person["age"]) //29
console.log(person['name']) //Jane Doe

console.log(Object.keys(person)) //(4) ['name', 'age', 'address', 'is employed']
console.log(Object.values(person)) //(4) ['Jane Doe', 29, '123 Kimathi st', true]
console.log(Object.entries(person)) //(4) [Array(2), Array(2), Array(2), Array(2)]
//i.e 
// 0 : (2) ['name', 'Jane Doe']
// 1 : (2) ['age', 29]
// 2 : (2) ['address', '123 Kimathi st']
// 3 : (2) ['is employed', true]


//Modifying values in an object
person.name="Alice"
console.log(person) //{name: 'Alice', age: 29, address: '123 Kimathi st', is employed: true}