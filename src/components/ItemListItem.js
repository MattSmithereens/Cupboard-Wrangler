import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startToggleListItem } from '../actions/items';
import moment from 'moment';const now = new moment().format('L');

const soon = new moment().add(2, 'day').format('L');
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
        to={`/edit/${id}`}>
          {inCupboard && (shelfLife < now) ? <i className="fas fa-exclamation-triangle bad-now"></i> : ''}
          {inCupboard && (shelfLife <= soon && shelfLife >= now) ? <i className="fas fa-exclamation-triangle bad-soon"></i> : ''}
          {description}
        <span className='red'>{note ? '*' : ''}</span>
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