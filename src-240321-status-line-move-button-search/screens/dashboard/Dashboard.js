import React,{useEffect} from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'; 
 
import LineChartWrap from './LineChart.wrap'; 
import Deposits from './Deposits';
import NewOGH from './NewOGH';
import TableList from './TableListHistories.sceen';

import { selectIsFetchingUserOnline } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import {  fetchEventsPointShortAsync, fetchAmountOGHForDashboardAsync ,fetchAmountOGHToDayAsync,fetchAmountOGHToWeekAsync, fetchAmountOGHToThreeDaysAsync  } from '../../store/adminPanelTrest/adminPanelTrest.actions'; 
 
import './dashboard.styles.scss';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mggt.ru/">
        МосГеоТрест
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(10),
    // minWidth: 1400,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    marginLeft: -10 //нижняя таблица первой страницы
  },news: {
    '&:hover': {
      background: "#f00",
   },
  },
  fixedHeight: {
    height: 240,
  },
}));

 
const Dashboard = ({ fetchEventsPointShort,    fetchAmountOGH,fetchAmountOGHToDay,fetchAmountOGHToWeek, fetchAmountOGHToThreeDays}) => {
  const classes = useStyles();
  // const [value, setValue] = React.useState('recents');
  const [lineHeader, setLineHeader] = React.useState('Текущая информация по событиям и пользователям');

  
  //smgt
  useEffect(() => {

    fetchEventsPointShort(); // graphic new_rec

    // for "Количество ОГХ"
    fetchAmountOGH();

    // for "Новые ОГХ"
    fetchAmountOGHToDay();
    fetchAmountOGHToWeek(); 
    fetchAmountOGHToThreeDays();
  }, [fetchEventsPointShort, fetchAmountOGH, fetchAmountOGHToDay, fetchAmountOGHToWeek, fetchAmountOGHToThreeDays])
 


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const winWidth = window.innerWidth;
  

  if (winWidth < 400) {
    let newHeader = 'Информация по событиям';
      setLineHeader(newHeader);
  }
  
  // console.log('user',user);
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Header />  */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6} style={{boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', margin:'0 0px'}} >
              {/* <Paper className={fixedHeightPaper}> */}
                <h4 style={{ textAlign:'center', position:'relative', marginTop:'-15px', left: '0'}}>
                    {lineHeader}</h4>
                <LineChartWrap />
              {/* </Paper> */}
            </Grid>
            
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits /> {/* Количество ОГХ */}
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <NewOGH />  {/* Новые ОГХ */}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TableList />
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

const mapStateToProps = createStructuredSelector ({
  isFetchingUserOnline: selectIsFetchingUserOnline,
});



const mapDispatchToProps = (dispatch) => ({
    fetchEventsPointShort: () => dispatch(fetchEventsPointShortAsync()),
    
    fetchAmountOGH: () => dispatch(fetchAmountOGHForDashboardAsync()),

    fetchAmountOGHToDay: () => dispatch(fetchAmountOGHToDayAsync()),
    fetchAmountOGHToWeek: () => dispatch(fetchAmountOGHToWeekAsync()),
    fetchAmountOGHToThreeDays: () => dispatch(fetchAmountOGHToThreeDaysAsync()),
});
 
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
