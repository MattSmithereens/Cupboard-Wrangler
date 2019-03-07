import React from 'react';
import { Link } from 'react-router-dom';

const ItemListItem = ({ dispatch, id, description, shelfLife, amount, createdAt }) => (
  <li>
    <Link to={`/edit/${id}`}>{description}</Link>&nbsp;
    {shelfLife}&nbsp;
    {amount}

    <button
      className="mdc-button mdc-button--unelevated mdc-button--dense" disabled>
      <span className="mdc-button__label">Add</span>
    </button>
  </li>
);

export default ItemListItem;