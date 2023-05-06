import { read, write } from './crud/read-write.js'
import { pack, unpack } from './crud/pack-unpack.js'
import insert from './logic/insert.js'
import fmt from './logic/fmt.js'
import deduce from './logic/deduce.js'

const defaults = {
  max_length: 6
}

const add = function (pairs, model, opts) {
  opts = Object.assign({}, defaults, opts || {})
  model = model || read(opts)
  pairs.forEach(a => {
    let [w, tag] = a
    model = insert(w, tag, model)
  })
  model = deduce(model, opts)
  let out = pack(model, opts)
  let done = unpack(out, opts)
  // console.log(out)
  write(model)
  fmt(model)
}



const get = function (str, model) {

}


export { add, get, read, fmt, deduce, pack }