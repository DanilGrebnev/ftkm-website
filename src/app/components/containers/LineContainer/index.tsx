import { Container } from '@mui/material'

import { LineContainerProps } from '../../../interface/LineContainer'
import s from './style.module.scss'

export const LineContainer = (props: LineContainerProps): JSX.Element => {
    const style = {
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        // padding: '50px 0',
        // margin: '40px auto',
        ...props.style,
    }

    return (
        <section
            className={props.className + ' ' + s.LineContainer}
            style={style}
        >
            {<>{props.children}</>}
        </section>
    )
}
