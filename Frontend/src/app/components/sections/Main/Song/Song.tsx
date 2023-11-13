import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../../../styledComponents/Form";
import * as action from "../../../../../store/actions";
import { resetForm } from "../../../../../store/formSlice";
import { addSong } from "../../../../../store/songSlice";
import toast from "react-hot-toast";
import Modal from "../../../../styledComponents/Modal";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../../../../styledComponents/StyledButton";

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

  const handleAddButton = () => {
    dispatch(resetForm());
    openModal();
  };

  const handleSubmit = (formData: formData) => {
    const { _id, ...newObject } = formData;
    dispatch(action.createSong(newObject));
    dispatch(addSong(formData));
    toast.success("Song added successfully");
    dispatch(resetForm());
  };

  return (
    <div>
      <StyledButton
        size="large"
        text="Add Song"
        color="#57cc99"
        icon={faAdd}
        onClick={handleAddButton}
      />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Add Song</h2>
          <Form onSubmit={handleSubmit} addButtonTitle="Add" />
        </Modal>
      )}
    </div>
  );
};

export default Song;
