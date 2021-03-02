import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import { fetchCurrentUserAsync } from './store/user/user.actions'

import Dashboard from './screens/dashboard'; 
import HistoriesChange from './screens/historyChanges/index'; 
//glav control
function App({fetchCurrentUser}) {

  useEffect(() => {
    console.log('app fetchCurrentUser');
    fetchCurrentUser(2);
    
  }, [fetchCurrentUser])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/ogh">
            <HistoriesChange />
          </Route>
          <Route path="/stats">
            <Dashboard />
          </Route>
          <Route path="/stats/ogh">
            <HistoriesChange />
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
