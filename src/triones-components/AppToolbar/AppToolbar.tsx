import {defineComponent} from "vue";

type AppToolbarProps = {
    title?: string
}
export const AppToolbar = defineComponent({
    name: "AppToolbar",
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(_props:AppToolbarProps,{slots}) {
        return () => <div>{slots.default?.()}</div>
    }
})