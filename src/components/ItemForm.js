import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { deepOrange } from '@material-ui/core/colors';
// import moment from 'moment';
// import { removeItem } from '../actions/items'
// import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

// const now = new moment();
// picker code in ItemFormDates.js

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: deepOrange[400],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: deepOrange[400],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: deepOrange[400],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

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
    } else if ((this.state.description).includes('ustache')) {
      this.setState(() => ({ error: 'No mustaches, please' })) 
    } else if (
      (this.state.description).includes('fuck') ||
      (this.state.description).includes('shit') ||
      (this.state.description).includes('piss') ||
      (this.state.description).includes('cunt') ||
      (this.state.description).includes('ildo')) {
      this.setState(() => ({ error: 'Stop being a jackass' }))   
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
          <TextField
            autofocus
            id="outlined-textarea"
            label="Description"
            placeholder="Required"
            margin="normal"
            variant="outlined"
            className='text-field'
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoComplete='off'
          />
          <TextField
            id="outlined-textarea"
            label="Shelf Life (in days)"
            placeholder="Required"
            type="number" 
            min="0" 
            max="3650"
            margin="normal"
            variant="outlined"
            className='text-field'
            value={this.state.amount}
            onChange={this.onAmountChange}
            autoComplete='off'
          />
          <TextField
            id="outlined-textarea"
            label="Notes"
            placeholder="Optional"
            margin="normal"
            variant="outlined"
            className='text-field'
            multiline
            rowsMax="4"
            helperText='Annoted items are indicated with an asterisk'
            value={this.state.note}
            onChange={this.onNoteChange}
            autoComplete='off'
          />
          <div className='center-element'>
            <Button
              className="
              mdc-button 
              mdc-button--unelevated 
              button-120"
              onClick={this.onSubmit}>
              <span className="mdc-button__label">submit</span>
            </Button>
          </div>
        </form>
      </div>
    )
  }
}
