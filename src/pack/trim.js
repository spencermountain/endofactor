import { depthFirst, breadthFirst } from '../lib/_crawl.js'

// remove any redundant long suffixes
const trim = function (model) {
  let last = {}
  depthFirst(model, (node) => {
    let tmp = Object.assign({}, node)
    if (node.val === last.val && node.depth > last.depth) {
      node.val = null
    }
    last = tmp
  })
  return model
}
export default trim