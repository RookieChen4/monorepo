import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import premission from './utils/premission'
import microApp from '@micro-zoe/micro-app'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Antd);
app.use(router)
premission()
app.mount('#app')
microApp.start({
  // preFetchApps: [
  //   { name: 'react', url: 'http://localhost:9001/' },
  //   { name: 'vue', url: 'http://localhost:9002/' }
  // ],
  lifeCycles: {
    created (e) {
      console.log('created', e)
    },
    beforemount (e) {
      console.log('beforemount')
    },
    mounted (e) {
      console.log('mounted')
    },
    unmount (e) {
      console.log('unmount')
    },
    error (e) {
      console.log('error')
    }
  }
})

