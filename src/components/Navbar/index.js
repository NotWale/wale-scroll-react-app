import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { NeonButton } from "../ButtonElement";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinks2,
  NavBtn,
} from "./NavbarElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Dev Scroll
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="Section1"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Scroll Down
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks2 to="/" onClick={toggleHome}>
                Scroll Up
              </NavLinks2>
            </NavItem>
            <NavBtn>
              <NeonButton>stop</NeonButton>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
