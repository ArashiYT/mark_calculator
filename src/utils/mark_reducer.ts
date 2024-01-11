import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const mark_reducer = createSlice({
    initialState: [{name: "Math", number: 5, weight: 3, uuid: "efedfrefdfrefdfe"},{name: "Math", number: 5, weight: 3, uuid: "efedfrefdfrefdfe"},{name: "Math", number: 5, weight: 3, uuid: "efedfrefdfrefdfe"},{name: "Math", number: 5, weight: 3, uuid: "efedfrefdfrefdfe"},{name: "Math", number: 5, weight: 3, uuid: "efedfrefdfrefdfe"},{name: "Math", number: 5, weight: 3, uuid: "efedfrefdfrefdfe"},{name: "Math", number: 5, weight: 3, uuid: "efedfrefdfrefdfe"}] as TMark[],
    name: "mark",
    reducers: {
        addMark: (state, payload: PayloadAction<TMark>) => {
            state = [...state, payload.payload]
        },

        removeMark: (state, payload: PayloadAction<Pick<TMark, "uuid">> ) => {
            state = state.filter(item => item.uuid === payload.payload.uuid)
        }
    },
})

export const { addMark, removeMark } = mark_reducer.actions 
export default mark_reducer.reducer