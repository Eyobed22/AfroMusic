import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  SongsInEachAlbumStat } from "../types";


const SongsInEachAlbumSlice = createSlice({
    name: 'artistStat',
    initialState: [] as SongsInEachAlbumStat[],
    reducers: {
        setSongsInEachAlbumCount: (state, action: PayloadAction<SongsInEachAlbumStat[]>) => action.payload,
    }
});

export const { setSongsInEachAlbumCount  } = SongsInEachAlbumSlice.actions;

export default SongsInEachAlbumSlice.reducer;



