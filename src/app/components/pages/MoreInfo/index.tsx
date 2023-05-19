import { Tabs } from '@UI/Tabs'
import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { Container } from '@mui/material'
import React from 'react'

import { Employee } from '../Employee'
import { Employees } from './Employees'
import { History } from './History'
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

export const MoreInfo = () => {
    useSetDocumentTitle('МиТЛП | Больше информации')

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

