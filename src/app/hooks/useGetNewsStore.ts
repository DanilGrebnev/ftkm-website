import { useAppSelector } from '@hooks/useAppSelector'

//Возвращает news хранилище
export const useGetNewsStore = () => {
    const news = useAppSelector(({ news }) => news)

    return news
}
