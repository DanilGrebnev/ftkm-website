import { Container } from '@mui/material'

import { LineContainerProps } from '../../../../types/LineContainer'

export const LineContainer = (props: LineContainerProps): JSX.Element => {
    const style = {
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        padding: '50px 0',
        margin: '40px auto',
        ...props.style,
    }

    return (
        <Container component="section" className={props.className} maxWidth="xl" sx={style}>
            {<>{props.children}</>}
        </Container>
    )
}
