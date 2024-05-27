//Variables

// let a = 5
// let b = 10.24
// let str = "hello"

// console.log(a)
// console.log(b)
// console.log(str)

// a = "now it is a string"
// console.log(a)

//Functions

// function hello(){
//     console.log("Hello World")
// }

// hello()

// function sum(a,b){
//     return a+b
// }

// let ans = sum(4,6)
// console.log(ans)


//Arrow Functions

// let sum = (a,b) => {
//     return a+b
// }

// let ans = sum(8,6)
// console.log(ans)


//setTimeout and setInterval

// function tellTime(){
//     let currTime = new Date().getTime()
//     console.log(currTime)
// }

// setTimeout(tellTime, 1000)
// setInterval(tellTime, 1000)


//reduce function

// let arr = [1,2,3,4,5]

// let ans = arr.reduce((sum, curr) => {
//     return sum+curr
// },0)

// console.log(ans)


//map function

// let arr = [1,2,3,4,5]

// let squared = arr.map((x) => {
//     return x*x
// })

// console.log(squared)


//filter function

// let arr = [1,2,3,4,5,6,9,9,9,10,11]

// let evens = arr.filter((x) => {
//     return x%2==0;
// })

// console.log(evens)


//forEach function

// let arr = [1,2,3,4,5,6,7,8]

// arr.forEach((x) => {
//     console.log(`My value is ${x} and squared value is ${x*x}`)
// })


//Closure

// function outerFunction(){
//     let current = 0;
//     return function(){
//         current++
//         return current
//     }
// }

// let innerFunction = outerFunction()

// console.log(innerFunction())
// console.log(innerFunction())



// Immediately Invoked Function Expression

// (function(){
//     console.log("Hello World")
// })()


// Destructuring

// let arr = [1,2]

// let [a,b] = arr

// console.log(a)
// console.log(b)


// let userObject = {
//     user: "Sudipta",
//     age: 21
// }

// let {user, age} = userObject

// console.log(user)
// console.log(age)


//Some functions

// let arr = [1,2,3,4,5,6,7,10,1,9,4]
// console.log(Math.max(...arr))


// let arr = [1,2,1,1,1,1,3,2,4,4,3,5,6]
// let newArr = new Set(arr)
// console.log(newArr)


// let data = '{ "name": "Sudipta", "age": 22 }'
// console.log(data)

// let parsedData = JSON.parse(data)
// console.log(parsedData)


// let data = {
//     name: "sudipta",
//     age: 22
// }

// console.log(data)

// let stringfyObject = JSON.stringify(data)
// console.log(stringfyObject)


//Callback Function

// function square(a){
//     return a*a
// }

// function cube(a){
//     return a*a*a
// }

// function calculate(a,b,fn){
//     let ans1 = fn(a)
//     let ans2 = fn(b)

//     return ans1+ans2
// }

// let finalAns = calculate(2,4,square)
// console.log(finalAns)



// let arr = [1,2,3,4,5,6]
// arr.shift()
// console.log(arr)


// let arr = [1,2,3,4,5,6]
// arr.unshift(9)
// console.log(arr)


// let arr = [1,2,3,4,5,6]
// arr.pop()
// console.log(arr)


// let arr = [1,2,3,4,5,6]
// arr.push(8)
// console.log(arr)



// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr1.concat(arr2))


//Anonymous Function

// function doSomething(a, b, fn){
//     let ans1 = fn(a)
//     let ans2 = fn(b)

//     return ans1+ans2
// }

// let ans = doSomething(2,4, function(a){
//     return a*a
// })

// console.log(ans)


//For Loop

// let ans = 0
// let arr = [1,2,3,4,5]

// for(let i=0;i<arr.length;i++){
//     ans+=arr[i]
// }

// console.log(ans)


//While Loop

// let arr = [1,2,3,4,5,5]
// let ans = 0
// let i = 0

// while(i<arr.length){
//     ans+=arr[i]
//     i++
// }

// console.log(ans)


//Objects

// let users = [
//     {
//         name: "sudipta",
//         gender: "male"
//     },
//     {
//         name: "aranya",
//         gender: "male"
//     },
//     {
//         name: "anjali",
//         gender: "female"
//     }
// ]

// for(let i=0;i<users.length;i++){
//     if(users[i]["gender"] == "male"){
//         console.log(users[i]["name"])
//     }
// }

// console.log(Object.keys(users))
// console.log(Object.entries(users))
// console.log(Object.values(users))



//Math Functions

// console.log(Math.random()*10)
// console.log(Math.floor(2.58))
// console.log(Math.ceil(2.58))
// console.log(Math.max(2,3,4,5,1,2))
// console.log(Math.pow(2,3))

// console.log(parseInt("22"))
// console.log(parseFloat("22.324"))


//String Functions

// let str = "    hello hi  hello    "
// console.log(str.trim())

// let str = "my name is sudipta"
// console.log(str.split(" "))

// console.log(str.split(" ").join(""))
// console.log(str.slice(3,8))

//Splice Operator

// let arr = [2,4,6,8,10,12,14,16,18]
// arr.splice(3,5)
// console.log(arr)


// Object Oriented Programming

// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }


//     static myType(){
//         console.log("This is a person class")
//     }

//     greet(name, age){
//         console.log(`Your name is ${this.name} and age is ${this.age}`)
//     }

//     getName(){
//         return this.name
//     }

