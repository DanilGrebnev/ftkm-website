import { BurgerMenu } from '@UI/BurgerMenu'
import { BurgerMenuItems } from '@UI/BurgerMenu/BergerMenuItem'
import vstu from '@images/VSTU.png'
import { HeightCalcHelper } from '@lib/HeightHelper'
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'react-uuid'

import { HeaderMenuItems } from './HeaderMenuItems'
import { muiStyles } from './mui-styles'
import { pageList } from './pageList'
import style from './style.module.scss'

export const Header = () => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        if (ref.current) {
            HeightCalcHelper.height = ref.current.offsetHeight
        }
    }, [ref])

    return (
        <section
            ref={ref}
            className="Header"
            id="Header"
        >
            <AppBar
                className={style.Header}
                position="sticky"
            >
                <Container maxWidth="xl">
                    <Toolbar
                        className={style.toolbar}
                        disableGutters
                    >
                        <img
                            className={style.vstuIcon}
                            alt="vstu"
                            src={vstu}
                        />

                        <BurgerMenu element={<BurgerMenuItems />} />

                        {/* При адаптации показывает лого посредине экрана */}

                        <Typography
                            className="Typography1"
                            variant="h5"
                            noWrap
                            component="a"
                            sx={muiStyles.Typography1.sx}
                        >
                            <img
                                alt="vstuIcon"
                                style={{ maxWidth: '150px' }}
                                src={vstu}
                            />
                        </Typography>
                        <HeaderMenuItems />
                    </Toolbar>
                </Container>
            </AppBar>
        </section>
    )
}
