import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ItemForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

<SingleDatePicker
  date={this.state.createdAt}
  onDateChange={this.onDateChange}
  focused={this.state.calendarFocused}
  onFocusChange={this.onFocusChange}
/>

// playing with date object to sort items by shelf life
// const tomorrow = moment().add(1, 'days').calendar()
// const week = moment().add(7, 'days').calendar()
// console.log(tomorrow < week);
// console.log(now.add(3, 'day').format('LL') < now.add(4, 'day').format('LL'));
