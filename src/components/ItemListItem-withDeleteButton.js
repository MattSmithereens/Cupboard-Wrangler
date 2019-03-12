import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../actions/items'

const ItemListItem = ({ dispatch, id, description, shelfLife, amount, createdAt }) => (
  <li>
    <Link to={`/edit/${id}`}>{description}</Link>&nbsp;
    {shelfLife}&nbsp;
    {amount}

    <button
      className="
        mdc-button
        mdc-button--unelevated
        mdc-button--dense" 
      disabled>
      <span className="mdc-button__label">Add</span>
    </button>


    <button
      onClick={(e) => {
        dispatch(removeItem({ id }))
      }}
      className="mdc-button mdc-button mdc-button--dense">
      <span className="mdc-button__label">discard</span>
    </button>
  </li>
);

export default connect()(ItemListItem);