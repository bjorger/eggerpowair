import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
export interface ReduxProjectCategories {
    power_plants?: boolean;
    industrial_plants?: boolean;
    waste_incinerator?: boolean;
    generators?: boolean;
    conveyor_systems?: boolean;
}

export interface ReduxNewsStateCategories {
    paper?: boolean;
    wood?: boolean;
    gas?: boolean;
    waterpowerplants?: boolean;
    waste?: boolean;
    biopowerplants?: boolean;
    incinerators?: boolean;
    aluminium?: boolean;
    cement?: boolean;
    brick?: boolean;
    mechanical?: boolean;
    trains?: boolean;
    food?: boolean;
    cabinet?: boolean;
    education?: boolean;
    press?: boolean;
}

interface ContentCategoriesState {
    news: ReduxNewsStateCategories;
    projects: ReduxProjectCategories;
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
        setNewsCategories: (state, action: PayloadAction<ReduxNewsStateCategories>) => {
            state.news = action.payload;
        },
        setProjectCategories: (state, action: PayloadAction<ReduxProjectCategories>) => {
            state.projects = action.payload;
        },
    },
});

export const { setNewsCategories, setProjectCategories } = categoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNewsCategories = (state: RootState) => state.themeToggle.color;

export default categoriesSlice.reducer;
