import styled from "styled-components";

export const BackgroundContainer = styled.aside`
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  opacity: ${({ popOpen }) => (popOpen ? "0.8" : "0")};
  visibility: ${({ popOpen }) => (popOpen ? "visible" : "hidden")};
`;
