import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const input_reducer = createSlice({
    initialState: {
        status: false,
        number: 0,
        weight: 0,
        name: "",
    },
    name: "mark",
    reducers: {
        setStatus: (state, payload: PayloadAction<boolean>) => {
            state.status = payload.payload
        },

        setData: (state, payload: PayloadAction<Omit<TMark, "uuid">>) => {
            state.number = payload.payload.number;
            state.weight = payload.payload.weight;
            state.name = payload.payload.name;
        },
    },
})

export const { setStatus, setData } = input_reducer.actions 
export default input_reducer.reducer