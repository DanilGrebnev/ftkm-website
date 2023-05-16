import kidalov from '@images/kidalov.jpg'

import { TextContent } from './TextContent'
import s from './s.module.scss'

export const Header = () => {
    return (
        <div className={s.header}>
            <img
                alt="изображение"
                src={kidalov}
            />
            <div className={s.leftColumn}>
                <TextContent
                    leftText="Учёное звание"
                    rightText="профессор"
                />
                <TextContent
                    leftText="Учёная степень"
                    rightText="доктор технических наук (технические науки)"
                />
                <TextContent
                    leftText="Кафедра"
                    rightText='"Машины и технология литейного производства", заведующий кафедрой'
                />
            </div>
            <div className={s.rightColumn}>
                <TextContent
                    leftText="Комната"
                    rightText="ГУК-130а"
                />
                <TextContent
                    leftText="Телефон"
                    rightText="(8442) 23-99-41"
                />
                <TextContent
                    leftText="Эл.почта"
                    rightText="nich@vstu.ru"
                />
            </div>
        </div>
    )
}
