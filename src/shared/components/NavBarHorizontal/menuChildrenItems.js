import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

function MenuChildrenItems({ i, authInfo }) {
  var auth = authInfo.isAuthenticated;
  var pm = authInfo.pm;

  // nav sub menu open/close
  const [hover, setHover] = useState("nav-dropdown-none");
  const setDropdown = (hover) => {
    setHover(hover);
  };

  // expand if mobile
  const mobileClick = () => {
    if (window.innerWidth < 899) {
      if (hover == "nav-dropdown-none") {
        setHover("nav-dropdown");
      } else {
        setHover("nav-dropdown-none");
      }
    } else null;
  };

  // expand if desktop
  const desktopClickE = () => {
    if (window.innerWidth > 899) {
      setHover("nav-dropdown");
    } else null;
  };

  const desktopClickO = () => {
    if (window.innerWidth > 899) {
      setHover("nav-dropdown-none");
    } else null;
  };

  // Check and compare pm's
  function checkAllPm(menuPm, pm) {
    let check = [];
    let display;
    if (pm !== null) {
      menuPm.map((m) => {
        if (pm.includes(m)) {
          check.push(m);
        }
      });
    } else null;
    check.length > 0 ? (display = true) : (display = false);

    return display;
  }

  return (
    <Fragment>
      {
        // Check whether displayed login or/and logout
        ((auth == true && i.login == true) ||
          (auth == false && i.logout == true)) &&
        // Check if user rights are meet
        (i.pm.includes("all") || checkAllPm(i.pm, pm)) ? (
          <li key={i.id}>
            {" "}
            <a
              className="nav-link"
              activeClassName="is-active"
              onMouseEnter={desktopClickE}
              onMouseOut={desktopClickO}
              onClick={mobileClick}>
              {i.title}
            </a>
            {/* <NavLink
              className="nav-link"
              to={i.navLink}
              // onMouseEnter={() => setDropdown("nav-dropdown")}
              // onMouseOut={() => setDropdown("nav-dropdown-none")}
              onMouseEnter={desktopClick}
              onMouseOut={desktopClick}
              onClick={mobileClick}
              activeClassName="is-active"
              exact={true}>
              {i.title}
            </NavLink> */}
            <ul key="subMenu2" className={hover}>
              {i.children.map((c) => {
                if (
                  // Check whether displayed login or/and logout
                  ((auth == true && c.login == true) ||
                    (auth == false && c.logout == true)) &&
                  // Check if user rights are meet
                  (c.pm.includes("all") || checkAllPm(c.pm, pm))
                ) {
                  return (
                    <li
                      key={c.id}
                      // onMouseEnter={() => setDropdown("nav-dropdown")}
                      // onMouseOut={() => setDropdown("nav-dropdown-none")}
                      onMouseEnter={desktopClickE}
                      onMouseOut={desktopClickO}>
                      <NavLink
                        className="nav-link"
                        to={c.navLink}
                        activeClassName="is-active">
                        {c.title}
                      </NavLink>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        ) : null
      }
    </Fragment>
  );
}

export default MenuChildrenItems;
