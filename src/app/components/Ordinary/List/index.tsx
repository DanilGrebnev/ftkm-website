import React from 'react'

import s from './s.module.scss'

interface IProps {
    title: string
    list: string[]
}

export const List: React.FC<IProps> = ({ title, list }) => (
    <div className={s.list}>
        <h3>{title}</h3>
        <ul>
            {list.map(el => (
                <li>{el}</li>
            ))}
        </ul>
    </div>
)
