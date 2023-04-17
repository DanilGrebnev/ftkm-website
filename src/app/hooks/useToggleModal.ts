import { createContext, useContext, useState } from 'react'

interface IImageModal {
    isActive: boolean
    src: string
}

const ModalContext = createContext({ isActive: false, src: '' })

export const useToggleModal = () => {
    const context = useContext(ModalContext)

    // const openModal = (src: string) => {
    //     setState(prev => (prev = { src, isActive: true }))
    //     console.log('Функция сработала')
    // }

    // const closeModal = () => {
    //     setState({ ...state, isActive: false })
    // }

    return context
}
