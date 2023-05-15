import { Tabs } from '@UI/Tabs'
import { Container } from '@mui/material'

import { History } from './History'

const a = [
    {
        btnText: 'Заведующий кафедрой',
        element: <div>Элемент 1</div>,
    },
    {
        btnText: 'История',
        element: <History />,
    },
    {
        btnText: 'Сотрудники',
        element: <div>Элемент 3</div>,
    },
]

export const MoreInfo = () => {
    return (
        <Container
            id="MoreInfo"
            maxWidth="xl"
        >
            <Tabs
                style={{ marginTop: '20px' }}
                array={a}
            />
        </Container>
    )
}
