import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp'
import FolderSharpIcon from '@mui/icons-material/FolderSharp'
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp'

import s from './style.module.scss'

export const NewsItem = () => {
    return (
        <div className={s.newsItem}>
            <img alt="Изображение статьи" />
            <div className={s.itemInfo}>
                <h1>Совершенствование процессов поверхностного легирования в литейной форме</h1>
                <div className={s.date}>
                    <CalendarMonthSharpIcon sx={{ color: '#0f78ed' }} />
                    <p>Дата публикации:</p>
                    <p>12.02.2023</p>
                </div>
                <div className={s.files}>
                    <FolderSharpIcon sx={{ color: '#e4ed0f' }} />
                    <p>Прикреплённых файлов: 3</p>
                </div>

                <div className={s.btnGroup}>
                    <div>
                        <ModeEditOutlineSharpIcon />
                        <p>Редактировать</p>
                    </div>
                    <div>
                        <DeleteSharpIcon sx={{ color: 'red' }} />
                        <p>Удалить</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
