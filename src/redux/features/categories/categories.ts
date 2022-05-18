import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
export interface ContentCategories {
    power_plants?: boolean;
    industrial_plants?: boolean;
    waste_incinerator?: boolean;
    generators?: boolean;
    conveyor_systems?: boolean;
}

interface ContentCategoriesState {
    news: ContentCategories;
    projects: ContentCategories;
}

// Define the initial state using that type
const initialState: ContentCategoriesState = {
    news: {},
    projects: {},
};

export const categoriesSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setNewsCategories: (state, action: PayloadAction<ContentCategories>) => {
            state.news = action.payload;
        },
        setProjectCategories: (state, action: PayloadAction<ContentCategories>) => {
            state.projects = action.payload;
        },
    },
});

export const { setNewsCategories, setProjectCategories } = categoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNewsCategories = (state: RootState) => state.themeToggle.color;

export default categoriesSlice.reducer;
