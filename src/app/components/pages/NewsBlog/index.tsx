import { Container, TextField } from '@mui/material'
import { memo, useState } from 'react'

import { Card } from '../../elements/blocks/Card'
import { Grid } from '../../elements/blocks/Grid'
import { NewsCardSkeleton } from '../../elements/blocks/NewsCardSkeleton'
import { SearchFilter } from '../../elements/blocks/SearchFilter'
import { Select } from '../../elements/blocks/Select'
import style from './NewsBlog.module.scss'

const NewsBlog = memo(() => {
    const [value, setValue] = useState('')

    const viewsOptions = {
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    }
    const [loading, setLoading] = useState(false)

    const card = (
        <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    )

    return (
        <Container maxWidth="xl">
            <SearchFilter />
            <Grid style={viewsOptions} className={style['news-blog']}>
                {loading ? [...Array(10)].map(() => <NewsCardSkeleton loading={true} />) : card}
            </Grid>
        </Container>
    )
})

export { NewsBlog }
