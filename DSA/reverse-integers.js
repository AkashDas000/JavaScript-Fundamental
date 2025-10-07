let n = -123243679

function reverse(n){
    let nCopy = n;
    let rev = 0;

    n = Math.abs(n)
    while(n>0){
        let last = n%10;
        rev = (rev*10) + last
        n = Math.floor(n/10)
    }

    // let limit = Math.pow(2,31);
    // if(rev < -limit || rev > limit) return 0

    return (nCopy < 0) ? -rev : rev;
}

console.log(reverse(n))