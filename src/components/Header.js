import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  // <header>
  //   <div className='flex-box-container'>
  //     <div className='title container'><h3>Cupboard Wrangler!</h3></div>
  //     <div className='options container'>
  //       <p>
  //         <NavLink to='/Create' activeClassName='isActive'>Add Item</NavLink> |
  //       <NavLink to='/' activeClassName='isActive' exact={true}>Shopping List</NavLink> |
  //       <NavLink to='/About' activeClassName='isActive'>About</NavLink>
  //       </p>
  //     </div>
  //   </div>
  // </header>

  <header class="mdc-top-app-bar mdc-top-app-bar--short">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <NavLink to='/Create' className="material-icons mdc-top-app-bar__navigation-icon"><i class="fas fa-plus"></i></NavLink>
        <span class="mdc-top-app-bar__title">Cupboard Wrangler</span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <NavLink to='/' className="material-icons mdc-top-app-bar__navigation-icon"><i class="fas fa-clipboard-list"></i></NavLink>
        <NavLink to='/About' className="material-icons mdc-top-app-bar__navigation-icon" alt="About"><i class="fas fa-question"></i></NavLink>
      </section>
    </div>
  </header>


)

export default Header;

// <NavLink to='/Cupboard' activeClassName='isActive' exact={true}>Cupboard Inventory</NavLink> |
// <NavLink to='/Help' activeClassName='isActive'>Help</NavLink>