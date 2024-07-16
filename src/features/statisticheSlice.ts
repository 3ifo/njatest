import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatisticheState {
  isVisible: boolean;
}

const initialState: StatisticheState = {
  isVisible: false,
};

const statisticheSlice = createSlice({
  name: "statistiche",
  initialState,
  reducers: {
    toggleStatistiche: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleStatistiche } = statisticheSlice.actions;

export default statisticheSlice.reducer;
