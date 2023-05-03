import { Container } from '@mui/material'

import s from './style.module.scss'

export const DepartmentSpecialists = () => {
    return (
        <Container
            id="Cooperation"
            className={`DepartmentSpecialists ${s.container}`}
            maxWidth="xl"
        >
            <h1>Специалисты кафедры</h1>
            <Container>
                <h3>
                    Высококвалифицированные специалисты кафедры МиТЛП обладают
                    большим опытом и помогут вам решить вопросы:
                </h3>

                <ol>
                    <li>
                        1. Снижения или устранения литейного брака и
                        дефектности;
                    </li>
                    <li>
                        2. Повышения уровня технологических, механических
                        свойств сплавов и эксплуатационной надёжности изделий из
                        литых заготовок;
                    </li>
                    <li>3. Снижения затрат на производство;</li>
                    <li>
                        4. Дополнительной загрузка производства перспективными
                        видами литых заготовок;
                    </li>
                    <li>
                        5. Разработки новых и эффективных литейных связующих;
                    </li>
                    <li>6. Утилизации отходов производства;</li>
                    <li>
                        7. Производства уникальных по свойствам биметаллических
                        и триметаллических литых заготовок
                    </li>
                </ol>
            </Container>
        </Container>
    )
}
