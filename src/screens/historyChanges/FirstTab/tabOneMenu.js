import React,{ useState, useCallback } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import DatePicker from './DatePicker';
import DatePickerEnd from './DatePickerEnd';
import SearchPanel from './SearchPanel';
import TabOGH from './TabOGH';

import Title from './Title';


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
  const [fieldValue, setFieldValue] = useState('nameEvent');
  const classes = useStyles();

  const setSearchText = useCallback((val) => {setsearchValue(val)},[]);
  const setField = useCallback((val) => {setFieldValue(val)},[]);
  // console.log('rerender Tab1');
  return (
    <React.Fragment>
      {/* <Title>Общая статистика по событиям</Title> */}
      <div className={classes.seeMore}>
            <div className={classes.datePick}>
                <SearchPanel setField={setField} setSearchText={setSearchText}/>
                <DatePicker />
                <DatePickerEnd />
            </div>
        
            <TabOGH fieldValue={fieldValue} searchValue={searchValue}/>
      </div>
    </React.Fragment>
  );
}
