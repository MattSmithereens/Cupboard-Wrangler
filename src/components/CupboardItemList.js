import React from "react";
import { connect } from "react-redux";
import ItemListItem from "./ItemListItem";
import selectItems from "../selectors/items";
// import { sortByDate } from '../actions/filters'

const CupboardItemList = props => (
  <div>
    <h4>{props.items.length === 0 ? "" : "Cupboard List"}</h4>
    <div
      className="
      item-span
    "
    >
      {props.items.map(item => {
        if (item.inCupboard) {
          return <ItemListItem key={item.id} {...item} />;
        }
      })}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    items: selectItems(state.items, state.filters)
  };
};

export default connect(mapStateToProps)(CupboardItemList);
