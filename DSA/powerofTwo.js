let n = 6

function powOfTwo(n){
    if(n == 1){
        return true;
    }else if(n<1 || (n%2 != 0)){
        return false
    }
    return powOfTwo(n/2)
}

console.log(powOfTwo(n))