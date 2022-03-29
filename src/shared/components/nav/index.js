import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { MenuProvider } from "../../functions/stateMenu";

const Navbar = () => {
  return (
    <MenuProvider>
      <Nav>
        <DesktopNav />
        <MobileNav />
      </Nav>
    </MenuProvider>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
