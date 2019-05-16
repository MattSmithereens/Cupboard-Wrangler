import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import EntryList from '../components/EntryList.js';
import CreateItem from '../components/CreateItem.js';
import EditItem from '../components/EditItem.js';
import Help from '../components/Help.js';
import Error404 from '../components/Error404.js';
import CupboardItemList from '../components/CupboardItemList.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// delete later
// import Test from '../playground/Test.js'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/Dashboard' component={EntryList} />
        <PrivateRoute path='/Cupboard' component={CupboardItemList} />
        <PrivateRoute path='/Create' component={CreateItem} />
        <PrivateRoute path='/Edit/:id' component={EditItem} />
        <PrivateRoute path='/Help' component={Help} />
        <PrivateRoute path='/About' component={Help} />
        <PrivateRoute component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;