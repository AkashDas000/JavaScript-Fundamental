let arr = [4,0,1,2,5]
let n = arr.length

let totalSum = n * (n+1) / 2;
let sum = 0;

for(let i=0; i<n; i++){
    sum = sum + arr[i]
}

let result = totalSum - sum
console.log(result)