const MAX = 5

const insert = function (str, tag, model, opts) {
  str = str.trim().toLowerCase()
  tag = tag.trim().toUpperCase()
  let chars = str.split('').reverse().slice(0, MAX)
  let node = model
  // allow '' to tag the root
  if (tag && !str) {
    model.raw[tag] = model.raw[tag] || 0
    model.raw[tag] += 1
  }
  chars.forEach((c, i) => {
    node.prev[c] = node.prev[c] || { raw: {}, prev: {}, c, depth: i + 1, }
    node = node.prev[c]
    node.raw[tag] = node.raw[tag] || 0
    node.raw[tag] += 1
  })
  return model
}
export default insert