import React from 'react'

interface IColumnItem {
    title: string
    list: string[]
    className?: string
}

export const ColumnItem: React.FC<IColumnItem> = ({
    list,
    title,
    className,
}) => {
    return (
        <div className={className}>
            <h4>{title}</h4>
            <ul>
                {list.map(el => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        </div>
    )
}
