import React,{ useState, useCallback } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import TabUsersList from './TabUsersList';
import FormUsersAdd from './Form-add-users.component';

 


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  datePick: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default function TabOne() {
  // const [searchValue, setsearchValue] = useState('');
  // const [fieldValue, setFieldValue] = useState('nameEvent');
  const classes = useStyles();

  // const setSearchText = useCallback((val) => {setsearchValue(val)},[]);
  // const setField = useCallback((val) => {setFieldValue(val)},[]);
  // console.log('rerender Tab1');
  return (
    <React.Fragment>
      <div className={classes.seeMore}>
            <div className={classes.datePick}>
                {/* <FormUsersAdd setField={setField} /> */}
                <FormUsersAdd />
            </div>
        
            <TabUsersList />
            {/* <TabUsersList fieldValue={fieldValue} searchValue={''}/> */}
      </div>
    </React.Fragment>
  );
}
