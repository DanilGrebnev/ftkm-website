import { LineContainer } from '@components/containers/LineContainer'
import { Container } from '@mui/material'

import { TStyle } from '../../types/Style'
import s from './style.module.scss'

interface IButtonAndContainer<T = string> {
    className: T
    buttonClassName?: T
    href: T
    text: T
    textUpperCase?: boolean
    style?: TStyle
}

export const ButtonAndContainer = ({
    className,
    href,
    text,
    textUpperCase,
    buttonClassName,
}: IButtonAndContainer) => {
    const textTransform = !textUpperCase ? 'uppercase' : 'none'

    return (
        <Container
            component="section"
            className={`${className} ${s.ButtonAndContainer}`}
            maxWidth="lg"
        >
            <LineContainer className={s.LineContainer}>
                <button className={`${buttonClassName} ${s.button}`}>
                    <a style={{ textTransform }} href={href}>
                        {text}
                    </a>
                </button>
            </LineContainer>
        </Container>
    )
}
