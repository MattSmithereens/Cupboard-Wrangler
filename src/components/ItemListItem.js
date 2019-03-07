import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/items'

const ItemListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <li>
    {description}
    {amount}
    {createdAt}

    <button
      // onClick={(e) => {
      //   props.handleDeleteOption(props.optionText);
      // }}

      className="mdc-button mdc-button--unelevated mdc-button--dense" disabled>
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
