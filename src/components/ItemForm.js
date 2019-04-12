import React from 'react';
// import moment from 'moment';
// import { removeItem } from '../actions/items'
// import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

// const now = new moment();
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
    if (!amount || amount.match(/^\d{1,}$/)) {  //expression for currency format  regex101.com to generate /^\d{1,}(\.\d{0,2})?$/
      this.setState(() => ({ amount }))
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide an item name' }));
    } else if (!this.state.amount) {
      this.setState(() => ({ error: 'Please provide a shelf life duration'}))
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseInt(this.state.amount),
        note: this.state.note,
        //inCupboard: this.state.inCupboard,
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>

          <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
            <input 
              type="text" 
              className="mdc-text-field__input" 
              aria-label="Label" 
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
              placeholder='Description'
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
          <br />
        
          <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
            <input 
              className="mdc-text-field__input" 
              aria-label="Label" 
              type='number'
              max='365'
              placeholder='Shelf Life (in days)'
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
          <br />
          
          <div className="mdc-text-field mdc-text-field--textarea">
            <textarea 
              id="textarea" 
              className="mdc-text-field__input" 
              placeholder='Item notes (optional)'
              rows="4" 
              cols="36"
              value={this.state.note}
              onChange={this.onNoteChange}>
            </textarea>
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch">
                <label className="mdc-floating-label"></label>
              </div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
          <br />
          <p className='small-text'>Annoted items are indicated with: <span className='red'>*</span></p>
          <br />
          <button
            className="
            mdc-button 
            mdc-button--unelevated 
            mdc-button--dense">
            <span className="mdc-button__label">submit</span>
          </button>
        </form>
      </div>
    )
  }
}