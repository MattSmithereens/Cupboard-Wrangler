import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startToggleListItem } from '../actions/items';

const ItemListItem = ({ 
  dispatch, 
  id,
  note, 
  amount,
  description,
  inCupboard,
  shelfLife
}) => (
  <div className='row'>
    <div className='item-info-col'>
      <Link 
        className='item-list-link' 
        // render red asterisk if item has notes
        to={`/edit/${id}`}>{description}<span className='red'>{note ? '*' : ''}</span>
      </Link>&nbsp;
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
          dispatch(startToggleListItem(id, inCupboard, amount));
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