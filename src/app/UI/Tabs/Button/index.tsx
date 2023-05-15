import { TStyle } from '@interfaces/Style'
import React from 'react'

import s from './s.module.scss'

interface IButton<T = string> {
    value: number
    text: T
    currentValue: number
    onClick: any
    style?: TStyle
}

export const Button: React.FC<IButton> = ({
    value,
    text,
    currentValue,
    onClick,
    style,
}) => {
    const className = +value === +currentValue ? s.active : ' '

    return (
        <button
            style={style}
            onClick={onClick}
            className={s.button + ' ' + className}
            value={value}
        >
            {text}
        </button>
    )
}
