import { configureStore } from "@reduxjs/toolkit";
import statisticheReducer from "../features/statisticheSlice";

const store = configureStore({
  reducer: {
    statistiche: statisticheReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
