// Comfirm the Module loader.
// ES Modules
import { lib } from './lib'
console.log(lib(4))

// CommonJS
// var triangle = require('./lib').triangle
// console.log(triangle)

// var lib = require('./lib')
// console.log(lib.square(4))


// var obj = {name: 'Alice'}
// with (obj) {
//   console.log(name)
// }