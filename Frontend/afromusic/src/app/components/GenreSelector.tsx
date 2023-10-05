// GenreSelector.tsx
import React from 'react';
import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { setGenreFilter } from '../../store/genreFilterSlice';

// Styled components
const SelectorContainer = styled.div`
  position: relative;
  width: 200px;
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
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;

// Example genre options
const genres: string[] = ['pop', 'Rock', 'Hip Hop', 'Jazz', 'Country', 'Electronic'];

const GenreSelector: React.FC = () => {

  const dispatch = useDispatch();

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter({ Genrefilter: event.target.value }))
  };

  return (
    <SelectorContainer>
      <Select onChange={handleGenreChange}>
        <option value="">All Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
      <ArrowIcon>&#9660;</ArrowIcon>
    </SelectorContainer>
  );
};

export default GenreSelector;
