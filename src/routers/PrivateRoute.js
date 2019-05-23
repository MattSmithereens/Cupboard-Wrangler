import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'; // replace HeaderMDC to put in older, fuctional header

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div className='main-margins'>
        <Header />
        <Component {...props} />
      </div>
    ) : (
        <Redirect to='/' />
      )
  )} />
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);