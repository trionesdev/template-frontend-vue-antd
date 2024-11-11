import {CSSInterpolation} from "ant-design-vue";
import {GlobalToken} from "ant-design-vue/es/theme";

export const genLayoutStyle = (prefixCls:string,token:GlobalToken):CSSInterpolation=>{
    return {
        [`.${prefixCls}`]: {
            minWidth: 0,
            minHeight: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            boxSizing: 'border-box',
            [`&-vertical`]: {
                flexDirection: 'column',
                // width:0,
                // flex:'1 1 auto'
                [`>.${prefixCls}-item-auto`]: {
                    minWidth: 0,
                    minHeight: 0,
                },
            },
            [`&-horizontal`]: {
                flexDirection: 'row',
                // height:0,
                // flex:'1 1 auto'
                [`>.${prefixCls}-item-auto`]: {
                    minWidth: 0,
                    minHeight: 0,
                },
            },
        },
    }
}

export const genLayoutItemStyle=(prefixCls:string,token:GlobalToken):CSSInterpolation=>{
    return {
        [`.${prefixCls}`]: {
            flexShrink: 0,
            [`&-auto`]: {
                boxSizing: 'border-box',
                flex: '1 auto',
                minWidth: 0,
                minHeight: 0,
            },
        },
    };
}