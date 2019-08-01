import React from "react";
import CupboardItemList from "./CupboardItemList";
import ShoppingList from "./ShoppingList";
import ItemListFilters from "./ItemListFilters";

const EntryList = () => (
  <div className="top-buffer">
    <div className="row">
      <div className="col-sm-6">
        <ShoppingList />
      </div>
      <div className="col-sm-6">
        <CupboardItemList />
      </div>
    </div>
    <br />
  </div>
);

export default EntryList;
