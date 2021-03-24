import React, { useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import { dataStartforFetchEventsForPeriod, fetchObjectsListAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
import { fetchDataForEventShortPoints } from '../../../store/adminPanelTrest/adminPanelTrest.selectors' //'./adminPanelTrest.selectors'; 

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    border:'1px solid rgb(228 228 228)',
    borderRadius: 4,
    padding: 6,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(4),
    width: 200,
  },
}));

// 
const initional = () => {
    return '2021-01-01'
}



const DatePickers =({setDateStart}) => {
  const [Data] = useState(initional);
  const classes = useStyles();

  
  const setDateOnBlur = async(e) => {
    setDateStart(e.target.value)

  } 
 
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="dateStart"
        // label="От"
        type="date"
        defaultValue={Data}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        
        onBlur={setDateOnBlur}
      />
    </form>
  );
}

const mapStateToProps = createStructuredSelector ({
  dataOfFetchForEventShort: fetchDataForEventShortPoints, 
  });

const mapDispatchToProps = (dispatch) => ({
  // Для  
 
  
});  
export default connect(mapStateToProps, mapDispatchToProps)(DatePickers);