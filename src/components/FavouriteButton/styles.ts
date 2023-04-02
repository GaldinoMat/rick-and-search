import { HeartFill } from "@styled-icons/bootstrap";
import styled from "styled-components";

export const FavouriteButtonComponent = styled(HeartFill)<{
  isfavorite: string;
}>`
  top: 0.25rem;
  right: 0;
  width: 1.5rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  fill: ${({ isfavorite }) => (isfavorite === "true" ? "#F44336" : "#520044")};
`;
