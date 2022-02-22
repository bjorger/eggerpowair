import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./features/themeToggle/themeToggle";

const store = configureStore({
    reducer: {
        themeToggle: ThemeReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
