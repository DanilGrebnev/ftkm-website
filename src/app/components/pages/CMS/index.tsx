import { WithAuth } from '@HOC/WithAuth'
import { Route, Routes } from 'react-router-dom'

import { News } from './components/News'
import { OneNewsEditor } from './components/OneNewsEditor'
import s from './style.module.scss'
import './style.scss'

const OneNewsEditorWithAuth = <WithAuth Component={OneNewsEditor} />

const CMS = () => {
    return (
        <section
            id="CMS"
            className={s.CMS}
        >
            <Routes>
                <Route
                    path="/"
                    element={<News />}
                />
                <Route
                    path="newsEditor"
                    element={OneNewsEditorWithAuth}
                />
                <Route
                    path="newsEditor/:_id"
                    element={OneNewsEditorWithAuth}
                />
            </Routes>
        </section>
    )
}

export default CMS
