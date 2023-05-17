import { Tabs } from '@UI/Tabs'
import { Container } from '@mui/material'

import { Employee } from '../Employee'
import { Employees } from './Employees'
import { History } from './History'
// import { RoutesPage } from './RoutesPage'
import s from './s.module.scss'

const a = [
    {
        btnText: 'Заведующий кафедрой',
        element: <Employee />,
    },

    {
        btnText: 'История',
        element: <History />,
    },
    {
        btnText: 'Сотрудники',
        element: <Employees />,
    },
]

const MoreInfo = () => {
    return (
        <section
            id="MoreInfo"
            className={s.MoreInfo}
        >
            <Container
                id="MoreInfo"
                maxWidth="xl"
            >
                <Tabs
                    style={{ marginTop: '20px' }}
                    array={a}
                />
            </Container>
        </section>
    )
}

export default MoreInfo
