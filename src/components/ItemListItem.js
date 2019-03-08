import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { toggleListItem, removeItem } from '../actions/items'; //doesn't work yet

const ItemListItem = ({ 
  dispatch, 
  id, 
  description,
  inCupboard,
  shelfLife
}) => (
  <li>
    <Link to={`/edit/${id}`}>{description}</Link>&nbsp;
    {inCupboard ? shelfLife : ''}
    {inCupboard.toString()}

    <button
      className="
        mdc-button 
        mdc-button--dense
      "
      
      onClick={() => {
        dispatch(removeItem({ id }));
      }}
    >
      <span className="mdc-button__label">Add to {inCupboard ? 'Shopping' : 'Cupboard'}</span>
    </button>
  </li>
);

export default connect()(ItemListItem)
// export default ItemListItem