import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startToggleListItem } from '../actions/items';
import Button from '@material-ui/core/Button';
import moment from 'moment';
// import { sortByDate } from '../actions/filters'

const now = new moment().format();
const soon = new moment().add(2, 'day').format();

const ItemListItem = ({ 
  dispatch, 
  id,
  note, 
  amount,
  description,
  inCupboard,
  shelfLife,
  parseDate
}) => (
  <div className='item-row'>
    <div className='item-info-col'>
      <Link 
        className='item-list-link' 
        to={`/edit/${id}`}>
          {description}
        <span className='red'>{note ? '* ' : ' '}</span>
      </Link>
    </div> 
    <div className='item-date-info'>
      {inCupboard ? ' ' + shelfLife + ' ' : ''}
    </div>
    <div className='item-button-col'>
      <Button        
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
      ">
        {inCupboard && (parseDate < now) ? <i className="fas fa-exclamation-triangle bad-now"></i> : ''}
        {inCupboard && (parseDate <= soon && parseDate >= now) ? <i className="fas fa-exclamation-triangle bad-soon"></i> : ''}
        {inCupboard ? 'used' : 'bought'}
      </span>
      </Button>
    </div>
  </div>
);

export default connect()(ItemListItem)

