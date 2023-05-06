import { add, get, load, save, pack, unpack, fmt, deduce, test, debug } from './src/index.js'
import sh from 'shelljs'


// sh.exec('rm ./_model.json')

let pairs = [
  ['swim', 'N'],
  ['swam', 'V'],
  ['mouse', 'N'],
  // ['house', 'N'],
  // ['douse', 'V'],
  // ['', 'R'],
]

let model = add(pairs)
// console.log(model)
console.log(fmt(model))



let out = pack(model)
console.log(out)
debug(out)

let m = unpack(out)
console.log(m)
console.log(fmt(m))