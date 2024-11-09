import {defineComponent, StyleValue} from "vue";

type LayoutItemProps = {
    class?: string,
    style?: StyleValue,
    auto?: boolean
}

export const LayoutItem = defineComponent({
    name: "LayoutItem",
    setup(props: LayoutItemProps, {slots}) {
        return () => <div class={props.class} style={props.style}>{slots.default?.()}</div>
    }
})