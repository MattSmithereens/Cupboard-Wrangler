import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ItemListFilters = (props) => (
  <div>
    Filter by text:<input
      type='text'
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }} />

    <select                                      //filter dropdown
      value={props.filters.sortBy}               //props.filters.options also works
      onChange={(e) => {
        if (e.target.value === 'amount') {
          props.dispatch(sortByAmount())
        } else if (e.target.value === 'date') {
          props.dispatch(sortByDate())
        }
      }}>
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

const MapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(MapStateToProps)(ItemListFilters);