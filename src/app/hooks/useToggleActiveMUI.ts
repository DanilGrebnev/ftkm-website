import { MouseEvent, useState } from 'react'

type TUseToggleActive = () => [
    HTMLElement | null,
    (event: MouseEvent<HTMLElement>) => void,
    () => void
]

export const useToggleActiveMUI: TUseToggleActive = () => {
    const [isActive, setIsActive] = useState<null | HTMLElement>(null)

    const handleOpen = (event: MouseEvent<HTMLElement>) => {
        setIsActive(event.currentTarget)
    }

    const handleClose = () => {
        setIsActive(null)
    }

    return [isActive, handleOpen, handleClose]
}
