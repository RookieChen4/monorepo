import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['utils/index.ts', 'vueHooks/index.ts'],
  clean: true,
  dts: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  external: ['vue'],
});
