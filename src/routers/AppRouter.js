import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className='container'>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/Dashboard' component={EntryList} />
        <PrivateRoute path='/Cupboard' component={CupboardItemList} />
        <PrivateRoute path='/Create' component={CreateItem} />
        <PrivateRoute path='/Edit/:id' component={EditItem} />
        <PrivateRoute path='/Help' component={Help} />
        <Route path='/About' component={Help} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

// auth router: presently nonfunctional
// auth throwing error regarding current domain not being OAuth in firebase
// const AppRouter = () => (
//   <BrowserRouter>
//     <div>
//       <Header />
//       <div className='container'>
//         <Switch>
//           <Route path='/' component={LoginPage} exact={true} />
//           <Route path='/Dashboard' component={EntryList} />
//           <Route path='/Cupboard' component={CupboardItemList} />
//           <Route path='/Create' component={CreateItem} />
//           <Route path='/Edit/:id' component={EditItem} />
//           <Route path='/Help' component={Help} />
//           <Route component={Error404} />
//         </Switch>
//       </div>
//     </div>
//   </BrowserRouter>
// );

export default AppRouter;