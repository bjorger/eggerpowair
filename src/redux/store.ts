import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./features/themeToggle/themeToggle";
import CategoryReducer from "./features/categories/categories";

const store = configureStore({
    reducer: {
        themeToggle: ThemeReducer,
        contentCategories: CategoryReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
