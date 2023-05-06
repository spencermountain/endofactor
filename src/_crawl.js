// [a, a1, b, b1]
const depthFirst = (root, fn) => {
  let queue = [root]
  while (queue.length > 0) {
    // get first
    let node = queue.pop()
    // if (node.depth !== 0) {
    fn(node) //do something
    // }
    // add kids to queue
    if (node.prev) {
      Object.values(node.prev).forEach(child => {
        queue.push(child)
      })
    }
  }
}
export { depthFirst }