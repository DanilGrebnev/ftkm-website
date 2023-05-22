import { BlueButton } from '@UI/BigButton'
import { Grid } from '@components/containers/Grid'

import { ColumnItem } from './ColumnsItem'
import { data } from './data'
import style from './style.module.scss'

export const CareerOpportunities = () => {
    return (
        <Grid
            id="Career-opportunities"
            className={`Career-opportunities ${style.Career}`}
        >
            <h2>Карьерные возможности</h2>
            <>
                {data.map((el, i) => (
                    <ColumnItem
                        key={i}
                        {...el}
                    />
                ))}
            </>
            <BlueButton />
        </Grid>
    )
}
