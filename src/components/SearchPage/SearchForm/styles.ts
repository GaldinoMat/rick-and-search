import styled from "styled-components";

export const SearchFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchFormContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    width: 55%;
  }
`;

export const InputComponent = styled.input`
  height: 2.5625rem;
  color: #1e0c1b;
  border: none;
  border-bottom: 0.125rem solid #520044;
  background-color: transparent;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #1e0c1b;
  }
  :-ms-input-placeholder {
    color: #1e0c1b;
  }
`;

export const SelectComponent = styled.select`
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

export const SearchButton = styled.button`
  padding: 0 3.125rem;
  height: 2.5625rem;
  color: #f5f3f5;
  background-color: #1e0c1b;
  border: 1px solid #1e0c1b;
  border-radius: 0.5rem;
  font-weight: 400;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0.875rem 2.125rem;
    font-size: 1rem;
  }
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
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