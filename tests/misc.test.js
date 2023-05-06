import { add, get, pack, unpack, } from '../src/index.js'
import test from 'tape'

test('basic', function (t) {
  let pairs = [
    ['swim', 'N'],
    ['swam', 'V'],
    ['mouse', 'N'],
    ['house', 'N'],
    ['douse', 'V'],
  ]
  let model = add(pairs, {})
  model = unpack(pack(model))
  pairs.forEach(a => {
    let [w, val] = a
    let res = get(w, model)
    t.equal(res, val, w)
  })
  t.equal(get('slam', model), 'V')
  t.equal(get('slur', model), null)
  t.equal(get('clouse', model), 'NV')

  t.end()
})

test('fallback', function (t) {
  let pairs = [
    ['meet', 'V'],
    ['meat', 'N'],
    ['treat', 'N'],
    ['treat', 'V'],
    ['salt', 'N'],
    ['', 'R'],
  ]
  let model = add(pairs, {})
  // model = unpack(pack(model))
  t.equal(get('meet', model), 'V')
  t.equal(get('meat', model), 'N')
  t.equal(get('bat', model), 'NV')
  t.equal(get('toast', model), 'NV')
  t.equal(get('slur', model), 'R')
  t.equal(get('spy', model), 'R')

  t.end()
})