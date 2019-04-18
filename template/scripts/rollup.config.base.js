import alias from 'rollup-plugin-alias';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  plugins: [
    alias({
      resolve: ['.js']
    }),
    postcss({
      extract: isProd,
      extensions: ['less', 'css'],
      use: [
        ['less', {
          javascriptEnabled: true
        }]
      ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    eslint({
      include: ['src/**/*.js']
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
  ]
}
