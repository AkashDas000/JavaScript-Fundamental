// let arr = [5,1,4,2]
let arr = [1,2,3,4,5,6]
let n = arr.length

for(let i=0; i<n-1; i++){
    let isSwapp = false; // for optimization
    for(let j=0; j<n-1-i; j++){
        if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
            isSwapp = true
        }
    }
    if(!isSwapp) break;
}

console.log(arr)