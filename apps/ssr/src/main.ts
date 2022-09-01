import { createSSRApp } from 'vue';
import { createRouter } from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import { RouteRecordNormalized } from 'vue-router';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  const pinia = createPinia();
  router.beforeResolve(async (to, from) => {
    const toMatchedComponents = getMatchedComponents(to.matched);
    const fromMatchedComponents = getMatchedComponents(from.matched);
    // 优化过滤
    let isSameCompoent = false;
    const components = toMatchedComponents.filter((compnent, index) => {
      return isSameCompoent || (isSameCompoent = fromMatchedComponents[index] !== compnent);
    });

    console.log('[components]', components, toMatchedComponents, fromMatchedComponents);

    // 需要执行async的组件
    components.length &&
      (await Promise.allSettled(
        components.map(component => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (component.asyncData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return component.asyncData({ pinia, route: to });
          }
        })
      ));
  });
  app.use(router);
  app.use(pinia);
  return { app, router, pinia };
}

function getMatchedComponents(list: RouteRecordNormalized[]) {
  return list.map(({ components }) => {
    return (components as any).default;
  });
}
