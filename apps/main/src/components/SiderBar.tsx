import { defineComponent, ref } from "vue";
import { Menu, SubMenu, MenuItem } from 'ant-design-vue';
import type { MenuProps } from 'ant-design-vue';
import { dynamicRoutes as routes } from '../router'
import { useRouter } from 'vue-router';
import microApp from '@micro-zoe/micro-app';

export default defineComponent({
    name: 'SiderBar',
    setup() {
        const selectedKeys = ref<string[]>([]);
        const openKeys = ref<string[]>([]);
        const { push, currentRoute } = useRouter();
        
        const initRouter = () => {
            const { matched } = currentRoute.value;
            const temp = matched.map(match => match.name)
            selectedKeys.value = temp as string[]
            openKeys.value = temp as string[]
        }
        initRouter();
        
        const goto = (route: any) => {
            const { appName = '' } = route.meta;
            push(route)
            microApp.setData(appName, { path: route.path })
        }
        const handleClick: MenuProps['onClick'] = e => {
            const { keyPath = [] } = e;
            selectedKeys.value = keyPath as string[]
            openKeys.value = keyPath as string[]
        };

        const recursiveMenu = (routes: any[]) => {
            return routes.map(route => {
                if (!route.children) return <MenuItem key={route.name} onClick={() => goto(route)}>{route.meta.title}</MenuItem>
                return <SubMenu title={route.meta.title} key={route.name}> { recursiveMenu(route.children) }</SubMenu>
            })
        }
        return () => (
            <Menu mode="inline" selectedKeys={selectedKeys.value} openKeys={openKeys.value} onClick={ handleClick }>
                {
                    recursiveMenu(routes)
                }
            </Menu>
        )
    },
})