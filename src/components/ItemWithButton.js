import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const now = moment();
// picker code in ItemFormDates.js

export default class ItemWithButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inCupboard: props.item ? props.item.inCupboard : '',
    };
  }

  onInCupboardChange = (e) => {
    const inCupboard = e.target.value;
    this.setState(() => ({ inCupboard: !inCupboard }));
  };

  render(props) {
    return (
      <div>
        <li>
          <Link to={`/edit/${props.item.id}`}>{props.item.description}</Link>&nbsp;
          {props.item.shelfLife}&nbsp;
          {props.item.inCupboard.toString()}


        </li>
      </div>
    )
  }
}
