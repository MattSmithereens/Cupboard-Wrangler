import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Header = ({ startLogout }) => (
  <header className="mdc-top-app-bar mdc-top-app-bar--short">
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <NavLink to='/Create' className="material-icons mdc-top-app-bar__navigation-icon"><i className="fas fa-plus"></i></NavLink>
        <NavLink to='/Dashboard'><span className="mdc-top-app-bar__title white-text">Cupboard Wrangler</span></NavLink>
      </section>
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <NavLink to='/About' className="material-icons mdc-top-app-bar__navigation-icon" alt="About"><i className="fas fa-question"></i></NavLink>
        <NavLink to='/' onClick={startLogout} className="material-icons mdc-top-app-bar__navigation-icon"><i className="fas fa-sign-out-alt"></i></NavLink>
      </section>
    </div>
    <br />



    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            React and Material UI
          </Typography>
        </Toolbar>
      </AppBar>
    </div>




  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);