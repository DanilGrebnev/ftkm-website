import { Tabs, withTab } from '@UI/Tabs'
import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { Container } from '@mui/material'
import React from 'react'

import { Employee } from '../Employee'
import { Employees } from './Employees'
import { History } from './History'
import s from './s.module.scss'

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
                    <Tabs>
                        {withTab('История', <History />)}
                        {withTab('Заведующий кафедры', <Employee />)}
                        {withTab('Сотрудники', <Employees />)}
                    </Tabs>
                </Container>
            </section>
        </React.Fragment>
    )
}
