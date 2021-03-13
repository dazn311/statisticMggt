import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';


import Header from './components/header/header.component';

import { fetchCurrentUserAsync } from './store/user/user.actions'

import Dashboard from './screens/dashboard'; 
import HistoriesChange from './screens/historyChanges/index'; 
import UsersPage from './screens/usersPage/index'; 
//glav control
function App({fetchCurrentUser}) {

  useEffect(() => {
    console.log('app fetchCurrentUser');
    fetchCurrentUser(2);
    
  }, [fetchCurrentUser])
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Switch>
          <Route exact path="/stats">
            <Dashboard /> 
          </Route>
          <Route path="/stats/ogh">
            <HistoriesChange />
          </Route>
          <Route path="/stats/users">
            <UsersPage />
          </Route>
          <Route >
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// export default App;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (id) => dispatch(fetchCurrentUserAsync(id)),
});

export default connect(null,mapDispatchToProps)(App);
