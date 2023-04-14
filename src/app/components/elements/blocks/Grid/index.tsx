import { setPropsStyle } from '@utils/SetPropsStyleHelper'
import React from 'react'

import { IGridProps } from '../../../../types/Grid'
import styleSCSS from './style.module.scss'

export const Grid = React.memo((props: IGridProps) => {
    const { children, style, className } = props

    return (
        <section
            className={`Grid ${className} ${styleSCSS.Grid}`}
            style={{ ...style, ...setPropsStyle(props) }}
        >
            <>{children}</>
        </section>
    )
})
