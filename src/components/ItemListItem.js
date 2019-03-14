import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startToggleListItem } from '../actions/items';

const ItemListItem = ({ 
  dispatch, 
  id, 
  description,
  inCupboard,
  shelfLife
}) => (
  <div className='row'>
    <div className='item-info-col'>
      <Link className='item-list-link' to={`/edit/${id}`}>{description}</Link>&nbsp;
    </div> 
    <div className='item-date-info'>
      {inCupboard ? shelfLife : ''}
    </div>
    <div className='item-button-col'>
      <button
        className="
          mdc-button 
          mdc-button--unelevated
          mdc-button--dense
        "
        onClick={() => {
          console.log(`Id in onClick: ${id}`);
          dispatch(startToggleListItem(id, inCupboard));
        }}
        >
        <span className="
          mdc-button__label
          bought-used-button
        ">{inCupboard ? 'used' : 'bought'}</span>
      </button>
    </div>
  </div>
);

export default connect()(ItemListItem)