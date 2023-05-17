import { Grid } from '@components/containers/Grid'

import s from './style.module.scss'

export const Admission = () => {
    const year = new Date().getFullYear()

    return (
        <Grid
            id="Admission"
            className={`Admission ${s.Admission}`}
        >
            <h2>Поступление {year}</h2>
            <div>
                <div className={s.circle}>40</div>
                <p>
                    Количество
                    <br />
                    бюджетных мест
                </p>
                <span>на {year} год</span>
            </div>
            <div>
                <div className={s.circle}>118</div>
                <p>Проходной бал</p>
                <span>на {year} год</span>
            </div>
            <div>
                <div className={s.circle}>4</div>
                <p>Года срок обучения</p>
                <span>
                    + возможность продолжить обучение по направлению в
                    магистратуре, аспирантуре и докторантуре!
                </span>
            </div>
        </Grid>
    )
}
