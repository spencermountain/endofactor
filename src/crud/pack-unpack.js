import { depthFirst } from '../_crawl.js'

const pack = function (model) {
  let txt = ''
  let last = 0
  depthFirst(model, (node) => {
    if (node.depth === last) {
      txt += '¦'
    } else {
      txt += '|'
      last = node.depth
    }
    txt += `${node.c}${node.val}`
  })
  console.log(txt)
  return txt
}


const unpack = function (str) {
  // tokenize input
  let tokens = []
  let last = null
  str.split(/([|¦])/).forEach(ch => {
    if (ch === '|') {
      tokens.push({ ch: last, down: true })
    } else if (ch === '¦') {
      tokens.push({ ch: last, down: false })
    } else {
      last = ch
    }
  })

  let root = { prev: {} }
  let node = root
  let depth = 0
  tokens.forEach(t => {
    let [, c, val] = t.ch.split(/^([a-z])/)
    if (!c) {
      return
    }
    let n = { c, val, prev: {}, depth, }
    console.log(n, t.down)
    if (!t.down) {
      node.prev[c] = n
    } else {
      node = n
    }
  })
  console.log(root)
}
export { pack, unpack }