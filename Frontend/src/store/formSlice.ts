import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface FormState {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  }
  
  interface CombinedState {
    formData: FormState;
    isUpdateMode: boolean;
  }
  
export const initialState: CombinedState = {
    formData: {
      _id: '',
      title: '',
      artist: '',
      album: '',
      genre: '',
    },
    isUpdateMode: false,
  };

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<{ field: keyof FormState; value: string }>) => {
            const { field, value } = action.payload;
            state.formData[field] = value;
        },
        setFormMode: (state, action: PayloadAction<boolean>) => {
            state.isUpdateMode = action.payload;
        },
        resetForm: (_state) => {
            return initialState;
        },
    }
});

export const { setFormData, setFormMode, resetForm } = formSlice.actions;

export default formSlice.reducer;