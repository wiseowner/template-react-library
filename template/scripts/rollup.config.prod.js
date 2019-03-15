import filesize from 'rollup-plugin-filesize';
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';
import baseConfig from './rollup.config.base';
import { main, module, name, version, author } from '../package.json';

// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`;

// 支持输出 []
export default [
  // .js, .cjs.js, .esm.js
  {
    ...baseConfig,
    output: [
      // umd development version with sourcemap
      {
        file: `dist/index.js`,
        format: 'umd',
        name,
        banner,
        sourcemap: true
      },
      // cjs and esm version
      {
        file: main,
        format: 'cjs',
        banner
      },
      // cjs and esm version
      {
        file: module,
        format: 'es',
        banner
      },
    ],
    plugins: [
      ...baseConfig.plugins,
      // 排除 peer 依赖，防止 react 打包进 dist
      external(),
      filesize()
    ]
  },
];
