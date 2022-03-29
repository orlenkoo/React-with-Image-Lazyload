import React, { useEffect } from "react";
import styled from "styled-components";
import { stateMenuContext } from "../../functions/stateMenu";
import { useScrollFreeze } from "../../functions/useScrollFreeze";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  const { isMenuOpen } = stateMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background: var(--bg); */
  display: flex;
  justify-content: center;
  align-items: center;
`;
