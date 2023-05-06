import { depthFirst } from '../lib/_crawl.js'

// [a, b, a1, b1]
const breadthFirst = root => {
  let queue = [root]
  while (queue.length > 0) {
    // get first
    let node = queue.shift()
    // add to list
    // list.push(node)
    console.log(node.c || "-", Object.keys(node.prev))
    // add kids to queue
    Object.keys(node.prev || {}).forEach(k => {
      queue.push(node.prev[k])
    })
  }
}

const debug = function (root) {
  breadthFirst(root)
}
export default debug