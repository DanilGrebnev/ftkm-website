import { HeightCalcHelper } from '@utils/HeightHelper'
import bgVideo from '@video/metallurgy.mp4'
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
                    <span>
                        машины и технолгия <br /> литейного производства
                    </span>
                    <h4>22.03.02 Машиностроение</h4>
                    <p className={style.Faculty}>факультет технологии конструкционных материалов</p>
                    <p className={style.Info}>
                        Информация для абитурьентов и их родителей <br /> о кафедре и профиле
                        обучения!
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
