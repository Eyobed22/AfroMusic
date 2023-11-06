import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  ArtistStat } from "../types";


const ArtistStatSlice = createSlice({
    name: 'artistStat',
    initialState: [] as ArtistStat[],
    reducers: {
        setArtistStat: (state, action: PayloadAction<ArtistStat[]>) => action.payload,
    }
});

export const { setArtistStat,  } = ArtistStatSlice.actions;

export default ArtistStatSlice.reducer;



