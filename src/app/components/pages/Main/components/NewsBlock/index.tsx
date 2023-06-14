import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

import { Accordion } from './Accordion'
import { NewsList } from './NewsList'
import s from './style.module.scss'

export const NewsBlock = () => {
    return (
        <Container
            className={s.wrapper}
            id="News-Block"
            maxWidth="xl"
        >
            <div className={s.newsBlock}>
                <NewsList />
            </div>

            <Accordion />

            <div className={s.archiveBtn}>
                <Link to="news">
                    <Button variant="outlined">Архив новостей</Button>
                </Link>
            </div>
        </Container>
    )
}
