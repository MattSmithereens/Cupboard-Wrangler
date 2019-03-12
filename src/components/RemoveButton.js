import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/items'

const RemoveButton = ({ dispatch, id, description, shelfLife, amount, createdAt }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          console.log(props);
          // not referencing props correctly

          dispatch(removeItem({ id: props.item.id }))
          // props.history.push('/');
        }}
        className="mdc-button mdc-button mdc-button--dense">
        <span className="mdc-button__label">discard component</span>
      </button>
    </div>
  )
}

export default connect()(RemoveButton)