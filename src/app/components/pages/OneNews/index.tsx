import { Backdrop } from '@UI/BackDrop'
import { useFetchNews } from '@hooks/useFetchNews'
import { Container } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import s from './style.module.scss'

export const OneNews = () => {
    const { _id } = useParams()

    const { error, loading, news, fetchNews } = useFetchNews()

    useEffect(() => {
        if (!_id) return
        fetchNews(_id)
    }, [_id])

    const element = (
        <>
            <img src={news?.imgUrl} alt={news?.title} />
            <h1>{news?.title}</h1>
            <div>{news?.createdDate}</div>
            <p>{news?.body}</p>
        </>
    )

    return (
        <Container
            component="section"
            className={s.news_container}
            maxWidth="xl"
            id="One-News-block"
        >
            {loading ? <Backdrop open={true} /> : element}
        </Container>
    )
}
