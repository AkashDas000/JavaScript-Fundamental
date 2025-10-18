// let n = 5

// function sum(x){
//     if( x == 0) return 0
//     return x + sum(x-1)
// }

// console.log(sum(n))

// let arr = [1,2,3,4,5]
// let n = arr.length-1

// function sum(n){
//     if(n==0) return arr[n]

//     return arr[n] + sum(n-1)
// }

// console.log(sum(n))

// let arr = [1, 2, 3, 4, 5]; 

// function outer() {
//   function inner() {
//     return arr[3];
//   }
//   console.log(inner()); 
// }
// outer()

//Sum of all odd numbers in the array


// let arr = [5,2,0,3,6,7]

// function sumofOdd(n){
//   let isOdd = (arr[n]%2) != 0

//   if(n == 0){
//     if(isOdd) return arr[n]
//     else return 0
//   }

//   if(isOdd) {
//     return arr[n] + sumofOdd(n-1)
//   }else{
//     return 0 + sumofOdd(n-1)
//   }

// }

// console.log(sumofOdd(arr.length-1))

// Find the Factorial using Recursion

let n = 5

function factorial(n){
if( n < 1 ) return 1
return n*factorial(n-1)
}

console.log(factorial(n))