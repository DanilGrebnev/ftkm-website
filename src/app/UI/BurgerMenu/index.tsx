import React, { FC, useEffect, useState } from 'react'

import s from './style.module.scss'

interface IProps {
    element?: React.ReactNode
}

export const BurgerMenu: FC<IProps> = ({ element }) => {
    const [visible, setVisible] = useState(false)

    const shoWMenu = () => {
        setVisible(true)
    }

    const closeMenu = (e: any) => {
        if (!e.target.dataset.open) {
            setVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeMenu)

        return () => {
            document.removeEventListener('click', closeMenu)
        }
    }, [])

    return (
        <>
            <div className={s.BM_Container}>
                <section id="BurgerIcon" className={s.BM_Icon}>
                    <div
                        data-open
                        onClick={shoWMenu}
                        className={s.MB_Icon_lines}
                    >
                        <span data-open></span>
                        <span data-open></span>
                        <span data-open></span>
                    </div>
                </section>
                <div
                    style={{ display: visible ? 'block' : 'none' }}
                    className={s.BM}
                >
                    {element}
                </div>
            </div>
        </>
    )
}
