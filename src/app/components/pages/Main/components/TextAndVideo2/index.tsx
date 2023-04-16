import { Grid } from '@components/containers/Grid'

import style from './style.module.scss'

export const TextAndVideo2 = () => {
    return (
        <Grid className={`Text-and-video-2 ${style.TextAndVideo2}`}>
            <iframe
                width="625"
                height="359"
                src="https://www.youtube.com/embed/oOCDzG0CaTo?list=TLGGSQ6hxrNydDExMDA0MjAyMw"
                title="Сварочные процессы+"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            <iframe
                width="625"
                height="359"
                src="https://www.youtube.com/embed/oOCDzG0CaTo?list=TLGGSQ6hxrNydDExMDA0MjAyMw"
                title="Сварочные процессы+"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            <p>
                В промышленности, строительстве и на транспорте в широких масштабах применяются
                различные способы сварки. Современные достижения в области сварки позволяют
                соединять не только металлы, но и пластмассы, стекло, керамику и другие материалы.
                Профиль «Оборудование и технология сварочного производства», реализуемый в рамках
                профиля «МАШИНОСТРОЕНИЕ» на факультете технологии конструкционных материалов (ФТКМ),
                позволит получить тебе интересную высокооплачиваемую специальность, востребованную
                на рынке труда, как в настоящем времени, так и в обозримом будущем.
            </p>
        </Grid>
    )
}
