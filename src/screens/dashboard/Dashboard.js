import React,{useEffect} from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
 
import LineChartWrap from './LineChart.wrap'; 
import Deposits from './Deposits';
import NewOGH from './NewOGH';
import TableListHistories from './TableListHistories';
import './dashboard.styles.scss';
import ChipsArray from './Chips';

import { selectIsFetchingUserOnline } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import {  fetchEventsPointShortAsync, fetchAmountOGHForDashboardAsync ,fetchAmountOGHToDayAsync,fetchAmountOGHToWeekAsync, fetchAmountOGHToThreeDaysAsync, fetchGenStatsAsync  } from '../../store/adminPanelTrest/adminPanelTrest.actions'; 
 
import { selectGenStats } from '../../store/adminPanelTrest/StatisticPage.selectors'; 



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
    // paddingLeft: 10,
    // paddingLeft: theme.spacing(10),
    // minWidth: 1400,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 'auto',
    marginLeft: 0 //нижняя таблица первой страницы
  },news: {
    '&:hover': {
      background: "#f00",
   }, 
  },
  fixedHeight: {
    minHeight: 240,
  },
  // paper2: {height: 240,}
}));

   


let lineHeader = 'Текущая информация по событиям и пользователям';
let maxWidthGridOGH = '330px';

const Dashboard = ({ fetchGenStats, genStatsAll, fetchEventsPointShort,    fetchAmountOGH,fetchAmountOGHToDay,fetchAmountOGHToWeek, fetchAmountOGHToThreeDays}) => {
  const classes = useStyles();
  // const [valueChip, setValueChip] = React.useState([]);

  
  //smgt
  useEffect(() => {

    fetchEventsPointShort(); // graphic new_rec

    // for "Количество ОГХ"
    fetchAmountOGH();

    // for "Новые ОГХ"
    fetchAmountOGHToDay();
    fetchAmountOGHToWeek(); 
    fetchAmountOGHToThreeDays();

    fetchGenStats();
    
  }, [fetchEventsPointShort, fetchAmountOGH, fetchAmountOGHToDay, fetchAmountOGHToWeek, fetchAmountOGHToThreeDays])
 


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const winWidth = window.innerWidth; 

  if (winWidth < 550) {
      lineHeader = 'Информация по событиям';
      maxWidthGridOGH = 'unset' //по событиям'; 
  }

  const amHenler = React.useCallback( (data) => {
    // setValueChip(data);
  },[]);
  // },[setValueChip]);
   

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container   style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap: 'wrap', alignItems: 'end',padding: 0 }} >
            <Grid item xs={12} md={12} lg={6} style={{
              // minWidth: 250,
              maxWidth: 630,
              // boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', margin:'0 auto'
              }} >
              <Paper className={fixedHeightPaper} >
                <h4 style={{ textAlign:'center', position:'relative', marginTop:'0px', left: '0'}}> {lineHeader}</h4>
                <LineChartWrap  />
              </Paper>
            </Grid>
            
            
            <Grid xs={12} md={12} lg={6} style={{display:'flex', flexWrap:'wrap' , justifyContent:'center'}}>
                <Grid item xs={12} md={6} lg={3} style={{minWidth: 292,maxWidth: maxWidthGridOGH, marginRight:'8px'}} >
                  <Paper className={fixedHeightPaper}>
                    <Deposits /> {/* Количество ОГХ */}
                  </Paper>
                  
                </Grid>
                
                <Grid item xs={12} md={6} lg={3} style={{minWidth: 292,maxWidth: maxWidthGridOGH}} >
                  <Paper className={fixedHeightPaper}>
                    <NewOGH />  {/* Новые ОГХ */}
                  </Paper>
                </Grid>
            </Grid>
            
            <Grid item xs={12}>
              <Paper className={classes.paper2}>
                {/* краткие данные */}
                 <ChipsArray data={genStatsAll} />
              </Paper>
            </Grid>
            

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TableListHistories setData={amHenler} />
              </Paper>
            </Grid>
            
          </Grid>
           
        </Container>
      </main>
    </div>
  );
}



const mapStateToProps = createStructuredSelector ({
  genStatsAll: selectGenStats,
  isFetchingUserOnline: selectIsFetchingUserOnline,
});



const mapDispatchToProps = (dispatch) => ({
    fetchGenStats: () => dispatch(fetchGenStatsAsync()), 
    fetchEventsPointShort: () => dispatch(fetchEventsPointShortAsync()),
    
    fetchAmountOGH: () => dispatch(fetchAmountOGHForDashboardAsync()),

    fetchAmountOGHToDay: () => dispatch(fetchAmountOGHToDayAsync()),
    fetchAmountOGHToWeek: () => dispatch(fetchAmountOGHToWeekAsync()),
    fetchAmountOGHToThreeDays: () => dispatch(fetchAmountOGHToThreeDaysAsync()),
});
 
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
