import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="mdc-top-app-bar mdc-top-app-bar--short">
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <NavLink to='/Create' className="material-icons mdc-top-app-bar__navigation-icon"><i className="fas fa-plus"></i></NavLink>
        <NavLink to='/' exact={true}><span className="mdc-top-app-bar__title white-text">Cupboard Wrangler</span></NavLink>
      </section>
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <NavLink to='/' className="material-icons mdc-top-app-bar__navigation-icon"><i className="fas fa-clipboard-list"></i></NavLink>
        <NavLink to='/About' className="material-icons mdc-top-app-bar__navigation-icon" alt="About"><i className="fas fa-question"></i></NavLink>
      </section>
    </div>
  </header>
)

export default Header;

// <NavLink to='/Cupboard' activeClassName='isActive' exact={true}>Cupboard Inventory</NavLink> |
// <NavLink to='/Help' activeClassName='isActive'>Help</NavLink>