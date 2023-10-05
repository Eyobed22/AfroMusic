import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  GenreStat } from "../types";


const GenreStatSlice = createSlice({
    name: 'genresStat',
    initialState: [] as GenreStat[],
    reducers: {
        setGenrestat: (state, action: PayloadAction<GenreStat[]>) => action.payload,
        addGenrestat: (state) => [...state],
    }
});

export const { setGenrestat, addGenrestat } = GenreStatSlice.actions;

export default GenreStatSlice.reducer;



