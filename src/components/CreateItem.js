import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { startAddItem } from '../actions/items'

export class CreateItem extends React.Component {
  onSubmit = (item) => {
    this.props.startAddItem(item);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='top-buffer'>
        <h1>add item</h1>
        <ItemForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddItem: (item) => dispatch(startAddItem(item))
});

export default connect(undefined, mapDispatchToProps)(CreateItem);


// old code TOTALLY FUNCTIONAL

// const CreateItem = (props) => (
//   <div>
//     <h1>add item</h1>
//     <ItemForm
//       onSubmit={(item) => {
//         props.dispatch(addItem(item));
//         props.history.push('/');
//       }}
//     />
//   </div>
// );

// export default connect()(CreateItem)