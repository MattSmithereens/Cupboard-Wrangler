import React from 'react';
import CupboardItemList from './CupboardItemList'
import ItemListFilters from './ItemListFilters';
import ShoppingList from './ShoppingList';

const EntryList = () => (
  <div>
    <ItemListFilters />
    <ShoppingList />
    <hr />
    <CupboardItemList />
  </div>
);

export default EntryList