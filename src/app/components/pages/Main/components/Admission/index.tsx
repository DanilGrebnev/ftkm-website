import { Grid } from '@components/containers/Grid'

import { ItemCircle } from './ItemCircle'
import s from './style.module.scss'

export const Admission = () => {
    const year = new Date().getFullYear()

    return (
        <Grid
            id="Admission"
            className={`Admission ${s.Admission}`}
        >
            <h2>Поступление {year}</h2>
            <ItemCircle
                text1="40"
                text2={
                    <>
                        Количество
                        <br />
                        бюджетных мест
                    </>
                }
                text3={<>на {year} год</>}
            />

            <ItemCircle
                text1="118"
                text2={'Проходной бал'}
                text3={<>на {year} год</>}
            />

            <ItemCircle
                text1="4"
                text2={'Года срок обучения'}
                text3="+ возможность продолжить обучение по направлению в
                магистратуре, аспирантуре и докторантуре!"
            />
        </Grid>
    )
}
