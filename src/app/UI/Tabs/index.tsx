import { ITabs } from '@interfaces/Tabs'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Button } from './Button'
import { Element } from './Element'
import s from './s.module.scss'

/**
 * Принимаем массив объектов, которые содержат название кнопки и React элемент
 */
export const Tabs: React.FC<ITabs> = ({ array, style, buttonStyle }) => {
    const [value, setValue] = useState(1)

    const onClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLButtonElement

        setValue(+target.value)
    }

    return (
        <section
            style={style}
            className={`Tabs ${s.Tabs}`}
        >
            <div className={`Tabs_Button ${s.TabsButton}`}>
                {array.map((el, i) => {
                    return (
                        <Button
                            style={buttonStyle}
                            key={uuidv4()}
                            onClick={onClick}
                            value={i + 1}
                            currentValue={value}
                            text={el.btnText}
                        />
                    )
                })}
            </div>
            <div className="Tabs_Item">
                {array.map((el, i) => {
                    return (
                        <Element
                            key={uuidv4()}
                            children={el.element}
                            elementValue={i + 1}
                            value={value}
                        />
                    )
                })}
            </div>
        </section>
    )
}
