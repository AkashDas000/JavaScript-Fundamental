const reverseInt = (num) => {
    const reverse = num.toString().split('').reverse().join('')

    return parseInt(reverse) ;
}

console.log(reverseInt(123))