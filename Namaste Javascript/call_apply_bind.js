const name1 = {
    firstName: "Akash",
    lastName: "Das"
}

 let printName = function(hometown, city){
        console.log(this.firstName + " " + this.lastName + ", "+ hometown + ", " + city)
    }
printName.call(name1, "delhi", "CP")

const name2 = {
    firstName: "Rahul",
    lastName: "kumar",
}

printName.call(name2, "Noida", "sector-4")
printName.apply(name2, ["Noida", "sector-4"])


let printMyname = printName.bind(name2, "Noida", "sector-4")
console.log(printMyname)
printMyname()