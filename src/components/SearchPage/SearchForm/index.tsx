import Link from "next/link";
import React, { FormEvent } from "react";
import {
  SearchFormComponent,
  SearchFormContainer,
  InputComponent,
  SelectComponent,
  SearchButtonContainer,
  SearchButton,
} from "./styles";

type SearchFormType = {
  query: string;
  setQuery: (query: string) => void;
  handleChange: (e: Event) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
};

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
