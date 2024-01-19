import { configureStore } from "@reduxjs/toolkit";
import MarkReducer from "../utils/mark_reducer";
import PageReducer from "../utils/page_reducer";
import CalcReducer from "../utils/calc_reducer";

const store = configureStore({
    reducer: {
        mark: MarkReducer,
        page: PageReducer,
        calc: CalcReducer
    }
})

export type TStoreState = ReturnType<typeof store.getState>;
export default store;

