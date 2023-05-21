import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Button } from './Button'
import { ITab, ITabs, IWithTab, prop } from './interface'
import s from './s.module.scss'

/**
 * Компонент, в который можно обренуть
 * дочерний отображаемый компонент и передать label
 * кнопки
 */
export const Tab: React.FC<ITab> = ({ label, children }) => {
    return children
}

/**
 * HOC который оборачивает компонент в Tab
 * и возвращает новый компонент
 */
export const withTab = (label: string, children: React.ReactElement) => {
    return <Tab label={label}>{children}</Tab>
}

export const Tabs: React.FC<ITabs> = ({
    children,
    buttonStyle,
    modalStyle,
}) => {
    const childrenArray = !Array.isArray(children) ? [children] : children

    const [tab, setTab] = useState(0)

    const onClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLButtonElement

        setTab(+target.value)
    }

    return (
        <section className={`Tabs ${s.Tabs}`}>
            <div className={`Tabs_Button ${s.TabsButton}`}>
                {childrenArray.map((el, i) => {
                    const element = el as unknown as prop

                    return (
                        <Button
                            style={buttonStyle || {}}
                            key={uuidv4()}
                            onClick={onClick}
                            tab={i}
                            currentTab={tab}
                            text={element.props.label}
                        />
                    )
                })}
            </div>

            <div className={`Tabs_Item ${s.TabsItem}`}>
                {childrenArray.map((tabItem, i) => i === tab && tabItem)}
            </div>
        </section>
    )
}
