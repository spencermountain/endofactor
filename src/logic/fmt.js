import { depthFirst } from '../_crawl.js'

const blue = str => '\x1b[34m' + str + '\x1b[0m'
const b = str => '\x1b[1m' + str + '\x1b[0m'
const dim = str => '\x1b[2m' + str + '\x1b[0m'
const i = str => '\x1b[3m' + str + '\x1b[0m'

const fmt = function (model) {
  let out = ''
  depthFirst(model, (node) => {
    let key = node.val ? node.c || "." : ''
    let val = node.val ? ':' + node.val : ''
    out += dim('│ '.repeat(node.depth)) + b(blue(key)) + ' ' + i(dim(val)) + '\n'//
  })
  return out
}
export default fmt