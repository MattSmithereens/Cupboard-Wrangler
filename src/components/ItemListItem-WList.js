import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startToggleListItem } from '../actions/items';
import Button from '@material-ui/core/Button';
import moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import { sortByDate } from '../actions/filters'

const now = new moment().format();
const soon = new moment().add(2, 'day').format();

function ListItemLink(props) {
  console.log('clicked');
  // return <ListItem button component="a" {...props} />;
}

// const 

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
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItemLink href={`/edit/${id}`}>
        <ListItemText primary="Spam" />
      </ListItemLink>
    </List>
      <ListItem className='list-item' button to={`/edit/${id}`}>
        <ListItemText inset primary={description} />
        <span className='red'>{note ? '* ' : ' '}</span>
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
      </ListItem>
  </div></div>
);

export default connect()(ItemListItem)
