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
    fontSize: 11,
    padding: '8px 0'
  },
});

//countOGH: 
// { dataTime: '16:20 (21.01.21)',
//   data:  {
//     objTotal: 100,
//     objMggt: 30,
//     objRelatives: 70,} }

const GenDeposits = ({ amountOGH }) => {
  const classes = useStyles();
  let tt = moment(amountOGH.dataTime).toISOString(); 
  let lastDate = tt.split('T')[0].split('-'); 
  return (
    <React.Fragment>
      {/* <Title>Количество ОГХ ({moment(amountOGH.data.objTotal).format("dddd, MMM DD at HH:mm a")})</Title> */}
      
      <Title>Данные ОГХ ({amountOGH.data.objTotal})</Title>
      <hr color="blue" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}} />
      {/* {Object.keys(amountOGH.data).map(keyObj => {
        console.log(amountOGH.data.[keyObj]);
        console.log(keyObj);
      })} */}
       
       
      <Typography component="p" variant="h6">
        {amountOGH.data.objMgtt}
      </Typography>
      <Typography component="p"  >
          Всего принадлежащих нам
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h6">
        {amountOGH.data.objRelatives}
      </Typography>
      <Typography component="p"  >
          Всего объектов смежников
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h6">
        {'* 552'}
      </Typography>
      <Typography component="p"  >
          Кол-во пользователей
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: '4px'}}/>
      <Typography color="textSecondary" className={classes.depositContext}>
          Данные на {lastDate[2]}/{lastDate[1]}/{lastDate[0]}
            
      </Typography>
       
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
export default connect(mapStateToProps)(GenDeposits);