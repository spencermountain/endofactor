import fs from 'fs'
import path from 'path'
import stringify from 'json-stringify-pretty-compact'
let dir = process.cwd()

const load = function (file) {
  file = file || path.join(dir, './_model.json')
  if (fs.existsSync(file)) {
    let json = JSON.parse(fs.readFileSync(file).toString())
    return json || {}
  }
  return { c: '', prev: {}, depth: 0, raw: {} }
}

const save = function (file, model) {
  file = file || path.join(dir, './_model.json')
  fs.writeFileSync(file, stringify(model, { maxLength: 50 }))
}

export { load, save }