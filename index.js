
// using async await keyword in js
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(500)
//         }, 2000);

//     })


// }
// async function main(){

// console.log("loading module")

// console.log("Do something")


// console.log("Load Data ")
// let data = await getData()
// console.log(data)

// console.log("Process Data")
// console.log("Task 2")
// }
// main()


// 1st approach using callback function
// data.then((v) => {
//     console.log(data);


//     console.log("Process Data")


//     console.log("Task 2")

// })


//  Ftch API in js
async function getData() {
    // simulating getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
    console.log(data)

}


async function main() {

    console.log("loading module")

    console.log("Do something")

    console.log("Load Data ")
    let data = await getData()
    console.log(data)
    console.log("Process Data")
    console.log("Task 2")
} main()

// 1st approach using callback functio/
// data.then((v) => {
//     console.log(data);

//     console.log("Process Data")

//     console.log("Task 2")
//  })



// settle means resolve or reject
// resolve means promise has been setteled successfully 
// reject means promise has not been not settled successfully





