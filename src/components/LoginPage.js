import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div>
    <button
      onClick={startLogin}
      className="
        mdc-button
        mdc-button--unelevated
      ">
      <span className="mdc-button__label">Login</span>
    </button>
  </div>
);

const mapDispathToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispathToProps)(LoginPage);