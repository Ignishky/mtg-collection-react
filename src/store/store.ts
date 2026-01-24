import { configureStore } from '@reduxjs/toolkit'
import reducer, { AppState } from './app/reducer'

export interface RootState {
  app: AppState
}

const store = configureStore({
  reducer: {
    app: reducer,
  },
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
