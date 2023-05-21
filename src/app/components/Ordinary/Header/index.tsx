import { BurgerMenu } from '@UI/BurgerMenu'
import { BurgerMenuItems } from '@UI/BurgerMenu/BurgerMenuItem'
import { BurgerMenuModal } from '@UI/BurgerMenu/BurgerMenuModal'
import { useAppSelector } from '@hooks/useAppSelector'
import { HeightCalcHelper } from '@lib/HeightHelper'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'

import { VSTUIcon } from '../VSTU_icon'
import { HeaderMenuItems } from './HeaderMenuItems'
import { muiStyles } from './mui-styles'
import s from './style.module.scss'

export const Header = () => {
    const ref = useRef<HTMLElement>(null)

    const { isOpenBurgerMenu } = useAppSelector(({ helper }) => helper)

    useEffect(() => {
        if (ref.current) {
            HeightCalcHelper.height = ref.current.offsetHeight
        }
    }, [ref])

    return (
        <header
            ref={ref}
            className={s.headerWrapper}
            id="Header"
        >
            <AppBar
                className={s.Header}
                position="sticky"
            >
                <Container maxWidth="xl">
                    <Toolbar
                        className={s.toolbar}
                        disableGutters
                    >
                        <VSTUIcon className={s.vstuIcon} />

                        <BurgerMenu />

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
            <BurgerMenuModal children={<BurgerMenuItems />} />
        </header>
    )
}
