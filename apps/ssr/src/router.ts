import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

const pages = import.meta.glob('./pages/*.vue');

const routes = Object.keys(pages).map(path => {
  const name = (path.match(/\.\/pages(.*)\.vue$/) as string[])[1].toLowerCase();
  return {
    path: name === '/home' ? '/home' : name,
    component: pages[path], // () => import('./pages/*.vue')
  };
});

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
