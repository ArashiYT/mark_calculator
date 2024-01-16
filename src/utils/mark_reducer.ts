import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const mark_reducer = createSlice({
    initialState: {
        marks: [{uuid: "XD", weight: 3, number: 5, name:"Math"}] as TMark[] 
    },
    name: "mark",
    reducers: {
        addMark: (state, payload: PayloadAction<TMark>) => {
            state.marks = [...state.marks, payload.payload]
        },

        removeMark: (state, payload: PayloadAction<Pick<TMark, "uuid">> ) => {
            state.marks = state.marks.filter(item => item.uuid !== payload.payload.uuid)
        }
    },
})

export const { addMark, removeMark } = mark_reducer.actions 
export default mark_reducer.reducer