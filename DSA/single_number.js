let arr = [4,1,2,1,2]

// let hash = {}
// for(let i=0; i<arr.length; i++){
//     if(!hash[arr[i]]){
//         hash[arr[i]] = 1
//     }else{
//         hash[arr[i]]++
//     }
// }

// for(let i=0; i<arr.length; i++){
//     if(hash[arr[i]] === 1){
//         console.log(arr[i])
//     }
// }

// console.log(hash)

// let res = arr.reduce((acc,curr) => {
//     if(!acc[curr]){
//         acc[curr] = 1
//     }else{
//         acc[curr]++
//     }
//     return acc
// }, {})

// console.log(res)

// Object.keys(res).forEach(key => {
//   if (res[key] === 1) {
//     console.log(Number(key)); // convert string key back to number
//   }
// });

let xor = 0;
for(let i=0; i<arr.length; i++){
    xor = xor ^ arr[i]
}
console.log(xor)
