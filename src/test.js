import { get } from './crud/add-get.js'

const test = function (pairs, model) {
  pairs.forEach(a => {
    let [w, val] = a
    let res = get(w, model)
    if (res === val) {
      console.log(`✅ ${w} : ${val}`)
    } else {
      console.log(`❌ ${w} : ${res}`)
    }
  })
}
export default test