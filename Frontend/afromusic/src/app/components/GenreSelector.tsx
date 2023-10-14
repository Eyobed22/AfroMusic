// GenreSelector.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { setGenreFilter } from '../../store/genreFilterSlice';

// Styled components
const SelectorContainer = styled.div`
  position: relative;
  width: 200px;
  z-index: 1;

  @media (max-width: 760px) {
    margin-top: 50px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  outline: none;
  appearance: none;
  cursor: pointer;
  z-index: 2; /* Increase the z-index */
`;

interface ArrowIconProps {
  isOpen: boolean;
}

const ArrowIcon = styled.span<ArrowIconProps>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)')};
`;

// Example genre options
const genres: string[] = [
  'Pop',
  'Rock',
  'hip-hop',
  'Reggae',
  'R&B (Rhythm and Blues)',
  'Country',
  'Jazz',
  'Blues',
  'Gospel',
  'Funk',
  'Soul',
  'Dance',
  'Latin',
  'Electronic',
  'Classical',
  'Folk',
  'Alternative',
  'Indie',
  'Metal',
];

const GenreSelector: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter({ Genrefilter: event.target.value }));
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectorContainer>
      <Select onChange={handleGenreChange} onClick={toggleOpen} onBlur={toggleOpen}>
        <option value="">All Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
      <ArrowIcon isOpen={isOpen}>&#9660;</ArrowIcon>
    </SelectorContainer>
  );
};

export default GenreSelector;