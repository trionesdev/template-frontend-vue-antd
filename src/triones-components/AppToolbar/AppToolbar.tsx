import {defineComponent} from "vue";
import useStyle from "./style.ts";
import useConfigInject from "ant-design-vue/es/config-provider/hooks/useConfigInject";
import  classNames from "classnames";

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
    setup(props: AppToolbarProps, {slots}) {
        const {prefixCls} = useConfigInject('app-toolbar', props)
        const [wrapSSR, hashId] = useStyle(prefixCls)
        const appToolbarCls = classNames(prefixCls.value,{
            [hashId.value]:true
        })
        return () => wrapSSR(<div class={[classNames(appToolbarCls)]}>{slots.default?.()}</div>)
    }
})