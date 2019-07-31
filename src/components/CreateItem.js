import React from "react";
import { connect } from "react-redux";
import ItemForm from "./ItemForm";
import { startAddItem } from "../actions/items";

export class CreateItem extends React.Component {
  onSubmit = item => {
    this.props.startAddItem(item);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="top-buffer">
        <h1>Add Item</h1>
        <ItemForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddItem: item => dispatch(startAddItem(item))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CreateItem);
