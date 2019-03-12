import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items'

const CupboardItemList = (props) => (
  <div>
    <p>Cupboard List</p>
    <div className='
    itemDiv
    cupboardItemDiv
    '>
      {props.items.map((item) => {
        if (item.inCupboard) {
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

export default connect(mapStateToProps)(CupboardItemList);

