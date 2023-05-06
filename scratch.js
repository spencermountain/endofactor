import { add, get, read } from './src/index.js'
import sh from 'shelljs'


sh.exec('rm ./_model.json')

let pairs = [
  ['swim', 'N'],
  ['swam', 'V'],
  ['mouse', 'N'],
  ['house', 'N'],
  ['douse', 'V'],
]
add(pairs)
