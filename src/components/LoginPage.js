import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// import { MDCRipple } from '@material/ripple';

// const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box">
      <Typography>
        <h2>Cupboard Wrangler</h2>
        <p className="splash-text">
          Organize your pantry and
          <br />
          make shopping lists!
        </p>
      </Typography>
      <Button
        onClick={startLogin}
        className="
          mdc-button
          mdc-button--unelevated
        "
      >
        <span className="mdc-button__label">Login with google</span>
      </Button>
    </div>
  </div>
);

const mapDispathToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispathToProps
)(LoginPage);
