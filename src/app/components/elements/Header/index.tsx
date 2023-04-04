import MenuIcon from '@mui/icons-material/Menu'
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
import { MouseEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'react-uuid'

import vstu from '../../../assets/images/VSTU.png'
import { useToggleBurgerMenu } from './helpers'
import { pageList } from './pageList'
import style from './style.module.scss'
import './style.scss'

export const Header = () => {
    const { isActive, handleOpenNavMenu, handleCloseNavMenu } = useToggleBurgerMenu()

    const VstuIcon = <img className={style.vstuIcon} alt="vstu" src={vstu} />

    return (
        <AppBar className={style.Header} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {VstuIcon}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={isActive}
                            onClose={handleCloseNavMenu}
                            open={Boolean(isActive)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pageList.map(({ text, to }) => (
                                <MenuItem key={uuid()} onClick={handleCloseNavMenu}>
                                    <NavLink to={to}>
                                        <Typography textAlign="center">{text}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/**
                     * ! При адаптации показывает лого посредине экрана
                     */}

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img alt="vstuIcon" style={{ maxWidth: '150px' }} src={vstu} />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: { xs: 'center' },
                        }}
                    >
                        {pageList.map(({ text, to }) => {
                            return (
                                <NavLink key={uuid()} to={to}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {text}
                                    </Button>
                                </NavLink>
                            )
                        })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
