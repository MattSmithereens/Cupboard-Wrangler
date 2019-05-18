import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters'
// import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

class ItemListFilters extends React.Component {

  handleClickClearField = () => {
    console.log(this.props.filters.text, this);
    this.setState(state => ({ text: null }));
  }

  render() {
    return (
      <div className="bottom-buffer">
        <TextField
          label="Item Search"
          placeholder="Start typing to filter items"
          className='text-field'
          variant="outlined"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Clear search field"
                  onClick={this.handleClickClearField}
                >
                  <i className="fas fa-backspace"></i>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    )
  };
}

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




    // old textfield that works
  //   <TextField
  //   id="outlined-textarea"
  //   label="Item Search"
  //   placeholder="Start typing to filter items"
  //   margin="normal"
  //   variant="outlined"
  //   className='text-field'
  //   value={props.filters.text}
  //   onChange={(e) => {
  //     props.dispatch(setTextFilter(e.target.value))
  //   }}
  // />
  // <br />