import { defineComponent, ref } from "vue";;

export default defineComponent({
    name: 'SubPage',
    setup(props) {
        return () => (
            <micro-app {...props} keep-alive />
        )
    },
})