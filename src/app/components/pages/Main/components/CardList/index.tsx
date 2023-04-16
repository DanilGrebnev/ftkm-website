import { LineContainer } from '@components/containers/LineContainer'

import { CardItem } from './CardListItem'
import style from './style.module.scss'

export const CardList = () => {
    const a = [
        { a: '', p: 'Волгоградский государственный технический университет' },
        { a: '', p: 'Факультет технологии конструкционных материалов' },
        { a: '', p: 'Кафедра машины и технология литейного производства' },
        {
            a: '',
            p: 'Волгоградский государвственный технический университет',
            span: 'Приёмная комиссия',
        },
    ]

    return (
        <LineContainer className={style.LineContainer}>
            <div className={`CardList ${style.CardList}`}>
                {a.map(({ a, p, span }, i) => (
                    <CardItem key={i} a={a} p={p} span={span} />
                ))}
            </div>
        </LineContainer>
    )
}
