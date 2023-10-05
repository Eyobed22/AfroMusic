import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/reducers";

import { setFormData, setFormMode, resetForm } from '../../store/formSlice';
import { initialState, FormState } from '../../store/formSlice';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #2f3e46;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #354f52;
  }
`;

type FormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.formData);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name in initialState.formData) {
      dispatch(setFormData({ field: name as keyof FormState, value }));
    } else {
      console.error(`Invalid field name: ${name}`);
    }
  };

  const handleClearForm = () =>{
    dispatch(resetForm());
    dispatch(setFormMode(false));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="artist">Artist</Label>
          <Input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="album">Album</Label>
          <Input
            type="text"
            id="album"
            name="album"
            value={formData.album}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="genre">Genre</Label>
          <Select id="genre" name="genre" value={formData.genre} onChange={handleInputChange}>
            <option value="">Select a genre</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="hip-hop">Hip Hop</option>
            <option value="jazz">Jazz</option>
          </Select>
        </FormGroup>
        <ButtonContainer>
          <Button type="submit">Add</Button>
          <Button
            type="button"
            onClick={handleClearForm}
          >
            Clear
          </Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default Form;