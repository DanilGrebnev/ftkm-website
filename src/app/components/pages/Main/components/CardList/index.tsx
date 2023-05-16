import { LineContainer } from '@components/containers/LineContainer'

import { CardItem } from './CardListItem'
import style from './style.module.scss'

export const CardList = () => {
    const a = [
        {
            a: 'https://www.vstu.ru/',
            p: 'Волгоградский государственный технический университет',
        },
        {
            a: `https://www.vstu.ru/university/fakultety-i-kafedry/fakultet-tekhnologii-konstruktsionnykh-materialov/`,
            p: 'Факультет технологии конструкционных материалов',
        },
        {
            a: `https://www.vstu.ru/university/fakultety-i-kafedry/fakultet-tekhnologii-konstruktsionnykh-materialov/kafedry/kafedra-mashiny-i-tekhnologiya-liteynogo-proizvodstva/`,
            p: 'Кафедра «Машины и технология литейного производства»',
        },
        {
            a: 'https://welcome.vstu.ru/',
            p: 'Волгоградский государвственный технический университет',
            span: 'Приёмная комиссия',
        },
    ]

    return (
        <LineContainer className={style.LineContainer}>
            <div className={`CardList ${style.CardList}`}>
                {a.map(({ a, p, span }, i) => (
                    <CardItem
                        key={i}
                        a={a}
                        p={p}
                        span={span}
                    />
                ))}
            </div>
        </LineContainer>
    )
}
