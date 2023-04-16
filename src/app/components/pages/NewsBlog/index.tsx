import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { Grid } from '@components/containers/Grid'
import { SearchFilter } from '@components/Smart/SearchFilter'
import { Container } from '@mui/material'
import { memo, useEffect, useState } from 'react'

import { NewsCardSkeleton } from '../../../UI/NewsCardSekelton'
import { INewsCardItem } from '../../../types/NewsCardItem'
import style from './NewsBlog.module.scss'

const NewsBlog = memo(() => {
    const viewsOptions = {
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    }

    const [loading, setLoading] = useState(true)

    const [posts, setPosts] = useState<INewsCardItem[]>()

    const fetchPosts = async () => {
        let resPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        let resAlbums = await fetch('https://jsonplaceholder.typicode.com/photos')

        let posts = await resPosts.json()
        let img = await resAlbums.json()

        type IPost = { id: number; img?: string }
        type IImgItem = { id: number; url?: string }

        posts.forEach((post: IPost) => {
            img.forEach((imgItem: IImgItem) => {
                if (imgItem.id === post.id) {
                    post.img = imgItem.url
                }
            })
        })

        setPosts(posts)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <Container maxWidth="xl">
            <SearchFilter />
            <Grid style={viewsOptions} className={style['news-blog']}>
                {loading
                    ? [...Array(10)].map((_, i) => <NewsCardSkeleton key={i} loading={true} />)
                    : posts?.map(({ body, img, title }) => {
                          return <NewsCardItem body={body} img={img} title={title} />
                      })}
            </Grid>
        </Container>
    )
})

export { NewsBlog }
