import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { toggleListItem, removeItem } from '../actions/items';

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
        dispatch(toggleListItem({ id })); // removeItem works
      }}
    >
      <span className="mdc-button__label">{inCupboard ? 'used' : 'bought'}</span>
    </button>
  </li>
);

export default connect()(ItemListItem)