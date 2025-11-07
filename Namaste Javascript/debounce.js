let counter = 0;

const getData = () => {
    console.log("function called", counter++)
}

function mydebounce(call, d){
    let timmer;
    return function(...args){
        if(timmer) clearTimeout(timmer)
        timmer = setTimeout(() => {
            call()
        }, d)
    }
}


const betterFunction = mydebounce(getData, 1000)
