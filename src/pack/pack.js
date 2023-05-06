import { depthFirst } from '../lib/_crawl.js'

const pack = function (model) {
  let txt = ''
  let last = 0
  depthFirst(model, (node) => {
    if (!node.c && node.depth === 0) {
      return
    }
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
    txt += `${node.c || ''}${node.val || ''}`
  })
  // txt += ']'.repeat(last)
  return txt
}
export default pack