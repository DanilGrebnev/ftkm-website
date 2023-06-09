import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { WindowEvent } from '@hooks/useWindowEvent'
import { toggleBurgerMenu } from '@redux/slices/helper/helper'
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

    const toggleMenu = (e: MouseEvent) => {
        dispatch(toggleBurgerMenu(e))
    }

    return (
        <>
            <WindowEvent
                type="click"
                listener={toggleMenu}
            />
            <CSSTransition
                timeout={300}
                in={isOpenBurgerMenu}
                nodeRef={nodeRef}
                classNames="BurgerIcon"
            >
                <div className={s.BM_Container}>
                    <div
                        data-openburgermodal
                        className={s.lineWrapper}
                        ref={nodeRef}
                    >
                        <span className={s.line1} />
                        <span className={s.line2} />
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}
