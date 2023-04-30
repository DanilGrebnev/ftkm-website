import bg from '@images/Logo_ФТКМ.png'
import { SyntheticEvent } from 'react'

export const onErrorLoadImage = (
    errorEvent: SyntheticEvent<HTMLImageElement, Event>
) => {
    const target = errorEvent.target as HTMLImageElement
    target.src = bg
}
