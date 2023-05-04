import { BurgerMenu } from '@UI/BurgerMenu'
import vstu from '@images/VSTU.png'
import { HeightCalcHelper } from '@lib/HeightHelper'
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'react-uuid'
import { v4 as uuidv4 } from 'uuid'

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

    const BurgerMenuItems = () => (
        <>
            <NavLink to="/">Главная</NavLink>
            {pageList.map(({ href, text }, i) => {
                return (
                    <a key={uuidv4()} href={href}>
                        {text}
                    </a>
                )
            })}
            {/* <NavLink to="/news">Новости</NavLink> */}
        </>
    )

    return (
        <section ref={ref} className="Header" id="Header">
            <AppBar className={style.Header} position="sticky">
                <Container maxWidth="xl">
                    <Toolbar className={style.toolbar} disableGutters>
                        <img className={style.vstuIcon} alt="vstu" src={vstu} />
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
                        <Box
                            className={`Box2 ${style.Box2}`}
                            sx={muiStyles.Box2.sx}
                        >
                            <NavLink to="/">
                                <Button className={style.Btn}>Главная</Button>
                            </NavLink>
                            {pageList.map(({ text, href }) => {
                                return (
                                    <a key={uuid()} href={href}>
                                        <Button
                                            className={style.Btn}
                                            variant="text"
                                        >
                                            {text}
                                        </Button>
                                    </a>
                                )
                            })}
                            {/* <NavLink to="/news">
                                <Button className={style.Btn}>Новости</Button>
                            </NavLink> */}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </section>
    )
}
