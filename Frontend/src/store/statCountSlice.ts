import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  StatCount } from "../types";


const statCountSlice = createSlice({
    name: 'statCount',
    initialState: [] as StatCount[],
    reducers: {
        setStatCount: (state, action: PayloadAction<StatCount[]>) => action.payload,
        
    }
});

export const { setStatCount } = statCountSlice.actions;

export default statCountSlice.reducer;



