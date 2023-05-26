import { Route, Routes } from 'react-router-dom'

import { News } from './components/News'
import { OneNewsEditor } from './components/OneNewsEditor'
import s from './style.module.scss'
import './style.scss'

const CMS = () => {
    return (
        <section className={s.CMS}>
            <div className={s.block}>
                <Routes>
                    <Route
                        path="/"
                        element={<News />}
                    />
                    <Route
                        path="newsEditor"
                        element={<OneNewsEditor />}
                    />
                </Routes>
            </div>
        </section>
    )
}

export default CMS
