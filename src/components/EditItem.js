import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { startEditItem, startRemoveItem } from '../actions/items';

const EditItem = (props) => {
  return (
    <div>
      <h1>edit item</h1>
      <ItemForm
        item={props.item}
        onSubmit={(item) => {
          props.dispatch(startEditItem(props.item.id, item));
          props.history.push('/');
        }}
      />
      <button
        onClick={(e) => {
          props.dispatch(startRemoveItem({ id: props.item.id }))
          props.history.push('/');
        }}
        className="mdc-button mdc-button mdc-button--dense">
        <span className="mdc-button__label">discard</span>
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    item: state.items.find((item) => {
      return item.id === props.match.params.id;
    })
  }
};

export default connect(mapStateToProps)(EditItem)