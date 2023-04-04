import React from 'react'

import style from './style.module.scss'

interface IGridProps {
    style?: {
        [stylName: string]: string
    }
    children?: JSX.Element[] | JSX.Element

    onClick?: (e: React.MouseEvent<HTMLElement>, ...params: any) => void

    className?: string
}

export const Grid = React.memo((props: IGridProps) => {
    return (
        <div {...props}>
            <>{props.children}</>
        </div>
    )
})
