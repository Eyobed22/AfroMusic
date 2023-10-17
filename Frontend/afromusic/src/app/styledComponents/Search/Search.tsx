import React from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

import { setSearchFilter } from "../../../store/searchSlice";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  border-radius: 4px;
  padding: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 4px;
`;

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchFilter({ term: event.target.value }));
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleSearchTermChange}
      />
    </SearchContainer>
  );
};

export default Search;
