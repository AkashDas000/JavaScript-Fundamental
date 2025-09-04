let str = 'hello'

const pallindrome = (str) => {
    const reverse = str.split('').reverse().join('')

    if(reverse === str){
        console.log('The word is Palindrome')
    }
    else{
        console.log('Not a palidrome')
    }
}

pallindrome(str)