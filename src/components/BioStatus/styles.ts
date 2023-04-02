import styled from "styled-components";

export const BioStatusComponent = styled.div<{ isright: boolean }>`
  display: flex;
  justify-content: ${({ isright }) => (isright ? "flex-end" : "flex-start")};
  gap: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const AliveStatus = styled.p`
  padding: 0.5rem;
  width: 4.5625rem;
  background-color: #27ae60;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
`;

export const DeadStatus = styled.p`
  padding: 0.5rem;
  width: 4.5625rem;
  background-color: #eb5757;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
`;

export const UnknownStatus = styled.p`
  padding: 0.5rem;
  width: 5.5rem;
  background-color: #333333;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
`;