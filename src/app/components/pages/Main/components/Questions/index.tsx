import { LineContainer } from '@components/containers/LineContainer'
import { Container } from '@mui/material'
import { Button } from '@mui/material'

import s from './style.module.scss'

export const Jobs = () => {
    return (
        <Container component="section" className={`Questions ${s.Questions}`} maxWidth="lg">
            <LineContainer className={`Question__containers ${s.LineContainer}`}>
                <Button className={s.button} variant="outlined">
                    <a href="https://volgograd.hh.ru/vacancies/metallurg">
                        Узнай вакансии для твоей будущей специальности
                    </a>
                </Button>
            </LineContainer>
        </Container>
    )
}
