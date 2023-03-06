import { createSlice } from '@reduxjs/toolkit';

export interface themeState {
  currentTheme: string;
}

const initialState: themeState = {
  currentTheme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const isDarkTheme = state.currentTheme === 'dark';
      const value = isDarkTheme ? 'light' : 'dark';
      state.currentTheme = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
