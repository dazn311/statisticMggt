import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap:'wrap',
    width: 'auto',
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
  btnUpdateAll: {backgroundColor: 'bisque'},
  
}));
     


///////////////////////////////////////////
export default function StateElements({amObjsValue, amObjsValueCurrent}) { 

  const classes = useStyles();

  return ( 
    <React.Fragment>
      <Grid container alignItems="center" className={classes.root}>
          <div className={classes.amObjs}> Абдуллаев Диер Равшанович
            {/*<span style={{color:'#5a809e'}}>{amObjsValue.totalAmount}</span><span style={{color:'grey'}}> ({amObjsValueCurrent.totalAmount})</span>*/}
          </div>
        <Divider orientation="vertical" flexItem  />
          <div className={classes.amObjs}>ГБУ "Жилищник района Чертаново Северное"</div>
        <Divider orientation="vertical" flexItem />
          <div className={classes.amObjs}>статус: <span style={{color:'red'}}>Активный</span> <span style={{color:'grey'}}> (18.04.21)</span></div>
        <Divider orientation="vertical" flexItem />  
          
      </Grid>
    </React.Fragment> 
  );
}
