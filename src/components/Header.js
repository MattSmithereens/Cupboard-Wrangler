import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
// import HeaderMDC from './Header-MDC'; hamburger menu

export const LogoutIcon = ({ startLogout }) => (
  <NavLink
    to="/"
    onClick={startLogout}
    className="material-icons mdc-top-app-bar__navigation-icon"
  >
    <i className="fas fa-sign-out-alt" />
  </NavLink>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LogoutIcon);
