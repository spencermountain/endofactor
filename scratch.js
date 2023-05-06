import { add, get, load, save, pack, unpack, fmt, deduce, test, debug, trim } from './src/index.js'
// import sh from 'shelljs'


// sh.exec('rm ./_model.json')

let pairs = [
  // ['abc', 'V'],
  ['swim', 'N'],
  ['swam', 'V'],
  ['mouse', 'N'],
  ['house', 'N'],
  ['douse', 'V'],
  // ['swim', 'N'],
  // ['swam', 'V'],
  // ['tam', 'V'],
  // ['mouse', 'N'],
  // ['house', 'N'],
  // ['douse', 'V'],
  // ['', 'R'],
]

let model = add(pairs, {})
console.log(fmt(model))
model = unpack(pack(model))
trim(model)
console.log(fmt(model))
// debug(model)

console.log(get('house', model))
console.log(get('slur', model))
// console.log('\n\n=-=-=-=-=-=-=-=-=-=-\n\n')
// let out = pack(model)
// // console.log(out)
// let m = unpack(out)
// // console.log(Object.keys(m.prev))
// // console.log(m.prev)
// // debug(m)
// console.log(fmt(m))