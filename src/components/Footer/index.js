import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  FooterCopy,
} from "./FooterElements";

const Footer = ({ openPopup }) => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/works" onClick={openPopup}>
                How it works
              </FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <FooterCopy>Coded by Valentin</FooterCopy>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
