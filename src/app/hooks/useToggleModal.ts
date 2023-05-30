import { useState, useCallback } from 'react'

interface IImageModal {
    isActive: boolean
    src: string
}

export const useToggleModal = () => {
    const [state, setState] = useState<IImageModal>({
        isActive: false,
        src: '',
    })

    const openModal = (src: string) => {
        setState({ src, isActive: true })
    }

    const closeModal = () => {
        setState({ ...state, isActive: false })
    }

    return { state, openModal, closeModal }
}
