import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface PositionState {
  curScroll: number;
  introduce: number;
  tech: number;
  project: number;
  gitBlog: number;
}

// Define the initial state using that type
const initialState: PositionState = {
  curScroll: 0,
  introduce: 0,
  tech: 0,
  project: 0,
  gitBlog: 0,
};

export const headerPositionSlice = createSlice({
  name: "headerPosition",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurScroll: (state, action: PayloadAction<number>) => {
      state.curScroll = action.payload;
    },
    setIntroduce: (state, action: PayloadAction<number>) => {
      state.introduce = action.payload;
    },
    setTech: (state, action: PayloadAction<number>) => {
      state.tech = action.payload;
    },
    setProject: (state, action: PayloadAction<number>) => {
      state.project = action.payload;
    },
    setGitBlog: (state, action: PayloadAction<number>) => {
      state.gitBlog = action.payload;
    },
  },
});

export const { setCurScroll, setIntroduce, setTech, setProject, setGitBlog } = headerPositionSlice.actions;

export default headerPositionSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const curScroll = (state: RootState) => state.headerPosition.curScroll;
export const introduce = (state: RootState) => state.headerPosition.introduce;
export const tech = (state: RootState) => state.headerPosition.tech;
export const project = (state: RootState) => state.headerPosition.project;
export const gitBlog = (state: RootState) => state.headerPosition.gitBlog;
