import React from 'react'

import s from './s.module.scss'

interface IButton<T = string> {
    tab: number
    text: T
    currentTab: number
    onClick: any
    style?: React.CSSProperties
}

export const Button: React.FC<IButton> = ({
    tab,
    text,
    currentTab,
    onClick,
    style,
}) => {
    const className = +tab === +currentTab ? s.active : ''

    return (
        <button
            style={style}
            onClick={onClick}
            className={s.button + ' ' + className}
            value={tab}
        >
            {text}
        </button>
    )
}
