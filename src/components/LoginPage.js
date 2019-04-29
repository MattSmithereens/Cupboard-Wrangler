import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className='top-buffer'>
    <div className='login-centered'>
    <button
      onClick={startLogin}
      className="
        top-buffer
        mdc-button
        mdc-button--unelevated
      ">
      <span className="mdc-button__label">Login</span>
    </button>
    </div>
  </div>
);

const mapDispathToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispathToProps)(LoginPage);