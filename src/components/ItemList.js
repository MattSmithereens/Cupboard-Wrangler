import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items'

const ItemList = (props) => (
  <div>
    <p>Items List</p>
    <ul>
      {props.items.map((item) => {
        return <ItemListItem key={item.id} {...item} />
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

