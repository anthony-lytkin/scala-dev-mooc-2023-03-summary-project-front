import {configureStore} from '@reduxjs/toolkit'
import { authApi } from './authApi';
import { bookingApi } from './bookingApi';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [bookingApi.reducerPath]: bookingApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            bookingApi.middleware
        ),     
    
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
