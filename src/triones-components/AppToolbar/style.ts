import {FullToken, genComponentStyleHook, GenerateStyle, mergeToken} from "ant-design-vue/es/theme/internal";
import {CSSInterpolation} from "ant-design-vue";

type AppToolbarToken = FullToken<any> & {
    alertIconSizeLG: number;
    alertPaddingHorizontal: number;
};

export const genAppToolbarStyle: GenerateStyle<AppToolbarToken> = (token: AppToolbarToken): CSSInterpolation => [];

export default genComponentStyleHook('Alert', token => {
    const {fontSizeHeading3} = token;

    const appToolbarToken = mergeToken<AppToolbarToken>(token, {
        alertIconSizeLG: fontSizeHeading3,
        alertPaddingHorizontal: 12, // Fixed value here.
    });

    return [genAppToolbarStyle(appToolbarToken)];
});