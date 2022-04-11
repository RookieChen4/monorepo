import { defineConfig } from 'rollup';
// 解决rollup.js无法识别CommonJS模块，
import commonjs from '@rollup/plugin-commonjs';
// resolve将我们编写的源码与依赖的第三方库进行合并
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import { name } from './package.json';

export default defineConfig([
  {
    input: 'src/index.ts',
    plugins: [
      typescript(),
      resolve(),
      babel({
        babelrc: false,
        babelHelpers: 'runtime',
        extensions: ['.ts', '.js'],
        exclude: ['node_modules/**', '../../node_modules/**'],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: ['> 1%', 'last 2 versions', 'ie 11'],
              },
            },
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: {
                version: 3,
              },
            },
          ],
        ],
      }),
      commonjs(),
    ],
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/index.cjs.js',
        format: 'commonjs',
      },
      {
        file: `dist/index.umd.js`,
        // 通用格式可以用于node和browser等多个场景
        format: 'umd',
        // 外部引入的模块需要显式告知使用的三方模块的命名，结合下面的external使用
        globals: {},
        // 注意如果是umd格式的bundle的话name属性是必须的，这时可以在script标签引入后window下会挂载该属性的变量来使用你的类库方法
        name,
      },
    ],
  },
]);
