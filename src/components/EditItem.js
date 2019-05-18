import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { startEditItem, startRemoveItem } from '../actions/items';
import Button from '@material-ui/core/Button';

const EditItem = (props) => {
  return (
    <div className='top-buffer'>
      <h1>Edit Item</h1>
      <ItemForm
        item={props.item}
        onSubmit={(item) => {
          props.dispatch(startEditItem(props.item.id, item));
          props.history.push('/');
        }}
      />
      <div className='center-element'>
        <Button
          variant='outlined'
          color='secondary'
          onClick={(e) => {
            props.dispatch(startRemoveItem({ id: props.item.id }))
            props.history.push('/');
          }}
          className='
            mdc-button 
            button-120
            discard-button
          '>
          <span className="mdc-button__label">discard</span>
        </Button>
      </div>
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