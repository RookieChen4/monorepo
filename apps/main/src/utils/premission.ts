import router from '../router';
const whiteList = ['/login']
import { getToken } from './auth';
export default function premission() {
    router.beforeEach((to, from, next) => {
        const hasToken = getToken()
        if (hasToken) {
            if (to.path === '/login') {
                next({path: '/'})
            } else {
                next()
            }
        } else {
            if (whiteList.includes(to.path)) {
                next()
            } else {
                next(`/login?redirect=${to.path}`)
            }
        }
    })
}