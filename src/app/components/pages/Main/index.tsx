import { useEffect, useState } from 'react'

import bgVideo from '../../../assets/videos/metallurgy.mp4'
import { HeightHelperHeight } from '../../../utils/HeightHelper'
import style from './style.module.scss'

export const Main = () => {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(HeightHelperHeight.getHeight())
    }, [state])

    return (
        <section className={`Main-page ${style.Main}`}>
            <div style={{ height: state }} className={style.VideoFilter}>
                <div>
                    <h1>ОБОРУДОВАНИЕ И ТЕХНОЛОГИЯ</h1>
                    <h1>СВАРОЧНОГО ПРОИЗВОДСТВА</h1>
                    <h4>22.03.02 Машиностроение</h4>
                    <p className={style.Faculty}>факультет технологии конструкционных материалов</p>
                    <p className={style.Info}>
                        Информация для абитурьентов и их родителей <br /> о кафедре и профиле
                        обучения!
                    </p>
                </div>
            </div>
            <video
                src={bgVideo}
                loop
                autoPlay
                muted
                style={{ objectFit: 'cover', height: state, width: '100vw' }}
            />
            <section style={{ height: '1000px', background: 'red' }}></section>
        </section>
    )
}
