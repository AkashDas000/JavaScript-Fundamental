function secondGreatest(arr) {
    let fistGreatest = -Infinity;
    let secondGreatest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > fistGreatest){
            secondGreatest = fistGreatest;
            fistGreatest = arr[i]
        }

        else if(arr[i] > secondGreatest){
            secondGreatest = arr[i]
        }
    }

    return secondGreatest
}

let arr = [4, 9, 0, 2, 8, 7, 1];

let result = secondGreatest(arr);
console.log(result)
