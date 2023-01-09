// Variables in JS
//Three ways to do it using var ,let and const
//Var is not used anymore so let and const is mainly used
//let and const have block-level scope so commonly used

//let score;
//score = 10;
//console.log(score);  

// let is used when you know that u r going to re assign the value of the variable
//Use const always so that the code is more robust and secure

//const age =12;

//const shold be initialized i.e value should be given

//console.log(age);

//Data types i.e String,Numbers,Boolean,Null,Undefined
//String
// const name ='John';
//Number
// const age =12;
/* const rating =4.5;
//Boolean
const isCool =true;
//Null
const x =null;
//Undefined
const y =undefined;
let z; 

//to show the data type we use type of
console.log(typeof z); */

//Concatenation
//console.log('My name is ' +name + ' and I am ' +age);
//Using Template Strings

/* const hello =console.log(`My name is ${name} and I am ${age}`);
console.log(hello); */

// food =Number(prompt('How much was the Food?'));
// tipPecentage =Number(prompt('Tip %?'))/100;
// tipAmount =food * tipPecentage;
// total = food + tipAmount 

// console.log('tipAmount:',tipAmount);
// console.log('Total:',total);


//Baby Weather App
//if rain the grab your umbrella
//else wear sun-glasses

// let Weather = prompt('How is the Weather? ') 
// if (Weather == 'rainy'){
//     console.log('Grab your Umbrella ')
// } else {
//     console.log('Wear your sunglasses ')
//}
//conditional operators
// ==(double equal) - check for equality
// ===(Triple equal sign) -check for equality and data type
// != not equal to
// !== not equal value and type
// >,<,>=,<= the remaining ones

//Functions
// function sayMyName() {
//     console.log('Sam')
// }
// // sayMyName() 


// function sayMyName2(name) {
//     console.log(name)
// } 
// sayMyName2('Sammy')

// function greeting(name){
//     //greet ='Hi ' + name + ', Nice to meet you!'
//     //template literals ``
//     greet = `Hi ${name}, Nice to meet you!`
//     console.log(greet)
// }

// greeting('SAMMY')

// function sum(a,b){
//     //return
//     return a + b
// }
// // num1 = sum(1,3)
// // console.log(num1)

// function calculateFoodTotal(food,tip ){
//     const tipPecentage =tip/100
//     const tipAmount =food * tipPecentage;
//     const total = sum(food,tipAmount)
//     return  total
// }
// console.log(calculateFoodTotal(300,20))

//ES^ way of writting functions
//using arrow functions =>
//arrow function with explicit return 
// const sumArrow =(a,b) =>{
//     return a + b
// }
//arrow function with implicit return
//IMPORTANT: for implicit return remove curly braces 
// const sumArrow2 = (a,b) => a+b

// console.log(sumArrow2(10,12))

// const add=(a,b)=>a +b
// console.log(add(2,2))

// const sub=(a,b)=> a-b
// console.log(sub(2,2))

// const mult=(a,b)=> a*b
// console.log(mult(2,10))

//ARRAYS

// const groceries =['🍌','🍎','🍊','🍐']
// console.log(groceries)

//grab the 3rd index or item 
// console.log(groceries[3])

//array methods
// groceries.push('🍪','🧃')
// console.log(groceries)

//array slice
// start from 0 inclusive and up to 2 not including 2
// console.log(groceries.slice(0,2))

// console.log(groceries.slice(3,6))

// console.log(groceries.slice(1,4))

//array methods (slice,push,indexOf,length)

//console.log(groceries.indexOf('🍐'))

// console.log(groceries.length)

//OBJECTS {}
//They are key value pairs
// const person ={
//     name:'Leonardo',shirt:'white'
// }
//access object :dot notation vs bracket notation
// console.log(person.name)
// console.log(person.shirt)

//bracket notation
// console.log(person['name'] )
// console.log(person['shirt'])

//assign object 
// person['phone'] ='1-222-333-4444'
// console.log(person.phone)

// console.log(person)

//person2
// const person2={
//     name:'Qazi',shirt:'black'
// }
// console.log(person2)
// console.log(person2['name'])
// console.log(person2['shirt'])

//es6 arrow functions (2 arguments)
//object and template literals
//methods
// const introducer=(name,shirt)=>{
//     const person = {
//         name:name,
//         shirt:shirt,
//         assets:100000,
//         liability:50000,
//         netWorth:function(){
//             return this.assets -this.liability;
//         }

//     }
//     const intro =`Hi my name is ${person.name} and the color of my shirt is ${person.shirt}
//     and my net worth is ${person.netWorth()}USD`
//     return intro 
// }

// console.log(introducer('Sammy','black'))
// console.log(introducer('Leornado','white'))

//Control structures i.e for loops
const fruits =['🍌','🍎','🍊','🍐','🍌','🍎','🍊','🍐']



// for (let i =0;i<fruits.length;i++){
//     console.log(i,fruits[i])}

// for(const fruit of fruits){
//     console.log(fruit)
// }

const double=(numbers)=>{
    let result =[]
    for (const number of numbers){
    result.push(number*2)}
    return result
}

//console.log(double([1,2,3,4,5,6,7,8,9,12,] ))

//counter
const letterCounter =(phrase)=>{
    let result =0;

    for (const index in phrase){
        console.log(Number(index) +1)
        result =Number(index) +1;  
    }
    return{result}
}
//const phrase = prompt('Write your phrase: ')

//console.log(letterCounter(phrase))

//sum of all numbers














