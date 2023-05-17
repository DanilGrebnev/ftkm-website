import { Container } from '@mui/material'

import { LineContainerProps } from '../../../interface/LineContainer'
import s from './style.module.scss'

export const LineContainer = (props: LineContainerProps): JSX.Element => {
    const style = {
        ...props.style,
    }

    return (
        <section
            className={props.className + ' ' + s.LineContainer}
            style={style}
        >
            <span className={s.lineTop}></span>
            {<>{props.children}</>}
            <span className={s.lineBot}></span>
        </section>
    )
}
