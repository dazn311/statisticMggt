import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

// import Header from '../../components/header/header.component';
import TabMenu from './TabMenu'

import './usersPage.styles.scss';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" component={'span'} align="center">
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
  },
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase'
  }, 
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
    flexDirection: 'column',
  },
}));
//<UsersPage eventShortPoints={eventShortPoints}/>

export default function UsersPage({eventShortPoints}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Header /> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={0}>
            
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TabMenu />
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
