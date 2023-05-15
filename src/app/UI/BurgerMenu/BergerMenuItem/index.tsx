import { pageList } from '@components/Ordinary/Header/pageList'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export const BurgerMenuItems = () => (
    <>
        <NavLink to="/">Главная</NavLink>
        {pageList.map(({ href, text }, i) => {
            return (
                <a
                    key={uuidv4()}
                    href={href}
                >
                    {text}
                </a>
            )
        })}
        <NavLink to="/moreInfo">Больше информации</NavLink>

        {/* <NavLink to="/news">Новости</NavLink> */}
    </>
)
