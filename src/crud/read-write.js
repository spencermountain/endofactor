import fs from 'fs'
import path from 'path'
import stringify from "json-stringify-pretty-compact";
let dir = process.cwd()


const read = function (opts = {}) {
  let file = opts.file || path.join(dir, './_model.json')
  if (fs.existsSync(file)) {
    let json = JSON.parse(fs.readFileSync(file).toString())
    return json || {}
  }
  return { prev: {}, depth: 0, c: '', val: {} }
}

const write = function (model, opts = {}) {
  let file = opts.file || path.join(dir, './_model.json')
  // fs.writeFileSync(file, JSON.stringify(model, null, 2))
  fs.writeFileSync(file, stringify(model, { maxLength: 50 }))
}

export { read, write }