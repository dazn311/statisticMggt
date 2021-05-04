import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import { useLocation } from "react-router-dom";

// import Header from '../../components/header/header.component';
import TabMenu from './TabMenu'
   
import './userDetails.styles.scss';

function Copyright() {
  return (
    <Typography variant="body2" component={'span'} color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mggt.ru/">
        МосГеоТрест
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: 0
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    // flexDirection: 'column',
  }, 
}));
//<HistoryChanges eventShortPoints={eventShortPoints}/>
 
export default function UserCard({eventShortPoints, idUser}) {
  const classes = useStyles();
  const location = useLocation();
  const curUser = location.row;
  // console.log('8989 UserCard idUser', idUser);
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Header /> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container 
          maxWidth={false}
          // maxWidth="xl" 
          className={classes.container}>
          <Grid container spacing={3}>
            
            {/* Recent Orders */}
            <Grid item sm={12} md={12} xs={12}>
              <Paper className={classes.paper}>
                <TabMenu idUser={idUser} curUser={curUser} />
              </Paper>
            </Grid>

          </Grid>
          <Box pt={4}> 
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
