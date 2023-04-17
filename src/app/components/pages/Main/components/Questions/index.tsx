import { LineContainer } from '@components/containers/LineContainer'
import { Container } from '@mui/material'
import { Button } from '@mui/material'

import style from './style.module.scss'

export const Jobs = () => {
    return (
        <Container component="section" className={`Questions ${style.Questions}`} maxWidth="lg">
            <LineContainer className={`Question__containers ${style.LineContainer}`}>
                <Button className={style.button} variant="outlined">
                    <a href="https://volgograd.hh.ru/vacancies/metallurg">
                        Узнай вакансии для твоей будущей специальности
                    </a>
                </Button>
            </LineContainer>
        </Container>
    )
}
