import Link from "next/link";
import React from "react";
import styled from "styled-components";

type SearchFormType = {
  query: string;
  setQuery: (query: string) => void;
  handleChange: (e: Event) => void;
  handleSearch: () => void;
};

const SearchFormComponent = styled.section`
  padding: 0 2.125rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SearchFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const InputComponent = styled.input`
  height: 3.4375rem;
  border-radius: 0.5rem;
  padding-left: 1.125rem;
  color: #4f4f4f;
  border: 1px solid #bdbdbd;
  font-weight: 400;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #4f4f4f;
  }
  :-ms-input-placeholder {
    color: #4f4f4f;
  }
`;

const SelectComponent = styled.select`
  height: 3.4375rem;
  border-radius: 0.5rem;
  padding-left: 1.125rem;
  color: #4f4f4f;
  border: 1px solid #bdbdbd;
  font-weight: 400;
`;

const SearchButton = styled.button`
  padding: 0 3.125rem;
  height: 2.5rem;
  background-color: #092c4c;
  color: white;
  border-radius: 0.5rem;
  font-weight: 400;
  border: none;
`;

const SearchButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  a {
    height: 2.5rem;
    padding: 0.875rem 4.375rem;
    background-color: #092c4c;
    color: white;
    border-radius: 0.5rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    border: none;
  }
`;

function SearchForm({
  handleChange,
  handleSearch,
  query,
  setQuery,
}: SearchFormType) {
  return (
    <SearchFormComponent>
      <SearchFormContainer data-testid="search-form">
        <InputComponent
          type="text"
          placeholder="Place your search here!"
          value={query}
          data-testid="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <SelectComponent
          name="searchBy"
          id="searchBy"
          data-testid="search-select"
          onChange={(e) => handleChange(e as unknown as Event)}
        >
          <option value="name">By Name</option>
          <option value="status">By Status</option>
          <option value="species">By Species</option>
          <option value="gender">By Gender</option>
        </SelectComponent>
      </SearchFormContainer>
      <SearchButtonContainer>
        <SearchButton data-testid="search-go" onClick={() => handleSearch()}>
          Search!
        </SearchButton>
        <Link href="/favourites">Go to your favourites!</Link>
      </SearchButtonContainer>
    </SearchFormComponent>
  );
}

export default SearchForm;
