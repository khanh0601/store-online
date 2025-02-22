import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  theme: string;
};

const initialState: ThemeState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
