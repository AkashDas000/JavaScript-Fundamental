const people = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 25,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    lastname: "Smith",
    age: 30,
  },
  {
    firstname: "Mike",
    lastname: "Johnson",
    age: 35,
  },
  {
    firstname: "Sarah",
    lastname: "Williams",
    age: 25,
  },
];


// const output = people.reduce((res, user) => {

//     if(user.age > 25){
//         res.push(user.firstname)
//     }
//     return res

// },[])

// console.log(output)

const output = people.reduce((res, user) => {
    if(res[user.age]){
        res[user.age] = ++res[user.age]
    }else{
        res[user.age] = 1
    }
    return res
},{})

console.log(output)
