import { useAppDispatch } from '@hooks/useAppDispatch'
import { setInputData } from '@redux/slices/news/news'
import { useCallback } from 'react'

export const useSetData = () => {
    const dispatch = useAppDispatch()
 
    const setData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
