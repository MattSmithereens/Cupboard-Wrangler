import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className='jumbotron'><h1>Cupboard Wrangler!</h1></div>
    <div>
      <p>
        <NavLink to='/Create' activeClassName='isActive'>Add Item</NavLink> |
      <NavLink to='/' activeClassName='isActive' exact={true}>Shopping List</NavLink> |
  
      <NavLink to='/Help' activeClassName='isActive'>Help</NavLink> |
    </p>
    </div>
  </header>
)

export default Header;

// <NavLink to='/Cupboard' activeClassName='isActive' exact={true}>Cupboard Inventory</NavLink> |