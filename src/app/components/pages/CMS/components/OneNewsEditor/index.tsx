import { API_RESPONSES } from '@API_RESPONSES'
import { AlertModal } from '@UI/AlertModal'
import { globalVariables } from '@globalVariables'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { clickToLabelElement } from '@lib/clickToLabelElement'
import { Button } from '@mui/material'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { error } from 'console'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BodyInput } from './components/BodyInput'
import { ImgInput } from './components/ImgInput'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import s from './style.module.scss'


//! Статьи изменяются, даже если были отправлены пустые данные.
export const OneNewsEditor = () => {
    const { _id } = useParams()

    const { showNewsResponseModal, newsResponseModalContent } = useAppSelector(
        ({ news }) => news
    )

    const fileRef = useRef<HTMLInputElement>(null)

    const modalRef = useRef<HTMLDivElement>(null)

    const dspatch = useAppDispatch()

    useEffect(() => {
        if (_id) {
            dspatch(NewsServices.getOneNews(_id))
        }
    }, [_id])

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

            <TitleInput />

            <BodyInput />

            <SendButton id={_id} />

            <AlertModal
                type={
                    newsResponseModalContent !== API_RESPONSES.NEWS_SEND_ERROR
                        ? 'success'
                        : 'error'
                }
                title={newsResponseModalContent}
                showModal={showNewsResponseModal}
            />
        </div>
    )
}
