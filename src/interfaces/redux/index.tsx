import store from "@redux/store";
import { rootReducer } from "@redux/rootReducer";
import { useDispatch } from "react-redux";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
