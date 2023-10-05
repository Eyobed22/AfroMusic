// searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  genre: string;
}

const initialState: SearchState = {
  genre: '',
};

const genreFilterSlice = createSlice({
  name: 'genreFilter',
  initialState,
  reducers: {
    setGenreFilter: (state, action: PayloadAction<{ Genrefilter: string}>) => {
        state.genre = action.payload.Genrefilter
    },
    
  },
});

export const { setGenreFilter } = genreFilterSlice.actions;
export default genreFilterSlice.reducer;
