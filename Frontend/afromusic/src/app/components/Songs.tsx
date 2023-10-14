import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import * as actions from "../../store/actions";
import { updateSong } from "../../store/songSlice";
import { resetForm } from "../../store/formSlice";
import StyledButton from "../styledComponents/StyledButton";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import { setFormData, setFormMode } from "../../store/formSlice";
import { dbSong } from "../../types";
import { removeSong } from "../../store/songSlice";
import toast from "react-hot-toast";
import Form from "./Form";
import Song from "./Song";
import Modal from "./Modal";

interface formData {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

// Emotion CSS styles
const tableStyles: SerializedStyles = css`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const thStyles: SerializedStyles = css`
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

const tdStyles: SerializedStyles = css`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

// styled components
const TableContainer = styled.table`
  ${tableStyles}
`;

const TableHeader = styled.th`
  ${thStyles}
`;

const TableData = styled.td`
  ${tdStyles}
`;

const headers = ["Title", "Artist", "Album", "Genre", "", ""];

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

  return filteredSongs.length != 0 ? (
    <TableContainer>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredSongs.map((song) => (
          <tr key={song._id}>
            <TableData>{song.title}</TableData>
            <TableData>{song.artist}</TableData>
            <TableData>{song.album}</TableData>
            <TableData>{song.genre}</TableData>
            <TableData>
              <StyledButton
                size="small"
                text="update"
                color="#faa307"
                icon={faPencilAlt}
                onClick={() => handleUpdate(song)}
              />
              {isModalOpen && (
            <Modal onClose={closeModal}>
              <h2>Update Song</h2>
            <Form onSubmit={handleSubmit} addButtonTitle='Update' />
          </Modal>
            )}
              {/* <Song onClick={handleUpdate(song)}/> */}
            </TableData>
            <TableData>
              <StyledButton
                size="small"
                text="delete"
                color="#d00000"
                icon={faTrashAlt}
                onClick={() => handleDelete(song._id)}
              />
            </TableData>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  ) : (
    <h3>No Songs To Show</h3>
  );
};

export default Songs;
