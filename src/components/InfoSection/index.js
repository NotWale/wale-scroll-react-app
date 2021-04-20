import React, { useState, useEffect } from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
}) => {
  const [isVis, setIsVis] = useState(false);

  const toggleVis = () => {
    if (window.scrollY >= 550) {
      setIsVis(true);
    } else {
      setIsVis(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVis);
  }, []);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column>
              <TextWrapper isVis={isVis}>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={3000}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
