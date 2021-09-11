const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const ts = require('@rollup/plugin-typescript')
const json = require('@rollup/plugin-json')
const path = require('path')
const { terser } = require('rollup-plugin-terser')

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true
    }),
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts']
    }),
    ts({
      tsconfig: 'tsconfig.json',
      include: ['src/**/*.ts'],
      exclude: ['node_modules'],
      declaration: true,
      declarationDir: path.resolve(__dirname, 'dist/')
    }),
    commonjs({ extensions: ['.js', '.ts'], ignoreDynamicRequires: true }),
    json(),
    terser()
  ]
}
