// 'use strict'
// console.log(this)

// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this)
//     }
// }

// console.log(obj.x)

// const student = {
//     name: "Akash",
//     printName: function(){
//         console.log(this.name)
//     }
// }

// student.printName()

// const student2 = {
//     name: "Peter"
// }

// student.printName.call(student2)


// const obj = {
//     a: 10,
//     x: ()=> {
//         console.log(this)
//     }
// }

// obj.x()


const obj2 = {
    a: 10,
    x: function(){
        const y = () => {
            console.log(this)
        }
        y()
    }
}

obj2.x()