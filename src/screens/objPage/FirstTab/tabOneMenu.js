import React,{ useState, useCallback } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import DatePicker from './DatePicker';
import DatePickerEnd from './DatePickerEnd';
import SearchPanel from './SearchPanel';
import TabObjs from './TabObjs';



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
   
export default function Orders() {
  const [searchValue, setsearchValue] = useState('');
  const [fieldValue, setFieldValue] = useState('objName'); // this default field for search
  
  const classes = useStyles();

  const setSearchText = useCallback((val) => {setsearchValue(val)},[]);
  const setField = useCallback((val) => {setFieldValue(val)},[]);
  return (
    <React.Fragment>
      <div className={classes.seeMore}>
            <div className={classes.datePick}>
                <SearchPanel setField={setField} setSearchText={setSearchText}/>
                <DatePicker />
                <DatePickerEnd />
            </div>
        
            <TabObjs fieldValue={fieldValue} searchValue={searchValue}/>
      </div>
    </React.Fragment>
  );
}
