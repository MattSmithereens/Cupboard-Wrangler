import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items'

const ItemList = (props) => (

  // make ternary operator and only render if items exist in list

  <div>
    <p>Shopping List</p>
    <ul>
      {props.items.map((item) => {
        if (!item.inCupboard) {
          return <ItemListItem key={item.id} {...item} />
        }
      })}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: selectItems(state.items, state.filters)
  };
}

export default connect(mapStateToProps)(ItemList);

