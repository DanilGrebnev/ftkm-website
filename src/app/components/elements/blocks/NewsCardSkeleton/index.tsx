import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import * as React from 'react'

interface MediaProps {
    loading?: boolean
}

export const NewsCardSkeleton = React.memo((props: MediaProps) => {
    const { loading = false } = props

    return (
        <Card>
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

            <CardContent>
                <Typography variant="h5">
                    <Skeleton variant="text" />
                </Typography>
                <Typography variant="subtitle1">
                    <Skeleton sx={{ maxWidth: '150px' }} variant="text" />
                </Typography>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardContent>
        </Card>
    )
})
