export interface IGridProps extends IGridPropsStyle {
    children?: JSX.Element[] | JSX.Element

    style?: { [styleName: string]: string }

    onClick?: (e: React.MouseEvent<HTMLElement>, ...params: any) => void

    className?: string
}

export interface IGridPropsStyle<S = string> {
    gridTemplateColumns?: S
    gridTemplateRows?: S
    columnGap?: S
    rowGap?: S
    grid?: S
    gap?: S
}
