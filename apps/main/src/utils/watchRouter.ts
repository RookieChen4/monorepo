import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';

type Meta = {
    title: String;
    icon: String;
    appName?: String;
    url?: String;
    baseroute?: String;
}
export default function watchRouter() {
    const router = useRouter();
    const { currentRoute } = router;
    const routeMeta = ref<Meta>({
        title: '',
        icon: ''
    });
    watch(currentRoute, (val) => {
        const { meta } = val;
        const { url: newUrl = '' } = meta;
        const { url = '' } = routeMeta.value;
        if(!newUrl || url === newUrl) return;
        routeMeta.value = meta as Meta;
    }, {immediate: true})

    return {
        currentRoute,
        routeMeta
    }
}