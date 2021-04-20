import styled from "styled-components";

export const InfoContainer = styled.div`
  color: black;
  background: ${({ lightBg }) => (lightBg ? "#f2f2fc" : "black")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: flex;
  /* grid-auto-columns: minmax(auto, 1fr); */
  align-items: center;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const TextWrapper = styled.div`
  max-width: 740px;
  padding-top: 0;
  padding-bottom: 60px;
  transform: translateY(20px);
  transition: 0.5s all ease-in-out;
  opacity: ${({ isVis }) => (isVis ? "1" : "0")};
  transform: ${({ isVis }) => (isVis ? "translateY(50px)" : "translateY(0)")};
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#black")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  display: flex;
  justify-content: center;
  max-width: 840px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  margin: 100px;
  justify-content: center;
`;
