import { useAppDispatch } from '@hooks/useAppDispatch'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import React from 'react'

type TProps = {
    fileRef: React.RefObject<HTMLInputElement>
}

export const ImgInput: React.FC<TProps> = ({ fileRef }) => {
    const dispatch = useAppDispatch()

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(NewsServices.sendFile(e))
    }

    return (
        <input
            ref={fileRef}
            accept=".jpg,.jpeg,.png"
            onChange={onChange}
            name="imgName"
            id="file"
            type="file"
        />
    )
}
