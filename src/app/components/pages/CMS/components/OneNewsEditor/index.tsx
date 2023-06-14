import { API_RESPONSES } from '@API_RESPONSES'
import { AlertModal } from '@UI/AlertModal'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useGetOneNews } from '@hooks/useGetOneNews'

import { BodyInput } from './components/BodyInput'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import s from './style.module.scss'

export const OneNewsEditor = () => {
    useGetOneNews()

    const { showNewsResponseModal, newsResponseModalContent } =
        useGetNewsStore()

    const alertType =
        newsResponseModalContent ===
        (API_RESPONSES.NEWS_SEND_ERROR || API_RESPONSES.NEWS_EDIT_ERROR)
            ? 'error'
            : 'success'

    return (
        <div className={s.EditorContainer}>
            <TitleInput />

            <BodyInput />

            <SendButton />

            <AlertModal
                type={alertType}
                title={newsResponseModalContent}
                showModal={showNewsResponseModal}
            />
        </div>
    )
}
