import preloadMetalluurgy from '@images/preloadmetallurgy.webp'
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
            <div
                style={{ height: state }}
                className={style.VideoFilter}
            >
                <div className={style.VideoFilterContent}>
                    <span className={style.title}>
                        машины и технология <br /> литейного производства
                    </span>
                    <h4>22.03.02 Металлургия</h4>
                    <h4>16.03.01 Машиностроение</h4>
                    <div className={style.Faculty}>
                        <p>факультет технологии конструкционных материалов</p>
                    </div>
                    <p className={style.Info}>
                        Информация для абитуриентов и их родителей <br /> о
                        кафедре и профиле обучения!
                    </p>
                </div>
            </div>
            <video
                className={style.VideoIntro}
                loop
                autoPlay
                preload="none"
                muted
                poster={preloadMetalluurgy}
                style={{ height: state }}
            >
                <source src={bgVideo} />
            </video>
        </section>
    )
}
