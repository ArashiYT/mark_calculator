import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../utils/input_reducer";
import MarkReducer from "../utils/mark_reducer";
import PageReducer from "../utils/page_reducer";
import CalcReducer from "../utils/calc_reducer";

const store = configureStore({
    reducer: {
        mark: MarkReducer,
        page: PageReducer,
        calc: CalcReducer, 
        input: inputReducer
    }
})

export type TStoreState = ReturnType<typeof store.getState>;
export default store;

