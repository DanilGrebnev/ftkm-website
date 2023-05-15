import React from 'react'

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

    return <div style={style}>{children}</div>
}
