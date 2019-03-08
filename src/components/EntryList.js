import React from 'react';
import ItemList from './ItemList'
import ItemListFilters from './ItemListFilters';
import ShoppingList from './ShoppingList';

const EntryList = () => (
  <div>
    <ItemListFilters />
    <ShoppingList />
    <br />
    <hr />
    <ItemList />
  </div>
);

export default EntryList