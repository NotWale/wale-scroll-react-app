import styled from "styled-components";

export const PopupModal = styled.aside`
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 25%);
  transition: 0.3s ease-in-out;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 999;
  background-color: #0d0d0d;
  color: #fff;
  width: 674px;
  max-width: 80%;
  visibility: hidden;
  opacity: ${({ popOpen }) => (popOpen ? "100%" : "0")};
  bottom: ${({ popOpen }) => (popOpen ? "50%" : "-50%")};
  visibility: ${({ popOpen }) => (popOpen ? "visible" : "hidden")};
`;

export const PopupHeader = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const PopupTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const PopupClose = styled.div`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const PopupBody = styled.div`
  padding: 10px 15px;
`;
