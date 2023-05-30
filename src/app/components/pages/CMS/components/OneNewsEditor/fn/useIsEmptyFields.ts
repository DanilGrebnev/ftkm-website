import { useAppSelector } from '@hooks/useAppSelector'

export const useIsEmptyFields = () => {
    const { newsFields } = useAppSelector(({ news }) => news)

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
