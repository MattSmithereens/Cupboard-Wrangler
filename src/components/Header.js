import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Cupboard Wrangler!</h1>
    <p>
      <NavLink to='/Create' activeClassName='isActive'>Add Item</NavLink> |
      <NavLink to='/' activeClassName='isActive' exact={true}>Shopping List</NavLink> |
      <NavLink to='/Cupboard' activeClassName='isActive' exact={true}>Cupboard Inventory</NavLink> |
      <NavLink to='/Help' activeClassName='isActive'>Help</NavLink> |
    </p>
  </header>
)

export default Header;