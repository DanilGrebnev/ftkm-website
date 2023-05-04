import bgVideo from '@videos/metallurgy.mp4'
import { HeightCalcHelper } from 'app/lib/HeightHelper'
import { useEffect, useState } from 'react'

import style from './style.module.scss'

export const Hero = () => {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(HeightCalcHelper.height)
    }, [])

    return (
        <section className={`Hero ${style.Hero}`}>
            <div style={{ height: state }} className={style.VideoFilter}>
                <div className={style.VideoFilterContent}>
                    <span className={style.title}>
                        машины и технолгия <br /> литейного производства
                    </span>
                    <h4>22.03.02 Металлургия</h4>
                    <h4>16.03.01 Машиностроение</h4>
                    <p className={style.Faculty}>
                        факультет технологии конструкционных материалов
                    </p>
                    <p className={style.Info}>
                        Информация для абитурьентов и их родителей <br /> о
                        кафедре и профиле обучения!
                    </p>
                </div>
            </div>
            <video
                className={style.VideoIntro}
                src={bgVideo}
                loop
                autoPlay
                muted
                style={{ height: state }}
            />
        </section>
    )
}
