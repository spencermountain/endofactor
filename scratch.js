import { add, get, load, save, pack, unpack, fmt, deduce, test } from './src/index.js'
import sh from 'shelljs'


// sh.exec('rm ./_model.json')

let pairs = [
  ['swim', 'N'],
  ['swam', 'V'],
  ['mouse', 'N'],
  ['house', 'N'],
  ['douse', 'V'],
]

let model = add(pairs)
model = deduce(model)
console.log(fmt(model))

console.log(get('mouse', model))
test(pairs, model)
console.log(get('slam', model))
console.log(get('clouse', model))
