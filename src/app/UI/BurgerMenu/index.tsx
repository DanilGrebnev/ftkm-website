import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { closeBurgerMenu, openBurgerMenu } from '@redux/slices/helper'
import React, { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import s from './style.module.scss'
import './style.scss'

interface IProps {
    element?: React.ReactNode
}

export const BurgerMenu: React.FC<IProps> = ({ element }) => {
    const { isOpenBurgerMenu } = useAppSelector(({ helper }) => helper)

    const nodeRef = useRef(null)

    const dispatch = useAppDispatch()

    const closeMenu = (e: Event) => {
        dispatch(closeBurgerMenu(e))
    }

    const openMenu = () => {
        dispatch(openBurgerMenu())
    }

    useEffect(() => {
        document.addEventListener('click', closeMenu)

        return () => {
            document.removeEventListener('click', closeMenu)
        }
    }, [])

    return (
        <>
            <CSSTransition
                timeout={300}
                in={isOpenBurgerMenu}
                nodeRef={nodeRef}
                classNames="BurgerIcon"
            >
                <div className={s.BM_Container}>
                    <section
                        id="BurgerIcon"
                        className={s.BurgerIcon}
                    >
                        <div
                            className={s.lineWrapper}
                            data-open
                            onClick={openMenu}
                            ref={nodeRef}
                        >
                            <span
                                className={s.line1}
                                data-open
                            />
                            {/* <span data-open></span> */}
                            <span
                                className={s.line2}
                                data-open
                            />
                        </div>
                    </section>
                </div>
            </CSSTransition>
        </>
    )
}
