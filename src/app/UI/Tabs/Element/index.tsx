import React from 'react'

import s from './s.module.scss'

interface IElement {
    value: number
    elementValue: number
    children?: React.ReactNode
}

export const Element: React.FC<IElement> = ({
    value,
    elementValue,
    children,
}) => {
    const style =
        value === elementValue ? { display: 'block' } : { display: 'none' }

    return (
        <div
            className={s.element}
            style={style}
        >
            {children}
        </div>
    )
}
