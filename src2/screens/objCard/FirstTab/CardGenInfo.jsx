import React, { useEffect} from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
import WatchLater from '@material-ui/icons/WatchLater';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
// import FlagIcon from '@material-ui/icons/Flag';
import ApartmentIcon from '@material-ui/icons/Apartment';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import DonutLarge from '@material-ui/icons/DonutLarge';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

import { selectObjCurrObj } from '../../../store/adminPanelTrest/objspages.selectors';  
// import BackdropForAllPage from '../../../components/blackDrop/black-drop.component';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    border: '1px solid #8080802e',
    margin: '4px 8px',
  },
  span: {
      color:'#1976d2'
    },
  red: {
    color:'red',

  },
  burlywood:  {backgroundColor: "burlywood"}
}));

const CartGenInfo = ({orgRow, currObj, selectObjCurr, objRect}) => {
  const classes = useStyles();

  useEffect(() => {
 
  },[currObj])
  // const objCurr = selectObjCurr !== {} ? selectObjCurr.filter(ob => ob.objID === orgRow) : 
  
  
  if (!currObj) {
    return(<div>нет данных об организации</div>)
    
  }
  if (!selectObjCurr) {
    return(<div>нет данных об организации</div>)
    
  }

  let smegObjList = null;


  smegObjList = selectObjCurr.objRelatives && selectObjCurr.objRelatives.map((objIdSmeg, index)  => {
    
    const newRec = objRect && objRect.find(rec  => {
      if (objIdSmeg === rec.receip.objectID){
        return true
      }else {
        return  false //objIdSmeg + ', ' 
      } 
    }) 
    if(newRec){
      return <p key={index} style={{margin: '0 4px', borderBottom:'1px solid grey'}} >{newRec.receip.objname} </p>
    } else {
      return <p key={index} style={{margin: '0 4px', borderBottom:'1px solid grey'}} >{objIdSmeg} <span className={classes.red} >(нет событий)</span> </p>
    }
  })

 
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ApartmentIcon color={'rgb(229 160 30)'} style={{backgroundColor: '#904a4a'}} />
          </Avatar>
        </ListItemAvatar>
        <div style={{display:'flex', flexDirection:'column', borderBottom:'1px solid #ff000021'}}>
          <ListItemText primary={currObj.objName } secondary={currObj.organization.orgname  } />
          <div><span className={classes.span} > objID: {currObj.objID } / orgID: {currObj.organization.orgID }</span> </div>
          {/*<div><span className={classes.span} > orgID: {currObj.organization.orgID }</span> </div>*/}
        </div>
      </ListItem>
      <Divider variant="inset" component="hr"  className={classes.span} />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WatchLater />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Дата создания" secondary={new Intl.DateTimeFormat('ru-Ru').format(new Date(currObj.objCreationDate)) } />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StarHalfIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Статус" secondary={currObj.objStatus === 1 ? 'в разработке (наш)': 'смежный'} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DonutLarge />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Тип" secondary={currObj.objType} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeWorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Смежники" secondary={smegObjList} /> 
         
      </ListItem>
    </List>
  );
}
 
const mapStateToProps = createStructuredSelector ({
  selectObjCurr: selectObjCurrObj, // события короткие данные для таблицы
});

export default connect(mapStateToProps)(CartGenInfo); 
