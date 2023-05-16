import { Backdrop } from '@UI/BackDrop'
import { NewsCardSkeleton } from '@UI/NewsCardSekelton'
import { useFetchNews } from '@hooks/useFetchNews'
import { onErrorLoadImage } from '@lib/onErrorLoadImage'
import { Container } from '@mui/material'
import { useEffect } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

import s from './style.module.scss'

const OneNews: React.FC = () => {
    const { _id } = useParams()

    const { error, loading, news, fetchNews } = useFetchNews()

    useEffect(() => {
        if (!_id) return

        fetchNews(_id)
    }, [_id])

    const element = (
        <>
            {news?.imgName && (
                <img
                    src={`http://127.0.0.1:3001/${news?.imgName}`}
                    onError={onErrorLoadImage}
                    loading="lazy"
                    alt={news?.title}
                />
            )}
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
            {/* {loading ? <Backdrop open={true} /> : element} */}
            {loading ? <NewsCardSkeleton /> : element}
        </Container>
    )
}

export default OneNews
