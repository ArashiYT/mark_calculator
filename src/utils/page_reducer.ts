import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const page_reducer = createSlice({
    name: "page",
    initialState: {
        loading: true,
    },

    reducers: {
        setLoading(state, payload: PayloadAction<boolean>) {
            state.loading = payload.payload
        }
    },
})

export const { setLoading } = page_reducer.actions 
export default page_reducer.reducer