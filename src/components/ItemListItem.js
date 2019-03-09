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
  <div>
    <div>
      <Link to={`/edit/${id}`}>{description}</Link>&nbsp;
      {inCupboard ? shelfLife : ''}
    </div>
    <div>
      <button
      className="
        mdc-button 
        mdc-button--outlined
        mdc-button--dense
      "
      onClick={() => {
        dispatch(toggleListItem({ id })); // removeItem works
      }}
    >
      <span className="mdc-button__label">{inCupboard ? 'used' : 'bought'}</span>
    </button>
    </div>
  </div>
);

export default connect()(ItemListItem)