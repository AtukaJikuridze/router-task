import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import dashboardReducer from "./dashboardSlice";
import { drinksAPI } from "./drink.api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    [drinksAPI.reducerPath]: drinksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(drinksAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
