// const p = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//      resolve("Promise Resolve value !!")
//    },10000)
// })

// const p2 = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//      resolve("Promise Resolve value 2 !!")
//    },5000)
// })

// async function handlePromise(){
//     const val = await p
//     console.log("Namaste Javascript")
//     console.log(val)

//      const val2 = await p2
//     console.log("Namaste Javascript 2")
//     console.log(val2)
// }

// handlePromise()

const API_URL = "https://api.github.com/users/AkashDas000"

async function getData(){
    try{
        const data = await fetch(API_URL)
    const value = await data.json()
    console.log(value)
    }catch(err){
        console.log("error",err)
    }

    // return fetch(API_URL).then((res) => res.json()).then((res) => console.log(res))
}

getData()
// const data = getData()
// console.log(data)

// function getData(){
//     p.then((res) => console.log(res))
//     console.log("Namaste Javascript")
// }

// getData()

// const data = handlePromise()
// console.log(data)