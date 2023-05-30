import { API_RESPONSES } from '@API_RESPONSES'
import { AlertModal } from '@UI/AlertModal'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BodyInput } from './components/BodyInput'
import { ImgInput } from './components/ImgInput'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import { useSetData } from './fn/useSetData'
import s from './style.module.scss'

export const OneNewsEditor = () => {
    const { _id } = useParams()

    const dspatch = useAppDispatch()

    const fileRef = useRef<HTMLInputElement>(null)

    const { showNewsResponseModal, newsResponseModalContent } = useAppSelector(
        ({ news }) => news
    )

    const { setData } = useSetData()

    useEffect(() => {
        if (_id) {
            dspatch(NewsServices.getOneNews(_id))
        }
    }, [_id])

    const alertModalType =
        newsResponseModalContent === API_RESPONSES.NEWS_SEND_ERROR ||
        newsResponseModalContent === API_RESPONSES.NEWS_EDIT_ERROR
            ? 'error'
            : 'success'

    return (
        <div className={s.EditorContainer}>
            {/* <div>Изображение новости</div>
            {data.imgName && (
                <img
                    className={s.previewImg}
                    alt="изображение"
                    src={globalVariables.URL + data.imgName}
                />
            )}
            <div className={s.fileInfo}>
                {!data.imgName ? (
                    <Button
                        onClick={() => clickToLabelElement(fileRef)}
                        variant="outlined"
                        children="выбрать файл"
                    />
                ) : (
                    <Button
                        onClick={() => removeImg(data.imgName)}
                        variant="outlined"
                        color="error"
                        children="Удалить файл"
                    />
                )}
                <div>
                    {!data.imgName ? 'файл не выбран' : 'название файла: '}
                    <strong>{data.imgName}</strong>
                </div>
            </div> */}

            <ImgInput fileRef={fileRef} />

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
