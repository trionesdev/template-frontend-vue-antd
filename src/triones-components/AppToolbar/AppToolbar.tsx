import {defineComponent} from "vue";
import {genAppToolbarStyle} from "./style.ts";
import classNames from "classnames";
import {useCssInJs} from "../hooks/useCssInJs.ts";
import {Avatar, AvatarProps, Menu, MenuProps, Space} from "ant-design-vue";
import _ from "lodash"

type AppToolbarProps = {
    avatar?: AvatarProps
    navItems?: MenuProps['items']
    selectedKeys?: string[];
}
export const AppToolbar = defineComponent({
    name: "AppToolbar",
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
        avatar: {
            type: Object,
            required: false
        },
        navItems: {
            type: Array,
            required: false
        },
        selectedKeys: {
            type: Array<string>,
            required: false
        }
    },
    setup(props: AppToolbarProps, {slots}) {
        const prefixCls = "app-toolbar";
        const [wrapSSR, hashId] = useCssInJs({prefixCls: prefixCls, styleFun: genAppToolbarStyle})
        const appToolbarCls = classNames(prefixCls, {
            [hashId]: true
        })
        return () => wrapSSR(<div class={[classNames(appToolbarCls)]}>
                <div class={classNames(`${prefixCls}-heading`, hashId, props.class)}>
                    <div class={classNames(`${prefixCls}-heading-left`, hashId)}>
                        <Space>
                            {props.avatar && <Avatar {...props.avatar} />}
                            <div class={classNames(`${prefixCls}-heading-left-title`, hashId)}>
                                {slots.title?.()}
                            </div>
                        </Space>
                    </div>
                    {!_.isEmpty(props.navItems) && (
                        <Menu
                            mode="horizontal"
                            items={props.navItems}
                            selectedKeys={props.selectedKeys}
                        />
                    )}
                    <div class={classNames(`${prefixCls}-heading-right`, hashId)}>
                        <Space>{slots.extra?.()}</Space>
                    </div>
                </div>
            </div>
        )
    }
})