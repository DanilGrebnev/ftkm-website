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
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        'Ted'
                    )
                }
                subheader={
                    loading ? <Skeleton animation="wave" height={10} width="40%" /> : '5 hours ago'
                }
            />

            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    height="140"
                    image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                    alt="Nicola Sturgeon on a TED talk stage"
                />
            )}
            <CardContent>
                <Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                        {
                            "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                        }
                    </Typography>
                )}
            </CardContent>
        </Card>
    )
})
