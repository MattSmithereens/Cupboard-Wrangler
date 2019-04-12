import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import moment from 'moment';
import { startSetItems } from './actions/items';
// import getVisibleItems from './selectors/items';
import './index.css';
import AppRouter from './routers/AppRouter.js'
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
// import Loading from './img/';

// const now = new moment();
// console.log(now)
// 1 day is 86400000 ms
// const later = new moment().add(1, 'days').format('L');

const store = configureStore();

// $(() => {
//   window.mdc = mdc;
//   window.mdc.autoInit();
// });

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// const loadingPage = (
//   <div className='
//     top-buffer
//     loading-img
//   '>
//     <img src={Loading}></img>
//   </div>
// )

ReactDOM.render(<p className='top-buffer container'>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetItems()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged in');
  } else {
    console.log('logged out');
  }
}).catch();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

