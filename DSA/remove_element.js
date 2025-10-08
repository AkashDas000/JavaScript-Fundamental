let arr = [3,2,1,5,3,4,8,3]
let n = arr.length
let val = 3;

function removeElement(arr,n,val){
    let x = 0;
    for(let i=0; i<n; i++){
        if(arr[i] !== val){
            arr[x] = arr[i]
            x = x+1
        }
    }
    console.log(arr)
    return x
}

console.log(removeElement(arr,n,val))