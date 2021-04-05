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
import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
// import FlagIcon from '@material-ui/icons/Flag';
import ApartmentIcon from '@material-ui/icons/Apartment';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

import { selectObjCurrObj } from '../../../store/adminPanelTrest/objspages.selectors';  
// import BackdropForAllPage from '../../../components/blackDrop/black-drop.component';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    border: '1px solid #8080802e',
    margin: '4px 8px',
  },
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


  smegObjList = selectObjCurr && selectObjCurr.objRelatives.map((objIdSmeg, index)  => { 
    
    const newRec = objRect.find(rec  => {
      if (objIdSmeg === rec.receip.objectID){
        return true
      }else {
        return  false //objIdSmeg + ', ' 
      } 
    }) 
    if(newRec){
      return <p key={index} style={{margin: '0 4px', borderBottom:'1px solid grey'}} >{newRec.receip.objname} </p>
    } else {
      return <p key={index} style={{margin: '0 4px', borderBottom:'1px solid grey'}} >{objIdSmeg} (нет событий) </p>
    }
  })

 
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ApartmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={currObj.objName + ' (objID: ' + currObj.objID + ')' } secondary={currObj.organization.orgname + ' (orgID: ' + currObj.organization.orgID + ')' } />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
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
            <FormatSizeIcon />
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
