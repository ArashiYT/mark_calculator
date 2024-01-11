import { configureStore } from "@reduxjs/toolkit";
import MarkReducer from "../utils/mark_reducer";
import PageReducer from "../utils/page_reducer";

const store = configureStore({
    reducer: {
        mark: MarkReducer,
        page: PageReducer
    }
})

export type TStoreState = ReturnType<typeof store.getState>;
export default store;

