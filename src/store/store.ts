import { configureStore } from '@reduxjs/toolkit'
import reducer, { AppState } from './app/reducer'
import { setupListeners } from '@reduxjs/toolkit/query';
import { backendApi } from '../common/port/backend';

export interface RootState {
  app: AppState
  [backendApi.reducerPath]: ReturnType<typeof backendApi.reducer>
}

const store = configureStore({
  reducer: {
    app: reducer,
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(backendApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch

export default store
