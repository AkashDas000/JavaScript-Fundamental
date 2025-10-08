let arr = [0,0,1,1,1,2,2,3,3,4]
let n = arr.length;

function removeDuplicate(arr, n){
    let x = 0;
    for(let i=0; i<n; i++){
        if(arr[i] > arr[x]){
            x = x + 1;
            arr[x] = arr[i]
        }
    }
    // console.log(arr)
    return x+1
}

console.log(removeDuplicate(arr, n))