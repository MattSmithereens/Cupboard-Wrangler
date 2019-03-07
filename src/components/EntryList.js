import React from 'react';
import ItemList from './ItemList'
import ItemListFilters from './ItemListFilters';

const EntryList = () => (
  <div>
    <ItemListFilters />
    <ItemList />
  </div>
);

export default EntryList