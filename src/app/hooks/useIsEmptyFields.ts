import { useGetNewsStore } from './useGetNewsStore'

/**
 * Хук проверяет поля title и body на пустоту
 * возвращает булевое значение
 */
export const useIsEmptyFields = () => {
    const { newsFields } = useGetNewsStore()

    const title = newsFields.title.trim()

    const body = newsFields.body.trim()

    const isEmpty = !!(!body || !title)

    const isEmptyBody = !!body

    const isEmptyTitle = !!title

    return {
        isEmpty,
        isEmptyBody,
        isEmptyTitle,
    }
}
