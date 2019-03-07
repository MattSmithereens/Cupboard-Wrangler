import React from 'react';
import moment from 'moment';
import { removeItem } from '../actions/items'

const now = moment();
// picker code in ItemFormDates.js

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.item ? props.item.description : '',
      note: props.item ? props.item.note : '',
      amount: props.item ? (props.item.amount).toString() : '',
      error: '',
    };
  }
  


  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {  //expression for currency format  regex101.com to generate
      this.setState(() => ({ amount }))
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide an item name' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseInt(this.state.amount),
        note: this.state.note
      })
    }
  };


  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Descritption'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <br />
          <input
            type='number'
            placeholder='Quantity'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <br />
          <input
            type='number'
            placeholder='Shelf Life; not wired up yet'
          />


          <textarea 
            placeholder='Item notes (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          >

          </textarea>
          <button
            className="
            mdc-button 
            mdc-button--unelevated 
            mdc-button--dense">
            <span className="mdc-button__label">add</span>
          </button>
        </form>
      </div>
    )
  }
}