import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatisticheState {
  isVisible: boolean;
  clickSulLink: number;
  personeRegistrate: number;
  conversioni: number;
}

const initialState: StatisticheState = {
  isVisible: false,
  clickSulLink: 41391,
  personeRegistrate: 12568,
  conversioni: 346,
};

const statisticheSlice = createSlice({
  name: "statistiche",
  initialState,
  reducers: {
    toggleStatistiche: (state) => {
      state.isVisible = !state.isVisible;
    },
    setStatistiche: (
      state,
      action: PayloadAction<{
        clickSulLink: number;
        personeRegistrate: number;
        conversioni: number;
      }>
    ) => {
      state.clickSulLink = action.payload.clickSulLink;
      state.personeRegistrate = action.payload.personeRegistrate;
      state.conversioni = action.payload.conversioni;
    },
  },
});

export const { toggleStatistiche, setStatistiche } = statisticheSlice.actions;

export default statisticheSlice.reducer;
