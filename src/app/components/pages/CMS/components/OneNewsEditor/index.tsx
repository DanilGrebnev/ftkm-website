import { API_RESPONSES } from '@API_RESPONSES'
import { AlertModal } from '@UI/AlertModal'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useGetOneNews } from '@hooks/useGetOneNews'
import { returnAlertType } from '@lib/returnAlertType'

import { BodyInput } from './components/BodyInput'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import s from './style.module.scss'

export const OneNewsEditor = () => {
    useGetOneNews()

    const { showNewsResponseModal, newsResponseModalContent } =
        useGetNewsStore()

    const type = returnAlertType(newsResponseModalContent)

    return (
        <div className={s.EditorContainer}>
            <TitleInput />

            <BodyInput />

            <SendButton />

            <AlertModal
                type={type}
                title={newsResponseModalContent}
                showModal={showNewsResponseModal}
            />
        </div>
    )
}
