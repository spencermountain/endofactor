import { depthFirst } from '../_crawl.js'

const blue = str => '\x1b[34m' + str + '\x1b[0m'
const b = str => '\x1b[1m' + str + '\x1b[0m'
const dim = str => '\x1b[2m' + str + '\x1b[0m'
const i = str => '\x1b[3m' + str + '\x1b[0m'

const fmt = function (model) {
  let out = ''
  depthFirst(model, (node) => {
    // ┣ ┠
    out += dim('│ '.repeat(node.depth)) + b(blue(node.c)) + ' ' + i(dim(':' + node.val)) + '\n'//
    // console.log('┠ '.repeat(node.depth) + node.c)//+ '-' + node.val
  })
  return out
}
export default fmt