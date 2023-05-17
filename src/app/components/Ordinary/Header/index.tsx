import { BurgerMenu } from '@UI/BurgerMenu'
import { BurgerMenuItems } from '@UI/BurgerMenu/BergerMenuItem'
import { HeightCalcHelper } from '@lib/HeightHelper'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'

import { VSTUIcon } from '../VSTU_icon'
import { HeaderMenuItems } from './HeaderMenuItems'
import { muiStyles } from './mui-styles'
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
                        <VSTUIcon className={style.vstuIcon} />

                        <BurgerMenu element={<BurgerMenuItems />} />

                        {/* При адаптации показывает лого посредине экрана */}

                        <Typography
                            className="Typography1"
                            variant="h5"
                            noWrap
                            sx={muiStyles.Typography1.sx}
                        >
                            <VSTUIcon style={{ maxWidth: '150px' }} />
                        </Typography>
                        <HeaderMenuItems />
                    </Toolbar>
                </Container>
            </AppBar>
        </section>
    )
}
