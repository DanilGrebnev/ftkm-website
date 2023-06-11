import { useState } from 'react'

export const useGetDataFromLocalStorage = () => {
    const [data, setData] = useState<string | null>(null)

    const getItemFromLocalStorage = (key: string) => {
        const element = localStorage.getItem(key)

        setData(element)

        return data
    }

    const setItemInLocalStorage = (key: string, value: string) => {
        localStorage.setItem(key, value)
        
        setData(value)
    }

    return {
        data,
        getItemFromLocalStorage,
        setItemInLocalStorage,
    }
}
