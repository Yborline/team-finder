import store from "@redux/store";
import { useDispatch } from "react-redux";

// export type RootState = ReturnType<typeof rootReducer>;
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
