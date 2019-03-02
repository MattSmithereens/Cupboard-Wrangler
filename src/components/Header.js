import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>The Header</h1>
    <div>
      <NavLink to='/' activeClassName='isActive' exact={true}>Home</NavLink> |
      <NavLink to='/Create' activeClassName='isActive'>Add Item</NavLink> |
      <NavLink to='/Edit' activeClassName='isActive'>Edit Item</NavLink> |
      <NavLink to='/Help' activeClassName='isActive'>Help</NavLink> |
    </div>
  </header>
)

export default Header;