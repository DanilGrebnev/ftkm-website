import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Container } from '@mui/material'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { useEffect } from 'react'

import s from './NewsBlog.module.scss'
import { ButtonContainer } from './components/ButtonContainer'
import { NewsContainer } from './components/NewsContainer'

const NewsBlog = () => {
    const dispatch = useAppDispatch()

    const { news } = useAppSelector(({ news }) => news)

    useEffect(() => {
        if (news.length) return

        dispatch(NewsServices.getNews({ skip: 0, limit: 1 }))
    }, [])

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
