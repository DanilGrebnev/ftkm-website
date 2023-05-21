import React from 'react'

export interface ITabs<T = React.ReactElement, S = React.CSSProperties> {
    children?: T[] | T
    buttonStyle?: S
    modalStyle?: S
}

export interface ITab {
    children: React.ReactElement
    label: string
}

export type prop = { props: { label: string } }

export interface IWithTab extends ITab {}
