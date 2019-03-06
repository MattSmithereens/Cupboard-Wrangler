import { createStore, combineReducers } from 'redux';
import itemsReducer from '../reducers/items'
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      filters: filtersReducer
    })
  );

  return store;
};

