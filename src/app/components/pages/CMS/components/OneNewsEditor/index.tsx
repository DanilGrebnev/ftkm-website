import { API_RESPONSES } from '@API_RESPONSES'
import { AlertModal } from '@UI/AlertModal'
import { useAppSelector } from '@hooks/useAppSelector'
import { useGetOneNews } from '@hooks/useGetOneNews'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BodyInput } from './components/BodyInput'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import { UploadFilesBtn } from './components/UploadFilesBtn'
import { useSetData } from './fn/useSetData'
import s from './style.module.scss'

export const OneNewsEditor = () => {
    const { _id } = useParams()

    const { getOneNews } = useGetOneNews()

    const { setData } = useSetData()

    const { showNewsResponseModal, newsResponseModalContent } = useAppSelector(
        ({ news }) => news
    )

    useEffect(() => {
        if (_id) {
            getOneNews(_id)
        }
    }, [_id])

    const alertModalType =
        newsResponseModalContent === API_RESPONSES.NEWS_SEND_ERROR ||
        newsResponseModalContent === API_RESPONSES.NEWS_EDIT_ERROR
            ? 'error'
            : 'success'

    return (
        <div className={s.EditorContainer}>
            <UploadFilesBtn />

            <TitleInput onChange={setData} />

            <BodyInput onChange={setData} />

            <SendButton id={_id} />

            <AlertModal
                type={alertModalType}
                title={newsResponseModalContent}
                showModal={showNewsResponseModal}
            />
        </div>
    )
}
