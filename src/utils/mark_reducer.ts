import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cloneDeep from "clone-deep"

const mark_reducer = createSlice({
    initialState: {
        marks: [] as TMark[] 
    },
    name: "mark",
    reducers: {
        setMark: (state, payload: PayloadAction<TMark[]>) => {
            state.marks = cloneDeep(payload.payload)
        }
    },
})

export const { setMark } = mark_reducer.actions 
export default mark_reducer.reducer