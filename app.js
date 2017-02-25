// let funcA = () => {
//   let orgFunc = Symbol('funcA orgFunc')
//   return funcA.orgFunc = () => {console.log('funcA orgFunc')}
// }
//
// let funcB = () => {
//   let orgFunc = Symbol('funcB orgFunc')
//   return funcB.orgFunc = () => {console.log('funcB orgFunc')}
// }
//
// funcA()
// funcB()
// let array = [1, 2, 3, 4, 5]
// let res1 = array[funcA.orgFunc]()
// let res2 = array[funcB.orgFunc]()


let name = {name: 'Alice'}
let age = {age: 7}
let sex = {sex: 'female'}
let heroine = Object.assign(name, age, sex)
console.log(heroine) // Object {name: "Alice", age: 7, sex: "female"}
console.log(name) // Object {name: "Alice", age: 7, sex: "female"}


// function joinString(){
//   let args = Array.prototype.slice.call(arguments);
//   console.log(args.join(' '))
// }
//
// joinString('Welcome', 'to', 'Japan!')
//
// let el = document.querySelectorAll('div')
// let divs = Array.prototype.slice.call(el)
// console.log(divs);


// function joinString(){
//   let args = Array.from(arguments);
//   console.log(args.join(' ')) // Welcome to Japan!
// }
// joinString('Welcome', 'to', 'Japan!')
//
// let el = document.querySelectorAll('div')
// let divs = Array.from(el)
// console.log(divs); // [div, div]
//
//
// let hello = ['My', 'name', 'is', 'Alice.']
// for(value of hello){
//   console.log(value)
// }

// let heroine = {name: 'Alice', age: 7}
//
// heroine[Symbol.iterator] = () => {
//   let iterator = {},
//       i = 0,
//       keys = Object.keys(heroine)
//
//   iterator.next = () => {
//     let done = !(i < keys.length),
//         value = heroine[keys[i]]
//
//     i++
//     return done ? { done } : {value, done}
//
//   }
//
//   return iterator
// }
//
// for(status of heroine){
//   console.log(status)
// }
//
// let name = {name: 'Alice'}
// let heroine = name
// heroine.age = 7
// console.log(heroine) // Object {name: "Alice", age: 7}
// console.log(name) // Object {name: "Alice", age: 7}
//
// let name = {name: 'Alice'}
// let heroine = Object.assign({}, name, {age: 7})
// console.log(heroine) // Object {name: "Alice", age: 7}
// console.log(name) // Object {name: "Alice"}

// let key = Symbol('name')
// class Person {
//   constructor(name) {
//     this[key] = name
//   }
//
//   getName() {
//     return this[key]
//   }
//
//   sayHello() {
//     return 'Hello I\'m ' + this.getName()
//   }
// }
//
// let alice = new Person('Alice')
// console.log(alice.name) // undefined
// console.log(alice.getName()) // Alice
// console.log(alice.sayHello()) // Hello I'm Alice
//
//
//
// const log = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// }
//
// let getErrorMessage = (level) => {
//   switch (level) {
//     case log.DEBUG:
//       return 'Debug message.'
//       break;
//     case log.INFO:
//       return 'Info message.'
//       break;
//     case log.WARN:
//       return 'Warn message.'
//       break;
//     default:
//       return 'No error message.'
//   }
// }
//
// console.log(getErrorMessage(log.DEBUG))
//
//
// let sym = Symbol('name')
// let obj = {}
//
// obj[sym] = 'Alice'
// console.log(obj[sym]) // Alice
// console.log(obj['name']) // Undefined


// let funcA = function() {
//   let sort = Symbol('funcA sort.')
//   Array.prototype.sort = function() {
//     return 'funcA sort.'
//   }
// }
//
// let arr = [2,6,1]
// funcA()
// console.log(arr.sort())




// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   [Symbol.iterator]() {
//     var i = 0;
//     var keys = Object.keys(this);
//     var keyLen = keys.length;
//     var that = this;
//
//     return {
//       next() {
//         var ret = (i <= keyLen) ? {value: that[keys[i]], done: false} : {value: undefined, done: true};
//         i++;
//         return ret;
//       }
//     }
//   }
// }
//
// for (var i of obj) {
//   console.log(i);
//

// let sym1 = Symbol('Alice')
// let sym2 = Symbol('Alice')
// console.log(sym1 === sym2)
//
// let sym3 = Symbol.for('Alice')
// let sym4 = Symbol.for('Alice')
// console.log(sym3 === sym4)
//
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
//
// let arr = [1,2,3]
// let it = arr[Symbol.iterator]()
// console.log(it)

//
// for(val of obj){
//   console.log(val)
// }
