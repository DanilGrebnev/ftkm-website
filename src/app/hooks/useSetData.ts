import { useAppDispatch } from '@hooks/useAppDispatch'
import { TChangeInputEvent } from '@interfaces/react'
import { setInputData } from '@redux/slices/news/news'
import { useCallback } from 'react'

export const useSetData = () => {
    const dispatch = useAppDispatch()

    const setData = useCallback((e: TChangeInputEvent) => {
        const name = e.target.name

        const value = e.target.value

        dispatch(
            setInputData({
                name,
                value,
            })
        )
    }, [])

    return { setData }
}
