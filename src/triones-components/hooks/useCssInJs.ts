import {computed} from "vue";
import {useToken} from "ant-design-vue/es/theme/internal";
import {CSSInterpolation, useStyleRegister} from "ant-design-vue";
import {VueNode} from "ant-design-vue/es/_util/type";

type CssInJsProps = {
    prefixCls?: string;
    styleFun?: (prefix: string, token?: any) => CSSInterpolation
}

export const useCssInJs = (params?: CssInJsProps): [wrap: (node: VueNode) => VueNode, hashId: string ] => {
    const [theme, token, hashId] = useToken();

    const componentInfo = computed(() => {
        return {
            theme: theme,
            token: token.value,
            hashId: hashId.value,
            path: [`${params?.prefixCls}`]
        };
    });
    return [
        useStyleRegister(componentInfo, () => {
            return params?.styleFun!(params?.prefixCls!, token.value)
        }),
        hashId.value
    ]
}