import { components } from './components'
import style from './style.module.scss'

export const Main = () => {
    return (
        <section className={`Main-page ${style.Main || ''}`}>
            {components.map(Component => (
                <Component />
            ))}
        </section>
    )
}
