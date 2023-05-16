import { List } from '@components/Ordinary/List'

import { headDepartment } from '../MoreInfo/employee_data'
import { Header } from './components/header'
import s from './s.module.scss'

export const Employee = () => {
    return (
        <section className={`Employee ${s.employee}`}>
            <Header />
            {headDepartment.map(({ title, list }) => {
                return (
                    <List
                        list={list}
                        title={title}
                    />
                )
            })}
            <h3 className={s.biografy}>Биография</h3>
            <p className={s.biografy_text}>
                В 1970г. окончил среднюю школу № 14 г.Волгограда и поступил в
                ВПИ. В 1973-1975гг. служил в СА. В 1979г. окончил ВПИ по спец.
                «Машины и технология литейного производства» и оставлен на
                кафедре в должности инженера, затем работал в должностях:
                ассистента, ст.преподавателя, доцента и профессора. В 1987-1989
                гг. был заместителем декана факультета ГОМ. С 1989г. по
                настоящее время возглавляет НИЧ, который впоследствии
                реорганизовался в УНиИ. В 1987г. защитил кандидатскую
                диссертацию в Киевском политехнической институте после окончания
                заочной аспирантуры, которую подготовил под руководством
                известного в СССР и за рубежом литейщика, заслуженного деятеля
                науки и техники Украины Ващенко К.И. В 2006г. в Московском
                автомеханическом университете защитил докторскую диссертацию. С
                2000г. возглавляет Волгоградское отделение ассоциации литейщиков
                РФ. В 2012г. избран членом редколлегии научного журнала
                «Заготовительное производство в машиностроении». Подготовлено
                четыре кандидата наук. Опубликовано 16 учебных пособий, в т.ч.
                четыре с грифом УМО, 40 статей в научных журналах,
                рекомендованных ВАК РФ, имеет 42 охранных документа на объекты
                интеллектуальной деятельности.
            </p>
        </section>
    )
}
