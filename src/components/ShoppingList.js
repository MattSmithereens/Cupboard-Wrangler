import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items'

const ShoppingList = (props) => (

  // make ternary operator and only render if items exist in list

  <div>
    <p>Shopping List</p>
    <div>
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

