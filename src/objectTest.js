var deepAssign = require('deep-assign');
 
var res1 = Object.assign({a: {b: 0}}, {a: {b: 1, c: 2}}, {a: {c: 3}});
var res2 = deepAssign({a: {b: 0}}, {a: {b: 1, c: 2}}, {a: {c: 3}});

console.log(res1)
console.log(res2)

// { a: { c: 3 } }
// { a: { b: 1, c: 3 } }

var res3 = Object.assign({a: {b: 0}}, {a: {c: 3}});
var res4 = deepAssign({a: {b: 0}}, {a: {c: 3}});

console.log(res3)
console.log(res4)

// { a: { c: 3 } }
// { a: { b: 0, c: 3 } }

var heroine = deepAssign({name: 'Alice'}, {status: {age: 7}}, {status: {gender: 'female'}})
console.log(heroine)

// var name = {name: {first: 'Alice', last: 'Liddell'}}
// var heroine = deepAssign({}, name, {age: 7})
// heroine.name.fullname = 'Alice Liddell'
// console.log(heroine) // Object {name: {first: "Alice", last: "Liddell", fullname: "Alice Liddell"}, age: 7}
// console.log(name) 
