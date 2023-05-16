import React from 'react'

import s from './s.module.scss'

interface IProps<T = string> {
    leftText: T
    rightText: T
}

export const TextContent: React.FC<IProps> = ({ leftText, rightText }) => (
    <div className={s.TextContent}>
        <strong>{leftText}:</strong>
        {rightText}
    </div>
)
