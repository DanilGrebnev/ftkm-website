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

            const elementWithDataAtr = target.closest('[data-openburgermodal]')

            if (elementWithDataAtr && !state.isOpenBurgerMenu) {
                state.isOpenBurgerMenu = true

                document.body.style.position = 'fixed'

                return
            }

            if (state.isOpenBurgerMenu) {
                state.isOpenBurgerMenu = false

                document.body.style.position = 'static'

                return
            }
        },
    },
})

export const { toggleBurgerMenu } = helperSlice.actions
export const helperReducer = helperSlice.reducer
