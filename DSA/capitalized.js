const capitalized = (str) => {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

}

console.log(capitalized('hello world'))
console.log(capitalized('akash das'))