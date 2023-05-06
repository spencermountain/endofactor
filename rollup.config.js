import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const opts = { keep_classnames: true, module: true }

export default [
  // === Three ==
  {
    input: 'src/three.js',
    output: [{ file: 'builds/endofactor.cjs', format: 'umd', name: 'nlp' }],
    plugins: [nodeResolve(), terser(opts)],
  },
  {
    input: 'src/three.js',
    output: [{ file: 'builds/three/endofactor.mjs', format: 'esm' }],
    plugins: [nodeResolve(), terser(opts)],
  },

]
