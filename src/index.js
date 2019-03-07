import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addItem, removeItem, editItem } from './actions/items';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import getVisibleItems from './selectors/items';
import './Index.css';
import AppRouter from './routers/AppRouter.js'
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.dispatch(addItem({ description: 'coffee', amount: 400, createdAt: 5000 }));
store.dispatch(addItem({ description: 'frozen peas', amount: 200, createdAt: 10000 }));
store.dispatch(addItem({ description: 'avocado', amount: 400, createdAt: -100000 }));
store.dispatch(setTextFilter('avo'));

setTimeout(() => {
  store.dispatch(setTextFilter('o'));
}, 3000)

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

