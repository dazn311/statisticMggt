import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { TransitionGroup } from 'react-transition-group'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';

import Box from '@material-ui/core/Box'; 

import './App.css';

import Header from './components/header/header.component';

import { fetchCurrentUserAsync } from './store/user/user.actions'

import Dashboard from './screens/dashboard'; 
import HistoriesChange from './screens/historyChanges/index'; 
import UsersPage from './screens/usersPage/index'; 
import UserDetails from './screens/userDetails';
import ObjPage from './screens/objPage'; 
import ObjCard from './screens/objCard'; 
import GeneralPage from './screens/gen'; 
import Footer from './components/footer'; 
 
const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, ruRU);

//glav control
function App({fetchCurrentUser}) {
//sazonov egor gennadievich
  // useEffect(() => {
  //   // console.log('app fetchCurrentUser');
  //   fetchCurrentUser(2);
     
  // }, [fetchCurrentUser])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <TransitionGroup  timeout={150} >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/stats/ogh">
            <HistoriesChange />
          </Route>
          <Route  path="/stats/user/:iduser">
            {/*render={({ match }) => <UserDetails match={match} />}*/}
            <UserDetails />
          </Route>
          <Route exact path="/stats/users">
            <UsersPage />
          </Route>
          <Route  path="/stats/obj/:idobj">
            <ObjCard />
          </Route>
          <Route exact path="/stats/objs">
            <ObjPage />
          </Route>
          <Route path="/stats/gen">
            <GeneralPage />
          </Route>
          <Route exact path="/stats">
            <Dashboard />
          </Route>
          <Route >
            <Dashboard />
          </Route>


        </Switch>
        
        <Box pt={4}>
           <Footer />
        </Box>
      </Router>
      </TransitionGroup>
      </ThemeProvider>
    </div>
  );
}

// export default App;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (id) => dispatch(fetchCurrentUserAsync(id)),
});

export default connect(null,mapDispatchToProps)(App);
