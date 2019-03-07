import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/items'

const RemoveButton = (props) => {
  return (
    <div>
      <button
        onClick={(e) => {
          console.log(props);
          // not referencing props correctly

          // props.dispatch(removeItem({ id: props.item.id }))
          // props.history.push('/');
        }}
        className="mdc-button mdc-button mdc-button--dense">
        <span className="mdc-button__label">discard component</span>
      </button>
    </div>
  )
}

export default connect()(RemoveButton)