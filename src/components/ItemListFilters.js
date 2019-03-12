import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters'
// import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ItemListFilters = (props) => (

  <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
    <input
      type="text"
      className="mdc-text-field__input"
      aria-label="Label"
      placeholder='Item Search'
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }} />
    <div className="mdc-notched-outline">
      <div className="mdc-notched-outline__leading"></div>
      <div className="mdc-notched-outline__trailing"></div>
    </div>
  </div>

);

const MapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(MapStateToProps)(ItemListFilters);


// <select                                      //filter dropdown
// value={props.filters.sortBy}               //props.filters.options also works
// onChange={(e) => {
//   if (e.target.value === 'amount') {
//     props.dispatch(sortByAmount())
//   } else if (e.target.value === 'date') {
//     props.dispatch(sortByDate())
//   }
// }}>
// <option value='date'>Date</option>
// <option value='amount'>Amount</option>
// </select>









    // <p>Filter by text:


    // <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
    //     <input
    //       type="text"
    //       class="mdc-text-field__input"
    //       aria-label="Label"
    //       type='text'
    //       value={props.filters.text}
    //       onChange={(e) => {
    //         props.dispatch(setTextFilter(e.target.value))
    //       }} />
    //     <div class="mdc-notched-outline">
    //       <div class="mdc-notched-outline__leading"></div>
    //       <div class="mdc-notched-outline__trailing"></div>
    //     </div>
    //   </div>
    // </p>