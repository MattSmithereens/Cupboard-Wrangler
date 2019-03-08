import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { toggleListItem } from '../actions/items'; //doesn't work yet

const ItemListItem = (props) => (
  <li>
    <Link to={`/edit/${props.id}`}>{props.description}</Link>&nbsp;
    {props.shelfLife}&nbsp;
    {props.amount}
    {props.inCupboard}

    <button
      className="mdc-button mdc-button--unelevated mdc-button--dense"
      onSubmit={(item) => {
        props.dispatch(toggleListItem(props.item.id, item));
      }}

    >
      <span className="mdc-button__label">Add</span>
    </button>
  </li>
);

// legit don't know how to code this part
// const mapStateToProps = (state, props) => {
//   return {
//     item: state.items.find((item) => {
//       return item.id === props.match.params.id;
//     })
//   }
// };

export default connect()(ItemListItem)