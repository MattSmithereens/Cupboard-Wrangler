import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items'

const ShoppingList = (props) => (
  <div>
    <h4>Shopping List</h4>
    <div>
      <NavLink to='/Create' className='red'>{props.items.length === 0 ? 'Let\'s start adding items to your list!' : ''}</NavLink>
      {props.items.map((item) => {
        if (!item.inCupboard) {
          return <ItemListItem key={item.id} {...item} />
        }
      })}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: selectItems(state.items, state.filters)
  };
}

export default connect(mapStateToProps)(ShoppingList);

