// searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<{ term: string }>) => {
      state.searchTerm = action.payload.term;
    },
    
  },
});

export const { setSearchFilter } = searchSlice.actions;
export default searchSlice.reducer;
