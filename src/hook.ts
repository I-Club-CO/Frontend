import type { RootState, AppDispatch } from "./components/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>(),
    useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