//     setName(name){
//         this.name = name
//     }
// }


// let person1 = new Person("sudipta", 22)

// person1.greet();
// Person.myType()

// console.log(person1.getName())

// person1.setName("aranya")
// person1.greet()


//Inheritence

// class Engineer extends Person{
//     constructor(name, age,salary){
//         super(name,age)
//         this.salary = salary
//     }
  
//     hello(name, age,salary){
//       console.log(`Your name is ${this.name} and age is ${this.age} and your salary is ${this.salary}`)
//     }
  
//     greet(){
//       super.greet()
//     }
// }

// let engineer1 = new Engineer("aranya", 20, 60000)

// engineer1.hello()
// engineer1.greet()
// Engineer.myType()


// Abstraction

// class Person{
//     #nickname
//     constructor(nickname){
//       this.#nickname = nickname
//     }
  
//     getName(){
//       return this.#nickname
//     }
// }
  
// let person1 = new Person("rahul")
// console.log(person1.getName())


//Polymorphism

// class Bird{
//     fly(){
//       console.log("Bird is flying")
//     }
// }
  
// class Eagle extends Bird{
//     fly(){
//       console.log("Eagle is flying")
//     }
// }
// let bird1 = new Bird()
// let eagle1 = new Eagle()
  
// bird1.fly()
// eagle1.fly()


//Method Overloading

// class overloading{
//     method(...args){
//     if(args.length === 0){
//         console.log("No argument")
//     }
//     else if(args.length === 1){
//         console.log("One argument")
//     }
//     else if(args.length === 2){
//         console.log("Two argument")
//     }
//     }
// }
  
// const example = new overloading()
  
// example.method()
// example.method("hello")
// example.method("hello", "hi")


//Promise

// function easyPromise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Promise Resolved")
//         },2000)
//     })
// }
  
// easyPromise().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })


// function easyPromise(){
//     return new Promise((resolve, reject) => {
//         let notResoleved  = true;
//         setTimeout(()=>{
//             if(notResoleved){
//                 reject("Promise Rejected")
//             }
//             resolve("Promise Resolved")
//         },2000)
//     })
// }
  
// easyPromise().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })


// const fs = require("fs");

// function readFile(){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         fs.readFile("a.txt", "utf-8", (err,data) => {
//             resolve(data)
//         })
//     },2000)
//   })
// }


// readFile().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })


// const fs = require("fs");

// function writeFile(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             fs.writeFile("a.txt", "This is a text file", (err) => {
//             resolve("Written to file")
//         })
//     },1000)
//     })
// }
  
// writeFile().then((data) => {
//     console.log(data)
// })


// Promise.all

// function promiseAll(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${n} Promise Resolved`)
//     },2000)
//     })
// }
  
// let promiseArray = [promiseAll(1), promiseAll(2), promiseAll(3)]
  
// Promise.all(promiseArray).then((data)=>{
//     console.log('All Promise Resolved')
//     console.log(data)
// })



// let urls = ["url1", "url2", "url3", "url4", "url5", "url6"]

// function fetchData(url){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(`${url} data fetched`)
//     },2000)
//   })
// }

// let promiseArray  = urls.map((url) => {
//     return fetchData(url)
// })

// Promise.all(promiseArray).then((data) => {
//     console.log(data)
// })
  

//Singleton Pattern


// class Singleton{
//     constructor(){
//         if(Singleton.instance){
//             return Singleton.instance
//     }
//         Singleton.instance = this
//     }
// }
  
// let singleton1 = new Singleton()
// let singleton2 = new Singleton();
  
// if(singleton1===singleton2){
//     console.log(true)
// }



//Debouncing

// function debounce(func, delay){
//     let timeout;

//     return function(...args){
//         let context = this
//         clearTimeout(timeout)
//         timeout = setTimeout(()=>{
//             func.apply(context,args)
//         },delay)
//     }
// }
  
// function doSomething(){
//     console.log("Doing Something")
// }
  
// let debouncedFunction = debounce(doSomething, 1000);
  
// debouncedFunction()

// Throttling

// function throttle(func, delay){
//     let lastCalled = 0;
  
//     return function(...args){
//         let now = Date.now()
//         let context = this
//         if(now-lastCalled >= delay){
//             func.apply(context,args)
//             lastCalled = now
//         }
//     }
// }

// function doSomething(){
//     console.log("Doing Something")
// }
  
// let throttledFunction = throttle(doSomething, 1000)
  
  
// throttledFunction()
// throttledFunction()
// setTimeout(throttledFunction,500)
// setTimeout(throttledFunction,1500)


//Currying

// const add = a=>b=>c=> {
//     return a+b+c
// }
  
// let result = add(1)(2)(3)
// console.log(result)
  
  
// function curry(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(curry(1)(2)(3))


//Batching

function fetchDataFromApi(batch){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        let responseData = batch.map((x) => {
            return `Data fetched from ${x}`
        })
        resolve(responseData)
    },2000)
  })
}

function fetchDataInBatches(ids, batchSize){
    let batchedPromises=[];

    for(let i=0;i<ids.length;i+=batchSize){
        let batch = ids.slice(i,i+batchSize);
        let promise = fetchDataFromApi(batch);
        batchedPromises.push(promise)
    }

    return batchedPromises;
}

let ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let batchSize = 4;

let batchedPromises = fetchDataInBatches(ids, batchSize)

Promise.all(batchedPromises).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})