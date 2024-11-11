import {defineComponent, StyleValue} from "vue";
import {useCssInJs} from "../hooks/useCssInJs.ts";
import {genLayoutItemStyle, genLayoutStyle} from "./style.ts";
import classNames from "classnames";

type LayoutItemProps = {
    class?: string,
    style?: StyleValue,
    auto?: boolean
}

export const LayoutItem = defineComponent({
    name: "LayoutItem",
    props: {
        class: {
            type: String,
            required: false,
            default: ''
        },
        style: {
            type: Object,
            required: false,
            default: () => ({})
        },
        auto: {
            type: Boolean,
            default: () => false
        }
    },
    setup(props: LayoutItemProps, {slots}) {
        const prefixCls = 'triones-ant-layout-item';
        const [wrapSSR, hashId] = useCssInJs({prefixCls: prefixCls, styleFun: genLayoutItemStyle})
        const rootCls = classNames(prefixCls, props.class, {
            [`${prefixCls}-auto`]: props.auto,
            [hashId]: true
        })
        return () => wrapSSR(<div class={rootCls} style={props.style}>{slots.default?.()}</div>)
    }
})