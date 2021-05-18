import React, { useEffect } from 'react'; 
 

import { useHistory, useRouteMatch } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
   

import { selectCurrentUserShort, selectCurrentUserAllData, selectUserAllStatsData } from '../../../store/user/user.selectors';
import { fetchUserStatsAsyncLocal } from '../../../store/user/user.actions';

import './tabOneMenu.styles.scss';
import CartGenInfo from './CardGenInfo';
import CardUserDetails from './CardUserDetails';
import { id } from 'date-fns/locale';
 
 
  
const TabOneMenu =  ({ selectCurrentUserShort, selectCurrentUserAllData,  orgRow,  isOpen=false, fetchUserStat, selectUserAllStats }) => {
    const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        if (selectCurrentUserShort && selectCurrentUserShort.user_id){
            fetchUserStat(selectCurrentUserShort.user_id);
        }

        history.push({
            pathname: `${match.url}/info`
        })

    },[])


    return (
        <div style={{display:'flex',flexDirection: window.innerWidth < 500 ? 'column' : 'row', justifyContent:'start'}} >
            <div  style={{boxShadow: '1px solid #e4dfdf2e',margin: window.innerWidth < 500 ? '0' :'10px', minWidth: 300, width: window.innerWidth < 500 ? '100%': 400,  border: '1px solid #e2e2e2',
                height: 'fit-content'}} >
                <CartGenInfo curUser={selectCurrentUserShort} allData={selectCurrentUserAllData}  ></CartGenInfo>
            </div>

            <div  style={{boxShadow: '1px solid #e4DFDF2e',margin: window.innerWidth < 500 ? '0' : '5px', minWidth: 300, width: window.innerWidth < 500 ? '100%': 500}} >
                <CardUserDetails curUser={selectCurrentUserShort} allData={selectCurrentUserAllData} selectUserAllStats={selectUserAllStats} ></CardUserDetails>
            </div>


        </div>
    );
} ;

const mapStateToProps = createStructuredSelector ({
  selectCurrentUserShort: selectCurrentUserShort, // события короткие данные для таблицы  
    selectUserAllStats: selectUserAllStatsData, // события короткие данные для таблицы
    selectCurrentUserAllData: selectCurrentUserAllData, // события короткие данные для таблицы
});

const mapDispatchToProps = (dispatch) => ({
    fetchUserStat: (userId) => dispatch(fetchUserStatsAsyncLocal(userId)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(TabOneMenu);