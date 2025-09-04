class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
    // console.log(this.data[this.length])
  }

  pop() {
    const pop = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return pop;
  }

  get(index) {
    return this.data[index];
  }

  shift() {
    const firstItem = this.data[0]

    for(let i=0; i<this.length; i++){
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]
    this.length--
    return firstItem
  }

  delete(index) {
    const item  = this.data[index]

    for(let i=index; i<this.length-1; i++){
      this.data[i] = this.data[i+1]
    }

    delete this.data[this.length - 1]
    this.length--
    return item;
  }
}

const myNewArray = new myArray();
// console.log(myNewArray.push(10))
myNewArray.push("apple");
myNewArray.push("mango");
myNewArray.push("banana");
myNewArray.push("orange");

// console.log(myNewArray.get(0))
// myNewArray.pop();
// myNewArray.pop();
console.log(myNewArray);
// console.log("----------------->",myNewArray.shift());
console.log(myNewArray.delete(0))
console.log(myNewArray)
