import { pageList } from '@components/Ordinary/Header/pageList'
import { useReturnToCorrectLink } from '@hooks/useReturnToCorrectLink'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export const BurgerMenuItems = () => {
    const { goMainPage } = useReturnToCorrectLink()

    return (
        <>
            <NavLink to="/">Главная</NavLink>

            {pageList.map(({ href, text }) => {
                return (
                    <a
                        onClick={() => goMainPage('/')}
                        key={uuidv4()}
                        href={href}
                    >
                        {text}
                    </a>
                )
            })}

            <NavLink to="/contacts">Контакты</NavLink>

            <NavLink to="/moreInfo">Больше информации</NavLink>

            {/* <NavLink to="/news">Новости</NavLink> */}
        </>
    )
}
