import {Layout as InternalLayout} from "./Layout.tsx"
import {LayoutItem} from "./LayoutItem.tsx"

type CompoundedComponent = typeof InternalLayout & {
    Item: typeof LayoutItem
}

const Layout = InternalLayout as CompoundedComponent
export {
    Layout
}