import { Tabs } from '@UI/Tabs'
import { Container } from '@mui/material'

import { Employee } from '../Employee'
import { Footer } from '../Main/components'
import { History } from './History'
import { RoutesPage } from './RoutesPage'

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
        element: <RoutesPage />,
    },
]

const MoreInfo = () => {
    return (
        <>
            <Container
                id="MoreInfo"
                maxWidth="xl"
            >
                <Tabs
                    style={{ marginTop: '20px' }}
                    array={a}
                />
            </Container>
            <Footer />
        </>
    )
}

export default MoreInfo
