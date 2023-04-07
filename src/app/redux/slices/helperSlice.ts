import { createSlice } from '@reduxjs/toolkit'

const helperSlice = createSlice({
    name: 'helper',
    initialState: {},
    reducers: {
        getOtherHeight(state, action) {
            // return firstEl.offsetHeight - window.screen.availHeight
        },
    },
})

const { actions, reducer } = helperSlice

export const { getOtherHeight } = actions

export { reducer as helperReducer }
