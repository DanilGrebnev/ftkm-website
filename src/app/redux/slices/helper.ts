import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenBurgerMenu: false,
}

const helperSlice = createSlice({
    name: 'helper',
    initialState,
    reducers: {
        //Отвечает за открытие и закрытие бургер меню
        toggleBurgerMenu(state, action) {
            const { target } = action.payload

            const elWithDataAtr = target.closest('[data-openburgermodal]')

            if (elWithDataAtr && !state.isOpenBurgerMenu) {
                state.isOpenBurgerMenu = true

                document.body.style.position = 'fixed'

                return
            }

            state.isOpenBurgerMenu = false

            document.body.style.position = 'static'
        },
    },
})

export const { toggleBurgerMenu } = helperSlice.actions
export const helperReducer = helperSlice.reducer
