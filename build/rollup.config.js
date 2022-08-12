import { name } from '../package.json'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import { nodeResolve } from '@rollup/plugin-node-resolve';
const file = type => `dist/${name}.${type}.js`
export { name,file }
const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    'node_modules'
  ]
}
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    typescript({ tsconfigOverride: overrides }),
    vue(),
    scss(),
    nodeResolve()
  ],
  external: [
    'vue','lodash-es'
  ]
}