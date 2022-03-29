import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EcourbanhubLogo from "./ecourbanhub.png";
import jsonMenu from "../../data/menu";
import "./header.css";
import MenuChildrenItems from "./menuChildrenItems";

function HorizontalMenu(props) {
  const [mobileView, setMobileView] = useState(false);
  const toggle = () => setMobileView(!mobileView);
  // Hover construction
  // Desktop

  // Check if state loaded
  const authInfo = props.auth;
  if (authInfo) {
    var auth = authInfo.isAuthenticated;
    var authLoading = authInfo.loading;
    // setSAD(user.uR.SAD.status);
  }

  // Menu with submenu items
  const menuChildren = (i) => {
    if (
      (i.login == true && auth == true) ||
      (i.logout == true && auth == false)
    ) {
      return MenuChildrenItems({ i, authInfo });
    } else {
      return null;
    }
  };

  // Menu without submenu items
  const menuNoChildren = (i) => {
    // if (i.login == true && auth == true) {
    if (1 == 1) {
      return (
        <li key={i.id}>
          <NavLink
            className="nav-link"
            to={i.navLink}
            activeClassName="is-active">
            {i.title}
          </NavLink>
        </li>
      );
    } else if (i.logout == true && auth == false) {
      return (
        <li key={i.id}>
          <NavLink
            className="nav-link"
            to={i.navLink}
            activeClassName="is-active">
            {i.title}
          </NavLink>
        </li>
      );
    } else {
      return null;
    }
  };

  const renderMenu = (items) => {
    return (
      <ul>
        {items.map((i) => {
          return i.childrenCheck ? menuChildren(i) : menuNoChildren(i);
        })}
      </ul>
    );
  };

  //   jsonMenu.map((i) => {
  //     i.childrenCheck ? console.log(menuChildren(i)) : console.log(i.title);
  //   });

  const Menu = ({ data }) => {
    return (
      <Fragment>
        {/* <h2>{data.title}</h2> */}
        {renderMenu(data)}
      </Fragment>
    );
  };

  // Definition of Render Condition //
  if (authInfo) {
    if (authLoading == false) {
      var renderAllowance = true;
    } else {
      var renderAllowance = false;
    }
  }

  return renderAllowance !== true ? null : (
    <Fragment>
      <section className="navigation">
        <div className="nav-container">
          <Link className="brand" to="/">
            <img src={EcourbanhubLogo} alt="Ecourbanhub" />
          </Link>

          <nav>
            <div className="nav-mobile">
              <a
                id="nav-toggle"
                href="#!"
                onClick={toggle}
                className={mobileView ? "active" : ""}>
                <span></span>
              </a>
            </div>
            <ul className={mobileView ? "nav-list" : "nav-list-none"}>
              <Menu data={jsonMenu} />
            </ul>
          </nav>
        </div>
      </section>
    </Fragment>
  );
}

HorizontalMenu.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(HorizontalMenu);
