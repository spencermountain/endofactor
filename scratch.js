import { add, get, load, save, pack, unpack, fmt, deduce, test } from './src/index.js'
import sh from 'shelljs'


// sh.exec('rm ./_model.json')

let pairs = [
  ['swim', 'N'],
  ['swam', 'V'],
  ['mouse', 'N'],
  ['house', 'N'],
  ['douse', 'V'],
  // ['', 'R'],
]
console.log('\ninput:')
console.log(pairs)

console.log('\nmodel:')
let model = add(pairs)
console.log(fmt(model))

test(pairs, model)
console.log(get('mouse', model))
console.log(get('slam', model))
console.log(get('slur', model))
console.log(get('clouse', model))

console.log('\npacked:')
console.log(pack(model))