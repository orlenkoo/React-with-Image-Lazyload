import React, { createContext, useContext } from "react";
import { useToggle } from "./useToggle";

const initialState = {
  isMenuOpen: false,
  toggle: () => {},
};

export const MenuContext = createContext(initialState);

export const MenuProvider = ({ children }) => {
  const { isToggled, setToggle, toggle } = useToggle(false);
  const closeMenu = () => setToggle(false);
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
        closeMenu,
      }}>
      {children}
    </MenuContext.Provider>
  );
};

export const stateMenuContext = () => {
  return useContext(MenuContext);
};
