import { load } from '../lib/write.js'
import insert from './insert.js'
import deduce from './deduce.js'

const defaults = {
  max_length: 6
}

const add = function (pairs, model, opts) {
  opts = Object.assign({}, defaults, opts || {})
  model = model || load(opts.file)
  model.prev = model.prev || {}
  model.raw = model.raw || {}
  pairs.forEach(a => {
    let [w, tag] = a
    model = insert(w, tag, model)
  })
  model = deduce(model, opts)
  // fmt(model)
  return model
}


// get the value of the longest-suffix 
const get = function (str, model) {
  let chars = str.split('').reverse()
  let node = model
  let val = model.val || null
  for (let i = 0; i < chars.length; i += 1) {
    let c = chars[i]
    if (!node.prev[c]) {
      break
    }
    node = node.prev[c]
    if (node.val) {
      val = node.val
    }
  }
  return val
}

export { add, get }