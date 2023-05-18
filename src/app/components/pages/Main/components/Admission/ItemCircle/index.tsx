import s from './s.module.scss'

interface IItemCircle<S = React.ReactNode> {
    text1: S
    text2: S
    text3: S
}

export const ItemCircle: React.FC<IItemCircle> = ({ text1, text2, text3 }) => {
    return (
        <div className={s.ItemCircle}>
            <div className={s.circle}>{text1}</div>
            <p>{text2}</p>
            <span>{text3}</span>
        </div>
    )
}
