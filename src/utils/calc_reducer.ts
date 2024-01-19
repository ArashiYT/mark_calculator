import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const calc_reducer = createSlice({
    initialState: {
        button: false,
        calc: false,
        result: 0,
    },
    name: "mark",
    reducers: {
        setStatusBtn: (state, payload: PayloadAction<boolean>) => {
            state.button = payload.payload
        },

        setStatusCalc: (state, payload: PayloadAction<boolean>) => {
            state.calc = payload.payload
        },

        setCalcResult: (state, payload: PayloadAction<number>) => {
            state.result = payload.payload
        }
    },
})

export const { setStatusBtn, setStatusCalc, setCalcResult } = calc_reducer.actions 
export default calc_reducer.reducer