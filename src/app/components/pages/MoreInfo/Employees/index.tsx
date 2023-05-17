import { Container } from '@mui/material'
import { employeesData } from 'app/data/employees'

import { EmployeeItem } from './EmployeeItem'
import s from './s.module.scss'

export const Employees = () => (
    <Container maxWidth="lg">
        <section className={s.employees}>
            {employeesData.map((props, i) => (
                <EmployeeItem
                    key={i}
                    {...props}
                />
            ))}
        </section>
    </Container>
)
