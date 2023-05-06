import { depthFirst } from '../lib/_crawl.js'




const tokenize = function (str) {
  let tokens = []
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
    tokens.push({ c, val, depth })
  })
  return tokens
}

const addParent = function (tokens) {
  let last = 0
  let parent = ''
  tokens.forEach((token, i) => {
    token.prev = token.prev || {}
    if (token.depth === last) {
      // same parent
      token.parent = parent
    } else if (token.depth > last) {
      // go down
      let back = tokens[i - 1]
      parent = back.c + (back.parent || '')
      token.parent = parent
    } else if (token.depth < last) {
      // go back up the tree
      let back = tokens[i - 1]
      let want = back.parent.substring(back.parent.length - token.depth)
      token.parent = want
    }
    last = token.depth
  })
  // sort by shallow-first
  tokens = tokens.sort((a, b) => {
    if (a.parent.length > b.parent.length) {
      return 1
    } else if (a.parent.length < b.parent.length) {
      return -1
    }
    return 0
  })
  return tokens
}

const getByparent = function (root, parent) {
  let chars = parent.split('').reverse()
  let node = root
  for (let i = 0; i < chars.length; i += 1) {
    if (!node.prev[chars[i]]) {
      return node
    }
    node = node.prev[chars[i]]
  }
  return node
}

const build = function (tokens) {
  let root = { c: '', prev: {}, depth: 0, parent: '' }
  tokens.forEach(token => {
    let p = getByparent(root, token.parent)
    p.prev[token.c] = token
  })
  return root
}

const unpack = function (str) {
  let tokens = tokenize(str)
  tokens = addParent(tokens)
  // console.log(tokens)
  let model = build(tokens)
  // clean it up
  depthFirst(model, (node) => {
    delete node.parent
  })
  // console.dir(model, { depth: 15 })
  return model
}
export default unpack