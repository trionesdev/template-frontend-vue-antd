import {defineComponent, StyleValue} from "vue";

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
            required: true,
            validator: (value: string) => ['horizontal', 'vertical'].includes(value),
            default: 'horizontal'
        }
    },
    setup(props: LayoutProps, {slots}) {
        return () => <div class={props.class} style={props.style}>{slots.default?.()}</div>
    }
})

// const Layout:FunctionalComponent<LayoutProps> = (props, {slots}) => <div class={props.class} style={props.style}>{slots.default?.()}</div>

// export {Layout}