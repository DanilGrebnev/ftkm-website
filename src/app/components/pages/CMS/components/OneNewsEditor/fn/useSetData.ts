import { useAppDispatch } from '@hooks/useAppDispatch'
import { setInputData } from '@redux/slices/news/news'
import { useCallback } from 'react'

export const useSetData = () => {
    const dispatch = useAppDispatch()

    const setData = useCallback((e: any) => {
        dispatch(
            setInputData({
                name: e.target.name,
                value: e.target.value,
            })
        )
    }, [])

    return { setData }
}
