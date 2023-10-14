import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import Form from "../components/Form";
import * as action from "../../store/actions";
import { setFormMode, resetForm } from "../../store/formSlice";
import { updateSong, addSong } from "../../store/songSlice";
import { addGenrestat } from "../../store/genreStatSlice";
import toast from "react-hot-toast";
import Modal from "./Modal";
import styled from "styled-components";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../styledComponents/StyledButton";

interface formData {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const Song: React.FC = () => {
  
  const dispatch = useDispatch();  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddButton = ()=>{
    dispatch(resetForm());
    openModal()
  }

  const handleSubmit = (formData: formData) => {
      const { _id, ...newObject } = formData;
      dispatch(action.createSong(newObject));
      dispatch(addSong(formData));
      // dispatch(addGenrestat())
      toast.success("Song added successfully");

      dispatch(resetForm());

  };

  return (
    <div>
      <StyledButton
        size="small"
        text="Add Song"
        color="#57cc99"
        icon={faAdd}
        onClick={handleAddButton}
      />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Add Song</h2>
          <Form onSubmit={handleSubmit} addButtonTitle='Add' />
        </Modal>
      )}
    </div>
  );
};

export default Song;
