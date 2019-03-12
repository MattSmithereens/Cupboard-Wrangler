import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className='title'><h3>Cupboard Wrangler!</h3></div>
    <div classname='options'>
      <p>
        <NavLink to='/Create' activeClassName='isActive'>Add Item</NavLink> |
        <NavLink to='/' activeClassName='isActive' exact={true}>Shopping List</NavLink> |
        <NavLink to='/Help' activeClassName='isActive'>Help</NavLink>
      </p>
    </div>
  </header>
)

export default Header;

// <NavLink to='/Cupboard' activeClassName='isActive' exact={true}>Cupboard Inventory</NavLink> |