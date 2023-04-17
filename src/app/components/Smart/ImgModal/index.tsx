import { SyntheticEvent, useState } from 'react'
import React from 'react'

import style from './style.module.scss'

interface IImageModal {
    src: string
    isActive: boolean
    closeModal: () => void
}

export const ImageModal = (props: IImageModal) => {
    const { src, isActive, closeModal } = props

    return isActive ? (
        <div onClick={closeModal} className={`Image-container ${style.modal}`}>
            <img src={src} alt="" />
            <div onClick={closeModal} className={style.close}>
                close
            </div>
        </div>
    ) : (
        <></>
    )
}
