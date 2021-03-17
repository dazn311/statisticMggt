import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment/moment';

// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Title from './Title';

import { selectAmountOGH } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 
 
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

//countOGH: 
// { dataTime: '16:20 (21.01.21)',
//   data:  {
//     objTotal: 100,
//     objMggt: 30,
//     objRelatives: 70,} }

const Deposits = ({ amountOGH }) => {
  const classes = useStyles();
  let tt = moment(amountOGH.dataTime).toISOString();
  //tt 2021-02-08T21:12:01.440Z
  // tt.format("DD MMM (HH:mm) ");
  //tt Tue Feb 09 2021 00:12:01 GMT+0300 (Moscow Standard Time)
  // tt 2021-02-08T21:16:02.549Z
  let lastDate = tt.split('T')[0].split('-');
  // console.log('lastDate',lastDate);
  //lastDate 2021-02-08
  return (
    <React.Fragment>
      {/* <Title>Количество ОГХ ({moment(amountOGH.data.objTotal).format("dddd, MMM DD at HH:mm a")})</Title> */}
      <Title>Количество ОГХ ({amountOGH.data.objTotal})</Title>
      <hr color="blue" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h4">
        {amountOGH.data.objMgtt}
      </Typography>
      <Typography component="p"  >
      принадлежащих нам
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h4">
      {amountOGH.data.objRelatives}
      </Typography>
      <Typography component="p"  >
      объектов смежников
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: '4px'}}/>
      <Typography color="textSecondary" className={classes.depositContext}>
        Данные на {lastDate[2]}/{lastDate[1]}/{lastDate[0]}
         
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          Смотреть подробно
        </Link> */}
      </div>
    </React.Fragment>
  );
}
 

const mapStateToProps = createStructuredSelector ({
  amountOGH: selectAmountOGH,
  // isFetchingUserOnline: selectIsFetchingUserOnline,
  // selectAmountEvent: selectAmountEventGraph,
});
 
// const mapDispatchToProps = (dispatch) => ({
//   fetchAmountOGH: () => dispatch(fetchAmountOGHForDashboardAsync()),
// });
export default connect(mapStateToProps)(Deposits);