import Link from "next/link";
import React, { FormEvent } from "react";
import styled from "styled-components";

type SearchFormType = {
  query: string;
  setQuery: (query: string) => void;
  handleChange: (e: Event) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchFormContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const InputComponent = styled.input`
  height: 2.5625rem;
  color: #1e0c1b;
  border: none;
  border-bottom: 0.125rem solid #520044;
  background-color: transparent;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #1e0c1b;
  }
  :-ms-input-placeholder {
    color: #1e0c1b;
  }
`;

const SelectComponent = styled.select`
  height: 2.5625rem;
  border-radius: 0.5rem;
  padding: 0 1.125rem;
  color: #f5f3f5;
  background-color: #1e0c1b;
  border: 1px solid #1e0c1b;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SearchButton = styled.button`
  padding: 0 3.125rem;
  height: 2.5625rem;
  color: #f5f3f5;
  background-color: #1e0c1b;
  border: 1px solid #1e0c1b;
  border-radius: 0.5rem;
  font-weight: 400;
  border: none;

  @media (min-width: 768px) {
    padding: 0.875rem 2.125rem;
    font-size: 1rem;
  }
`;

const SearchButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  a {
    height: 2.5625rem;
    padding: 0.875rem 5.375rem;
    color: #f5f3f5;
    background-color: #1e0c1b;
    border: 1px solid #1e0c1b;
    border-radius: 0.5rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;

    @media (min-width: 768px) {
      font-size: 1rem;
      display: block;
      padding: 0.875rem 1.375rem;
    }
  }
`;

function SearchForm({
  handleChange,
  handleSearch,
  query,
  setQuery,
}: SearchFormType) {
  return (
    <SearchFormComponent onSubmit={(e) => handleSearch(e)}>
      <SearchFormContainer data-testid="search-form">
        <InputComponent
          type="text"
          placeholder="Search Rick and Searchy"
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
        <SearchButton data-testid="search-go" type="submit">
          Search!
        </SearchButton>
        <Link href="/favourites">Go to favourites!</Link>
      </SearchButtonContainer>
    </SearchFormComponent>
  );
}

export default SearchForm;
