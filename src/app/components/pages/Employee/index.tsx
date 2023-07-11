import { List } from '@components/Ordinary/List'
import { data } from 'app/data/Kidalov.employee'
import cn from 'classnames'

import { Description } from './components/Description'
import { Header } from './components/header'
import s from './s.module.scss'

export const Employee = () => {
    return (
        <section className={cn('Employee', s.employee)}>
            <Header />

            {data.map((props, i) => {
                return (
                    <List
                        key={i}
                        {...props}
                    />
                )
            })}

            <h3 className={s.biografy}>Биография</h3>

            <Description />
        </section>
    )
}
