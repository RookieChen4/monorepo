import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-ts';
import { babel } from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { name } from './package.json';

export default defineConfig([
  {
    input: 'vanilla/index.ts',
    plugins: [typescript(), resolve(), babel(), commonjs()],
    output: [
      {
        file: 'dist/vanilla/index.esm.js',
        format: 'esm',
      },
      {
        file: `dist/vanilla/index.umd.js`,
        format: 'umd',
        name,
      },
    ],
  },
  {
    input: 'vueui/index.ts',
    external: ['vue'],
    plugins: [vue(), typescript(), resolve(), babel(), commonjs(), postcss({})],
    output: [
      {
        file: 'dist/vueui/index.esm.js',
        format: 'esm',
      },
      {
        file: `dist/vueui/index.umd.js`,
        format: 'umd',
        globals: {
          vue: 'vue', // 指明 global.vue 即是外部依赖 vue
        },
        name,
      },
    ],
  },
]);
