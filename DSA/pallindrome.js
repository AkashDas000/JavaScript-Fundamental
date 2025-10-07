function pallindrome(n){
    if( n < 0) return false;
    let nCopy = n;
    let res = 0;

    while(n > 0){
        let rem = n % 10;
        res = (res*10) + rem
        n = Math.floor(n/10)
    }

    // if(res === nCopy){
    //     return true
    // }
    // return false

    return res === nCopy
}

console.log(pallindrome(25552))