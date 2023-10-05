import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/reducers";
import Form from '../components/Form'
import * as action from '../../store/actions';
import { setFormMode, resetForm } from '../../store/formSlice';
import { updateSong, addSong } from '../../store/songSlice';
import { addGenrestat } from '../../store/genreStatSlice';

interface formData {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  }


const Song: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.form);
    

    const handleSubmit = (formData: formData) => {
      if(form.isUpdateMode){
        dispatch(action.updateSong(formData))
        dispatch(updateSong(formData))
      }else{
        const { _id, ...newObject } = formData
        dispatch(action.createSong(newObject));
        dispatch(addSong(formData))
        // dispatch(addGenrestat())
      }

      dispatch(resetForm());
      dispatch(setFormMode(false));
    };

  return (
    <div>
        <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default Song