import React from 'react';
import CupboardItemList from './CupboardItemList'
import ItemListFilters from './ItemListFilters';
import ShoppingList from './ShoppingList';

const EntryList = () => (
  <div className='top-buffer'>
    <ItemListFilters />
    <div className='row'>
      <div className='col-sm-6'>
        <ShoppingList />
      </div>
      <div className='col-sm-6'>
        <CupboardItemList />
      </div>
    </div>
    <br />
  </div>
);

export default EntryList