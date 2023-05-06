import { depthFirst } from '../_crawl.js'
const MIN_CUTOFF = 10 //smallest percentage to allow

const percent = (part, total) => {
  let num = (part / total) * 100;
  num = Math.round(num * 10) / 10;
  return num;
};

// take raw counts, and conclude a Value for the node
const deduce = function (model, opts = {}) {
  depthFirst(model, (node) => {
    let sum = 0
    let raw = node.raw || {}
    let keys = Object.keys(raw)
    keys.forEach(k => {
      sum += raw[k]
    })
    let results = []
    keys.forEach(k => {
      results.push({ c: k, percent: percent(raw[k], sum) })
    })
    results = results.filter(o => o.percent > MIN_CUTOFF)
    results = results.sort((a, b) => {
      if (a.percent > b.percent) {
        return -1
      } else if (a.percent < b.percent) {
        return 1
      }
      return 0
    })
    let res = results.reduce((str, o) => {
      return str + o.c
    }, '')
    node.val = res
  })
  return model
}
export default deduce