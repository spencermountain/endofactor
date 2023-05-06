const debug = function (str) {
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
    console.log('│ '.repeat(depth) + c)
  })
}
export default debug