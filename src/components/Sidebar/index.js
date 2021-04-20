import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="Section1"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Click
          </SidebarLink>
          <SidebarLink
            to="Section1"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            To
          </SidebarLink>
          <SidebarLink
            to="Section1"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Scroll
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
