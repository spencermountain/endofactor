import { load } from './load-save.js'
import insert from '../logic/insert.js'
import deduce from '../logic/deduce.js'

const defaults = {
  max_length: 6
}

const add = function (pairs, model, opts) {
  opts = Object.assign({}, defaults, opts || {})
  model = model || load(opts.file)
  pairs.forEach(a => {
    let [w, tag] = a
    model = insert(w, tag, model)
  })
  // model = deduce(model, opts)
  // fmt(model)


  return model
}


// get the value of the longest-suffix 
const get = function (str, model) {
  let chars = str.split('').reverse()
  let node = model
  for (let i = 0; i < chars.length; i += 1) {
    let c = chars[i]
    if (!node.prev[c]) {
      return node.val
    }
    node = node.prev[c]
  }
  return node.val
}

export { add, get }