import { useReturnToCorrectLink } from '@hooks/useReturnToCorrectLink'
import { Box, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { muiStyles } from '../mui-styles'
import { pageList } from '../pageList'
import style from '../style.module.scss'

export const HeaderMenuItems = () => {
    const { goMainPage } = useReturnToCorrectLink()

    return (
        <Box
            className={`Box2 ${style.Box2}`}
            sx={muiStyles.Box2.sx}
        >
            <NavLink to="/">
                <Button className={style.Btn}>Главная</Button>
            </NavLink>
            {pageList.map(({ text, href }) => {
                return (
                    <a
                        key={uuidv4()}
                        href={href}
                    >
                        <Button
                            onClick={() => goMainPage('/')}
                            className={style.Btn}
                            variant="text"
                        >
                            {text}
                        </Button>
                    </a>
                )
            })}
            <NavLink to="/contacts">
                <Button className={style.Btn}>Контакты</Button>
            </NavLink>
            <NavLink to="/moreInfo">
                <Button className={style.Btn}>Больше информации</Button>
            </NavLink>
            {/* <NavLink to="/news">
                <Button className={style.Btn}>Новости</Button>
            </NavLink> */}
        </Box>
    )
}
