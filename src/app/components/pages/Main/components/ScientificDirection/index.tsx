import { List } from '@components/Ordinary/List'
import { Container } from '@mui/material'

import { data } from './data'
import s from './s.module.scss'

export const ScientificDirection = () => {
    return (
        <Container
            component="section"
            maxWidth="xl"
            id="ScientificDirection"
            className={s.ScientificDirection}
        >
            <h2>Научные направления</h2>
            {data.map(({ title, list }, i) => (
                <List
                    key={i}
                    title={title}
                    list={list}
                />
            ))}
        </Container>
    )
}
