import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addItem, removeItem, editItem } from './actions/items';
import getVisibleItems from './selectors/items';
import './Index.css';
import AppRouter from './routers/AppRouter.js'
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.dispatch(addItem({ description: 'in shopping list', amount: 3, inCupboard: false, shelflife: 0 }));
store.dispatch(addItem({ description: 'in shopping list2', amount: 3, inCupboard: false, shelflife: 0 }));
store.dispatch(addItem({ description: 'in cupboard', amount: 3, inCupboard: true, shelflife: 0 }));
store.dispatch(addItem({ description: 'in cupboard 2', amount: 3, inCupboard: true, shelflife: 0 }));
// store.dispatch(addItem({ description: 'coffee', amount: 4, createdAt: 5000, inCupboard: false }));
// store.dispatch(addItem({ description: 'frozen peas', amount: 2, createdAt: 10000, inCupboard: true }));


const state = store.getState();
const visibleItems = getVisibleItems(state.items, state.filters);

console.log(visibleItems);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

