import {defineComponent, StyleValue} from "vue";
import {useCssInJs} from "../hooks/useCssInJs.ts";
import classNames from "classnames";
import {genLayoutStyle} from "./style.ts";

export type LayoutProps = {
    class?: string,
    style?: StyleValue,
    direction?: 'horizontal' | 'vertical'
}

export const Layout = defineComponent({
    name: 'Layout',
    props: {
        class: {
            type: String,
            required: true,
            default: ''
        },
        style: {
            type: Object,
            required: false,
            default: () => ({})
        },
        direction: {
            type: String,
            required: false,
            validator: (value: string) => ['horizontal', 'vertical'].includes(value),
            default: 'horizontal'
        }
    },
    setup(props: LayoutProps, {slots}) {
        const prefixCls = 'triones-ant-layout';
        const [wrapSSR, hashId] = useCssInJs({prefixCls: prefixCls, styleFun: genLayoutStyle})
        const rootCls = classNames(prefixCls, props.class, `${prefixCls}-${props.direction}`, {
            [hashId]: true
        })
        return () => wrapSSR(<div class={[classNames(rootCls)]} style={props.style}>{slots.default?.()}</div>)
    }
})
