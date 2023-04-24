//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function showFood(){
    console.log(person3)
    console.log(person3.shakes[0])
}

console.log(showFood())




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
// Use an arrow to create the printInfo method
    printInfo = () =>{
        return `Name: ${this.name} \nAge: ${this.age}`
    }
// Create another arrow function for the addAge method that takes a single parameter
    addToAge = (num) =>{ 
        let counter = 0;
        return `Name: ${this.name} \nAge: ${this.age + num + counter++}`
    }

    // addAgeBy2 = (function(){
    //     let counter = 0;
    //     return function(){return `Name: ${this.name} \nAge: ${this.age + counter++}`}
    // })()
}

let adam = new Person('Adam', 20)
let brad = new Person('Brad', 30)

// Adding to the age 
console.log(adam.printInfo())
console.log(adam.addToAge(1))
console.log(adam.addToAge(3))






// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length 
    is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isStringSize = (word) => {
    return new Promise((resolve, reject) => {
        if(word.length <= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isStringSize("blahblahblah")

.then((result) => {
    console.log(`Small Number`)
})

.catch((error) => {
    console.log(`Big word`)
})



// CODEWARS

// 1) Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// PYTHON
// def basic_op(operator, value1, value2):
//     if operator == '+':
//         return (value1 + value2)
//     elif operator == '-':
//         return (value1 - value2)
//     elif operator == '*':
//         return (value1 * value2)
//     elif operator == '/':
//         return (value1 / value2)

function basicOp(operator, value1, value2){
    if (operator == '+'){
        console.log(value1 + value2)
    } else if (operator == '-'){
        console.log(value1 - value2)
    } else if (operator == '*'){
        console.log(value1 * value2)
    } else if (operator == '/'){
        console.log(value1 / value2)
    }
    return'done'
}

console.log(basicOp('+',3,1))



// 2) Consider an array/list of sheep where some sheep may be missing from their place.
//  We need a function that counts the number of sheep present in the array (true means present).
//  [True,  True,  True,  False,
//     True,  True,  True,  True ,
//     True,  False, True,  False,
//     True,  False, False, True ,
//     True,  True,  True,  True ,
//     False, False, True,  True]
// PYTHON
// def count_sheeps(sheep):
//     true_sheep = []
//     for i in sheep:
//         if i == True:
//             true_sheep.append(i)
    
//     return (len(true_sheep))

sheep = ["T", "T", "T", "F"]
true_sheep = []

function count_sheep(){
    for (let i = 0; i < sheep.length; i++){
        if(sheep[i] == "T"){
            true_sheep.push(sheep[i])
        }
    }
    console.log(true_sheep.length)
}

console.log(count_sheep())



