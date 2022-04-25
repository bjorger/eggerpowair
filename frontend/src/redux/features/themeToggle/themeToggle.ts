import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface ThemeState {
    color: "blue" | "orange";
}

// Define the initial state using that type
const initialState: ThemeState = {
    color: "orange",
};

export const themeSlice = createSlice({
    name: "counter",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        toggleBlue: (state) => {
            state.color = "blue";
        },
        toggleOrange: (state) => {
            state.color = "orange";
        },
    },
});

export const { toggleBlue, toggleOrange } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.themeToggle.color;

export default themeSlice.reducer;
