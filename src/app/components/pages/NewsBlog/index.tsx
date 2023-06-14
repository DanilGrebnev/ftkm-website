import { Container } from '@mui/material'

import s from './NewsBlog.module.scss'
import { ButtonContainer } from './components/ButtonContainer'
import { NewsContainer } from './components/NewsContainer'

const NewsBlog = () => {
    return (
        <Container
            maxWidth="xl"
            id="News-Block"
            className={s.NewsContainer}
        >
            <NewsContainer />
            <ButtonContainer />
        </Container>
    )
}

export default NewsBlog
