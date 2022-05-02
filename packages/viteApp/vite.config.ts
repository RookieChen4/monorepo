import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
const antVuePath = path.resolve(__dirname, '../../packages/antVue');
console.log(antVuePath);

export default defineConfig({
  resolve: {
    alias: [{ find: 'antVuePath', replacement: antVuePath }],
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
});
