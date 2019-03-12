import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { addItem } from '../actions/items'

const CreateItem = (props) => (
  <div>
    <h1>add item</h1>
    <ItemForm
      onSubmit={(item) => {
        props.dispatch(addItem(item));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(CreateItem)