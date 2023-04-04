import { Button, CardActionArea, CardActions } from '@mui/material'
import CardItem from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

import ig from '../../../../assets/images/green-iguana.jpg'

export const Card = memo(() => {
    return (
        <CardItem sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <Typography align="center" gutterBottom variant="subtitle1" component="p">
                    04.04.2023 2019
                </Typography>
                <CardMedia
                    component="img"
                    height="300"
                    image={ig}
                    alt="green iguana"
                    sx={{ maxWidth: '100%', objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="p">
                        Lizard
                    </Typography>
                    <Typography
                        sx={{
                            maxHeight: '80px',
                            fontSize: '20px',
                            overflow: 'hidden',
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except AntarcticaLizards are a
                        widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except AntarcticaLizards are a widespread group of
                        squamate reptiles, with over 6,000 species, ranging across all continents
                        except AntarcticaLizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except AntarcticaLizards
                        are a widespread group of squamate reptiles, with over 6,000 species,
                        ranging across all continents except AntarcticaLizards are a widespread
                        group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except AntarcticaLizards are a widespread group of squamate
                        reptiles, with over 6,000 species, ranging across all continents except
                        AntarcticaLizards are a widespread group of squamate reptiles, with over
                        6,000 species, ranging across all continents except AntarcticaLizards are a
                        widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except AntarcticaLizards are a widespread group of
                        squamate reptiles, with over 6,000 species, ranging across all continents
                        except AntarcticaLizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except AntarcticaLizards
                        are a widespread group of squamate reptiles, with over 6,000 species,
                        ranging across all continents except AntarcticaLizards are a widespread
                        group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </CardItem>
    )
})
