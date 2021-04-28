import React,{ useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import SearchPanel from './SearchPanel';
import StateElements from './stateElements';




import { fetchAllUsersFromDB , setUsersNameFilterTxtForUsersPage } from '../../../store/adminPanelTrest/adminPanelTrest.actions';
import { selectAllUsersFromDb } from '../../../store/adminPanelTrest/adminPanelTrest.selectors';

import TabUsersComponent from "./TabUsers.component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
    // minWidth:1400,
  },
  amObjs:{alignSelf: 'center',marginLeft:10, padding: '4px 16px'},
  seeMore: {
    marginTop: theme.spacing(0), 

  },
  datePick: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  }
}));

const filterSearchTextUser = (selectAllUsers=[], filterUser) => {   
  // console.log('filterSearchTextUser',filterUser)
  return [{user_name:'va'},{user_name:'vs'}].filter((elem) => elem.user_name.includes(filterUser))
  // return selectAllUsers.filter((elem) => elem.user_name.includes(filterUser))
  
} 
/////////////////////////////////////////////////////////////////////

const TabOneMenu = ({ fetchAllUsers, selectAllUsers, setUsersFilter }) => {

  // const [filterUser, setFilterUser] = React.useState('');
  const [filterOrg, setFilterOrg] = React.useState('');

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!selectAllUsers.length){
      fetchAllUsers();
      console.log('fetchAllUsers');
    }
  },[fetchAllUsers])

  const fetchSearchObj = () => { console.log('sd')}

  const setSearchTextUser = (val) => { setUsersFilter(val); console.log('setSearchTextUser',val)}
  const setSearchTextOrg = (val) => { setFilterOrg(val); console.log('setSearchTextUser',val)}

  // const showEvents = () => { console.log('showEvents')}

  const handleChangePage = () => { console.log('handleChangePage')}

  const showEvents = (row) => {  
    // history.push(`/stats/objs/${row.objID}`); 
    console.log('showEvents row',row) 
    history.push({

      pathname: `/stats/user/${row.user_id}`,
      // search: '?query=obj',
       row: row
    });
}
 
  return (
      <React.Fragment> 
        <div className={classes.seeMore}>
          <StateElements amObjsValue={selectAllUsers.length} amObjsValueCurrent={'0'} />
          <div className={classes.datePick}>
            <SearchPanel  setSearchTextUser={setSearchTextUser} setSearchTextOrg={setSearchTextOrg} />
            <Button onClick={()=>{fetchSearchObj('0')}} style={{height: '43px'}} variant="contained" color="primary">
              Поиск
            </Button>
  
          </div>
          <TabUsersComponent
              tabValue={selectAllUsers}
              showEvents={showEvents}
              handleChangePage={handleChangePage}
          />

        </div>
      </React.Fragment>
  );
}


// const mapStateToProps = createStructuredSelector ({
//   selectAllUsers: filterSearchTextUser(selectAllUsersFromDb, 'ав'), // события короткие данные для таблицы
// });
const mapStateToProps = createStructuredSelector ({
  selectAllUsers: selectAllUsersFromDb, // события короткие данные для таблицы
});

// const mapStateToProps = createStructuredSelector ({
//   selectAllUsers: filterUser => selectAllUsersFromDb.filter((elem) => elem.user_name.contains(filterUser)), // события короткие данные для таблицы
// });

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsersFromDB()),
  setUsersFilter: (val) => dispatch(setUsersNameFilterTxtForUsersPage(val))
});
export default connect(mapStateToProps,mapDispatchToProps)(TabOneMenu); 
