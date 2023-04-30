import React from 'react'

export const OneNewsEditor = () => {
    return (
        <div>
            <div>Изображение</div>
            <input type="file" />
            <div>Заголовок</div>
            <input name="title" />
            <div>Текст новости</div>
            <textarea name="body" />
        </div>
    )
}
