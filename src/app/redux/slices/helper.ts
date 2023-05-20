import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenBurgerMenu: false,
}

const helperSlice = createSlice({
    name: 'helper',
    initialState,
    reducers: {
        openBurgerMenu(state) {
            if (state.isOpenBurgerMenu) return

            state.isOpenBurgerMenu = true
        },

        closeBurgerMenu(state, action) {
            const { target } = action.payload

            if (!state.isOpenBurgerMenu) return

            if (target.dataset.open) {
                return
            }

            state.isOpenBurgerMenu = false
        },
    },
})

export const { openBurgerMenu, closeBurgerMenu } = helperSlice.actions
export const helperReducer = helperSlice.reducer
