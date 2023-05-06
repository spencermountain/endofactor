import { depthFirst } from '../_crawl.js'

const pack = function (model) {
  let txt = ''
  let last = 0
  depthFirst(model, (node) => {
    if (node.depth > last) {
      let diff = node.depth - last
      txt += '['.repeat(diff)
    } else if (node.depth === last) {
      txt += ','
    } else {
      let diff = last - node.depth
      txt += ']'.repeat(diff)
    }
    last = node.depth
    txt += `${node.c}${node.val}`
  })
  txt += ']'.repeat(last)
  return txt
}

const getByPath = function (root, path) {
  let chars = path.split('')
  let node = root
  for (let i = 0; i < chars.length; i += 1) {
    node = node.prev[chars[i]]
  }
  return node
}

const unpack = function (str) {
  let root = { c: '', prev: {}, depth: 0, path: '' }
  let node = root
  let depth = 0
  str.split(/([\[,\]])/).forEach(ch => {
    if (ch === '[') {
      depth += 1
      return
    } else if (ch === ']') {
      depth -= 1
      return
    } else if (ch === ',') {
      return
    }
    let [, c, val] = ch.split(/^([a-z])/)
    if (!c) {
      return
    }
    let n = { c, prev: {}, depth, path: c + node.path, val }
    if (depth > node.depth) {
      // go down a level
      node.prev[c] = n
      node = n
    } else if (depth === node.depth) {
      node.prev[c] = n
    } else {
      // go backward a level
      let chars = n.path.split('').reverse()
      n.path = chars.slice(0, depth).join('')
      console.log('back to ', n.path, depth)
      node = getByPath(root, n.path)
      node.prev[c] = n
    }
  })
  return root
}
export { pack, unpack }