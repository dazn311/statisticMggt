import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { TransitionGroup } from 'react-transition-group'

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';

import Box from '@material-ui/core/Box'; 
// import blue from '@material-ui/core/colors/blue';

import './App.css';

import Header from './components/header/header.component';

import { fetchCurrentUserAsync } from './store/user/user.actions'

import clsx from 'clsx'; 
// import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from './screens/dashboard'; 
import HistoriesChange from './screens/historyChanges/index'; 
import UsersPage from './screens/usersPage/index'; 
import UserDetails from './screens/userDetails';
import ObjPage from './screens/objPage'; 
import ObjCard from './screens/objCard'; 
import GeneralPage from './screens/gen'; 
import Footer from './components/footer'; 
import { blueGrey, lightGreen } from '@material-ui/core/colors';
// import { dark, light } from '@material-ui/core/styles/createPalette';
 
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#757ce8',
      light: lightGreen[300],
      // main: '#333',
      main: lightGreen[500],
      dark: lightGreen[700]
    },
    secondary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: blueGrey[700]
    },
    background: {
      // default: lightGreen[900],
      // paper: 'grey', 
    },
    type: 'dark'
  },
  
}, ruRU);

const useStyles = makeStyles((theme) => ({
  root: {
      // display: 'flex',
      width: '100%'
  },
  container: {
      // display: 'flex',
      minWidth: '100$'
      // marginLeft: 240
  }, 
}));

//glav control
function App({fetchCurrentUser, match}) {

  const classes = useStyles();
  // const theme = useTheme();
  // console.log(theme);
  
//sazonov egor gennadievich
  // useEffect(() => {
  //   // console.log('app fetchCurrentUser');
  //   fetchCurrentUser(2);
     
  // }, [fetchCurrentUser])
  return (
    // <div className="App">
    <div className={clsx(classes.root )} >
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>
      <TransitionGroup  timeout={150} >
      <Router>
        <Header >
        <div className={clsx(classes.container )} >
          <Switch>
            <Route exact path="/stats/ogh">
              <HistoriesChange />
            </Route>
            <Route  
            path="/stats/user/:iduser"
            render={props => <UserDetails {...props} />}
            >
              
              {/* <UserDetails /> */}
               
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
        </div>
        </Header>
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