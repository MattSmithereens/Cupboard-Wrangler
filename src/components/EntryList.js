import React from 'react';
import CupboardItemList from './CupboardItemList'
import ItemListFilters from './ItemListFilters';
import ShoppingList from './ShoppingList';

const contents = '<ItemListFilters /><ShoppingList /><hr /><CupboardItemList />';

const EntryList = () => (
  <div className='top-buffer'>
    <ItemListFilters />
    <ShoppingList />
    <hr />
    <CupboardItemList />
    <br />
  </div>
);

export default EntryList