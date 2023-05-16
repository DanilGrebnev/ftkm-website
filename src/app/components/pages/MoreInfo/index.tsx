import { Tabs } from '@UI/Tabs'
import { Container } from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'

import { Employee } from '../Employee'
import { Footer } from '../Main/components'
import { History } from './History'

const RoutesPage = () => (
    <>
        <Link to="onePage">Сылка на страницу</Link>
        <Routes>
            <Route
                path="/"
                // element={<Employee />}
            />
            <Route
                path="/onePage"
                element={<div>Страница с работником</div>}
            />
        </Routes>
    </>
)

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
