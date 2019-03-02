import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import EntryList from '../components/EntryList.js';
import CreateItem from '../components/CreateItem.js';
import EditItem from '../components/EditItem.js';
import Help from '../components/Help.js';
import Error404 from '../components/Error404.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={EntryList} exact={true} />
        <Route path='/Create' component={CreateItem} />
        <Route path='/Edit/:id' component={EditItem} />
        <Route path='/Help' component={Help} />
        <Route component={Error404} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;