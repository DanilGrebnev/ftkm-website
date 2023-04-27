import LoadingBtn from '@mui/lab/LoadingButton'
import React from 'react'

interface ILoadingButton {
    loading: boolean
    onClick: () => void
    text: string
    disabled?: boolean
    size?: 'large' | 'medium' | 'small'
}

export const LoadingButton: React.FC<ILoadingButton> = ({
    loading,
    onClick,
    text,
    disabled,
    size,
}) => {
    return (
        <LoadingBtn
            size={size}
            onClick={onClick}
            loading={loading}
            endIcon={
                loading && <span style={{ width: '20px', height: '20px' }} />
            }
            variant="outlined"
            disabled={disabled}
        >
            <div>{text}</div>
        </LoadingBtn>
    )
}
