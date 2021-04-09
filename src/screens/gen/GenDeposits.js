import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment/moment';

// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Title from './Title';

import { selectAmountOGH, selectAmountUsers } from '../../store/adminPanelTrest/adminPanelTrest.selectors';
import { fetchAmountUsersAsync  } from '../../store/adminPanelTrest/adminPanelTrest.actions';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
 
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    fontSize: 11,
    padding: '8px 0'
  },
});


const GenDeposits = ({amUsers, amountOGH,fetchAmountUsers }) => {
  const classes = useStyles();
  // const [amUsers, setAmUsers] = useState(undefined)

  let tt = moment(amountOGH.dataTime).toISOString();

  let lastDate = tt.split('T')[0].split('-');

  // setTimeout(() => {
  //     if (amUsers === 0 ){
  //       fetchAmountUsers();
  //     }
  // },5000);


  // console.log('amUsers === 0',amUsers);
  return (
    <React.Fragment>
      <Title>Данные ОГХ ({amountOGH.data.objTotal})</Title>
      <hr color="blue" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}} />

      <Typography component="span" variant="h6">
        {amountOGH.data.objMgtt}
      </Typography>
      <Typography component="span"  >
          Всего принадлежащих нам
      </Typography >
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>

      <Typography component="span" variant="h6">
        {amountOGH.data.objRelatives}
      </Typography>
      <Typography component="span"  >
          Всего объектов смежников
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>

      <Typography component="span" variant="h6">
        {/*{'* 552'}*/}
        {amUsers.amountUsers  ? amUsers.amountUsers: <CircularProgress size={14} color="inherit" />}
      </Typography>
      <Typography component="span"  >
          Кол-во пользователей
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: '4px'}}/>

      <Typography  component="span" color="textSecondary" className={classes.depositContext}>
          Данные на {lastDate[2]}/{lastDate[1]}/{lastDate[0]}
      </Typography>
       
    </React.Fragment>
  );
}
 

const mapStateToProps = createStructuredSelector ({
    amountOGH: selectAmountOGH,
    amUsers: selectAmountUsers,
  // isFetchingUserOnline: selectIsFetchingUserOnline,
  // selectAmountEvent: selectAmountEventGraph,
});
 
const mapDispatchToProps = (dispatch) => ({
    fetchAmountUsers: () => dispatch(fetchAmountUsersAsync()),
});

export default connect(mapStateToProps,mapDispatchToProps)(GenDeposits);