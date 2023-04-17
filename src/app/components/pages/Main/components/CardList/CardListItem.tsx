
import LogoVstu from '@images/Logo_vstu.png'
import React from 'react'

type TCardItem = { a: string; p: string; span: string | undefined }

export const CardItem = React.memo(({ a, p, span }: TCardItem) => {
    return (
        <a href={a}>
            
            <img alt="vstu-logo" src={LogoVstu} />
            <p>
                {p} {span ? <span>{span}</span> : ''}
            </p>
        </a>
    )
})
