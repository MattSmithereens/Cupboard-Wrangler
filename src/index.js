import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.js'
import configureStore from './store/configureStore';
import { startSetItems } from './actions/items';
import { login, logout } from './actions/auth';
// import getVisibleItems from './selectors/items';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
// import Loading from './img/';

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

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

// const loadingPage = (
//   <div className='
//     top-buffer
//     loading-img
//   '>
//     <img src={Loading}></img>
//   </div>
// )

ReactDOM.render(<p className='login-centered'>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetItems()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/Dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

