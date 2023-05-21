import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { toggleBurgerMenu } from '@redux/slices/helper'
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

    const toggleMenu = (e: Event | React.SyntheticEvent) => {
        dispatch(toggleBurgerMenu(e))
    }

    useEffect(() => {
        document.addEventListener('click', toggleMenu)

        return () => {
            document.removeEventListener('click', toggleMenu)
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
                <div
                    className={s.BM_Container}
                    data-openBurgerModal
                >
                    <section
                        id="BurgerIcon"
                        className={s.BurgerIcon}
                    >
                        <div
                            className={s.lineWrapper}
                            ref={nodeRef}
                        >
                            <span className={s.line1} />
                            <span className={s.line2} />
                        </div>
                    </section>
                </div>
            </CSSTransition>
        </>
    )
}
