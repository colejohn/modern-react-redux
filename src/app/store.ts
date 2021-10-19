import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counter-slice";
import { DogsApiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [DogsApiSlice.reducerPath]: DogsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(DogsApiSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;