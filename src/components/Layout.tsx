import { FC, ReactNode } from "react"

type ColumnComponent = FC<{
    children: ReactNode
}>

interface ContentProps {
    children: (Left: ColumnComponent, Right: ColumnComponent) => ReactNode
}

const Left: ColumnComponent = (props) => {
    return <div className="leftColumn">{props.children}</div>
}

const Right: ColumnComponent = (props) => {
    return <div className="rightColumn">{props.children}</div>
}

export const Layout: FC<ContentProps> = (props) => {
    return <main className="mainContent">{props.children(Left, Right)}</main>
}
