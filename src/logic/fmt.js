import { depthFirst } from '../_crawl.js'

const fmt = function (model) {
  depthFirst(model, (node) => {
    // ┣ ┠
    console.log('│ '.repeat(node.depth) + node.c)//+ '-' + node.val
    // console.log('┠ '.repeat(node.depth) + node.c)//+ '-' + node.val
  })
}
export default fmt