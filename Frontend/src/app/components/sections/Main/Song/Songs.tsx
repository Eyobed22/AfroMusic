import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import * as actions from "../../../../../store/actions";
import { updateSong } from "../../../../../store/songSlice";
import { resetForm } from "../../../../../store/formSlice";
import StyledButton from "../../../../styledComponents/StyledButton";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import { setFormData, setFormMode } from "../../../../../store/formSlice";
import { dbSong } from "../../../../../types";
import { removeSong } from "../../../../../store/songSlice";
import toast from "react-hot-toast";
import Form from "../../../../styledComponents/Form";
import Modal from "../../../../styledComponents/Modal";
import Table from "../../../../styledComponents/Table";

interface formData {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}


const headers = ["Title", "Artist", "Album", "Genre", "Update", "Delete"];

const Songs: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs);
  const { searchTerm } = useSelector((state: RootState) => state.search);
  const { genre } = useSelector((state: RootState) => state.genreFilter);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(actions.readAllSongs());
  }, [dispatch]);

  const handleUpdate = (song: dbSong) => {
    dispatch(setFormData({ field: "title", value: song.title }));
    dispatch(setFormData({ field: "artist", value: song.artist }));
    dispatch(setFormData({ field: "album", value: song.album }));
    dispatch(setFormData({ field: "genre", value: song.genre }));
    dispatch(setFormData({ field: "_id", value: song._id }));
    dispatch(setFormMode(true));

    openModal();

    const container = document.getElementById("addSong");
    container?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = (id: string) => {
    dispatch(actions.deleteSong(id));
    dispatch(removeSong(id));
    toast.success("Song Deleted");
  };

  const handleSubmit = (formData: formData) => {
    dispatch(actions.updateSong(formData));
    dispatch(updateSong(formData));
    toast.success("Update Successful");

    dispatch(resetForm());
  };

  const filteredSongs = songs.filter((song) => {
    const searchTermLower = searchTerm.toLowerCase();
    const genreLower = genre.toLowerCase();

    if (!searchTerm && !genre) {
      return true;
    }

    if (searchTerm && genre) {
      return (
        song.genre.toLowerCase().includes(genreLower) &&
        (song.title.toLowerCase().includes(searchTermLower) ||
          song.artist.toLowerCase().includes(searchTermLower) ||
          song.album.toLowerCase().includes(searchTermLower))
      );
    }

    if (genre) {
      return song.genre.toLowerCase().includes(genreLower);
    }

    if (searchTerm) {
      return (
        song.title.toLowerCase().includes(searchTermLower) ||
        song.artist.toLowerCase().includes(searchTermLower) ||
        song.album.toLowerCase().includes(searchTermLower)
      );
    }
  });

  const data = filteredSongs.map((item) => [
    item.title,
    item.artist,
    item.album,
    item.genre,
    <StyledButton
      text="update"
      color="#faa307"
      icon={faPencilAlt}
      onClick={() => handleUpdate(item)}
    />,
    <StyledButton
      text="delete"
      color="#d00000"
      icon={faTrashAlt}
      onClick={() => handleDelete(item._id)}
    />,
  ]);

  if (isModalOpen) {
    <Modal onClose={closeModal}>
      <h2>Update Song</h2>
      <Form onSubmit={handleSubmit} addButtonTitle="Update" />
    </Modal>;
  }
  return (
    <>
      {filteredSongs.length != 0 ? (
        <Table headers={headers} data={data} />
      ) : (
        <h3>No Songs To Show</h3>
      )}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Update Song</h2>
          <Form onSubmit={handleSubmit} addButtonTitle="Update" />
        </Modal>
      )}
    </>
  );
};

export default Songs;
