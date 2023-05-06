import { depthFirst } from '../lib/_crawl.js'


const getByPath = function (root, path) {
  let chars = path.split('')
  let node = root
  for (let i = 0; i < chars.length; i += 1) {
    if (!node.prev[chars[i]]) {
      return node
    }
    node = node.prev[chars[i]]
  }
  return node
}

const unpack = function (str) {
  let root = { c: '', prev: {}, depth: 0, path: '' }
  let node = root
  let depth = 0
  str.split(/([\[,\]])/).forEach(ch => {
    if (!ch) {
      return
    }
    if (ch === '[') {
      depth += 1
      return
    } else if (ch === ']') {
      depth -= 1
      return
    } else if (ch === ',') {
      return
    }
    let [c, val] = ch.split(/([A-Z]+)/)
    // console.log(' '.repeat(depth), c)
    let n = { c, prev: {}, depth, path: c + node.path, val }
    if (depth > node.depth) {
      // go down a level
      node.prev[c] = n
      node = n
    } else if (depth === node.depth) {
      node.prev[c] = n
    } else {
      // go backward a level
      let chars = node.path.split('').reverse()
      n.path = chars.slice(0, depth - 1).join('')
      node = getByPath(root, n.path)
      node.prev[c] = n
      node = n
    }
  })
  // clean it up
  depthFirst(root, (node) => {
    delete node.path
  })
  return root
}
export default unpack