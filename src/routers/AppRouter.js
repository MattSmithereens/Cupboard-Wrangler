import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import EntryList from '../components/EntryList.js';
import CreateItem from '../components/CreateItem.js';
import EditItem from '../components/EditItem.js';
import Help from '../components/Help.js';
import Error404 from '../components/Error404.js';
import CupboardItemList from '../components/CupboardItemList.js';
import LoginPage from '../components/LoginPage.js'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' component={LoginPage} exact={true} />
          <Route path='/Dashboard' component={EntryList} />
          <Route path='/Cupboard' component={CupboardItemList} />
          <Route path='/Create' component={CreateItem} />
          <Route path='/Edit/:id' component={EditItem} />
          <Route path='/Help' component={Help} />
          <Route path='/About' component={Help} />
          <Route path='/Login' component={LoginPage} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
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