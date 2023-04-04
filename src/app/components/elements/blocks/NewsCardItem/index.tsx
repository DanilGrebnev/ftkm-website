import { CardActionArea } from '@mui/material'
import CardItem from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

import { INewsCardItem } from '../../../../types/NewsCardItem'

export const NewsCardItem = memo((props: INewsCardItem) => {
    return (
        <CardItem>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.img || ''}
                    alt="green iguana"
                    sx={{ maxWidth: '100%', objectFit: 'cover' }}
                />
                <CardContent sx={{ overflow: 'hidden', padding: '15px' }}>
                    <Typography
                        maxHeight="100px"
                        fontWeight="500"
                        gutterBottom
                        variant="h5"
                        component="p"
                        align="justify"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        color="text.secondary"
                        gutterBottom
                        variant="subtitle1"
                        component="p"
                    >
                        04.04.2023
                    </Typography>
                    <Typography
                        minHeight="50px"
                        maxHeight="120px"
                        fontSize="20px"
                        overflow="hidden"
                        variant="body2"
                        color="text.secondary"
                        align="justify"
                    >
                        {props.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardItem>
    )
})
