import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const page_reducer = createSlice({
    name: "page",
    initialState: {
        errorMessage: "",
        loading: true,
    },

    reducers: {
        setErrorMessage(state, payload: PayloadAction<string>) {
            state.errorMessage = payload.payload
        },

        setLoading(state, payload: PayloadAction<boolean>) {
            state.loading = payload.payload
        }
    },
})

export const { setErrorMessage, setLoading } = page_reducer.actions 
export default page_reducer.reducer