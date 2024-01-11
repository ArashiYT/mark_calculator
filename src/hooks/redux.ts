import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { TStoreState } from "../libs/store";

export const useAppSelector: TypedUseSelectorHook<TStoreState> = useSelector
export const useAppDispatch = useDispatch