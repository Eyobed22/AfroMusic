import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dbSong } from "../types";

// export interface RootState {
//     songs: dbSong[]
// }

const songSlice = createSlice({
    name: 'songs',
    initialState: [] as dbSong[],
    reducers: {
        setSongs: (state, action: PayloadAction<dbSong[]>) => action.payload,
        addSong: (state, action: PayloadAction<dbSong>) => [...state, action.payload],
        updateSong: (state, action: PayloadAction<dbSong>) => {
            return state.map(song => song._id === action.payload._id? action.payload: song)
        },
        removeSong: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item._id !== action.payload)
            
        }
    }
});

export const { setSongs, addSong, updateSong, removeSong } = songSlice.actions;

export default songSlice.reducer;



