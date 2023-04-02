import styled from "styled-components";

export const BioCharTitle = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 2rem;
    overflow: hidden;
    padding: 6px 0;
    line-height: 1.25;
    margin: 18px 0 9px;
    overflow-wrap: break-word;
    font-weight: 700;
  }
`;