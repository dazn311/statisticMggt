import React,{ useEffect} from 'react';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Slide from '@material-ui/core/Slide';
// import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import Text from '@material-ui/core/TextField';
// import PersonIcon from '@material-ui/icons/Person';

import { useTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
 

import { selectObjsPage } from '../../../store/adminPanelTrest/StatisticPage.selectors'; 
// import { selectObjsPage, selectObjsInfoPage } from '../../../store/adminPanelTrest/StatisticPage.selectors'; 

import { selectObjRectPage } from '../../../store/adminPanelTrest/objsPage.selectors';  
import { fetchObjRectListAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
// import { fetchObjRectListAsync, fetchObjectsListAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
//fetchObjRectListAsync

import './eventDetail.styles.scss';
import CartGenInfo from './CardGenInfo';
import CardEventInfo from './CardEventInfo';
 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog: {
    position:'absolute',
    left: '50%',
    transform:'translateX(-50%)',
    minWidth: 1000,
    width: 600,
  },
  textField: {
    minWidth:300,
    borderLeft: '1px solid grey',
    marginLeft: 5,
    paddingLeft: 10,
  }
});

const formatDate = (dateStr='2021-03-02T20:23:10.000Z') => {
  //2021-03-12T20:23:10.000Z
  if(typeof dateStr === 'string' ){
    if(dateStr.split('T').length){
    return  dateStr.split('T')[1].slice(0,5) + '  (' + dateStr.split('T')[0] + ')';
  }
  }
  
  // return  dateStr.split('T')[1].slice(0,5) + '  (' + dateStr.split('T')[0] + ')';
  // console.log('dateStr',dateStr);
  return  '2021-03-12T20:23:10.000Z';
}
  
const EventDetail = ({ idObj,currObj, selectObjs, orgRow, fetchObjRectList, selectObjRect, isOpen=false, closeDetail }) => {
  // const [open, setOpen] = React.useState(false);
  const [userDataS, setUserDataS] = React.useState([]);
  const [currentIdEvent, setCurrentIDEvent] = React.useState(0);


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  
  

  const selectEvent =(id) => {
    // console.log('select sss', id);
    setCurrentIDEvent(id);
  }
  const handleClose = () => {
    // setOpen(false);
    setUserDataS([]);
    setCurrentIDEvent(0);
    closeDetail();
  };
   
  const handleSave = () => {
    setUserDataS([]);
    setCurrentIDEvent(0);
    closeDetail();
    // handleClose();
  };  

  // console.log('rere -- EventDetail -- selectObjRect',selectObjRect); // undefined
  // console.log('rere -- EventDetail -- selectObjs',selectObjs); // undefined
  // console.log('rere -- EventDetail -- currentIdEvent',currentIdEvent); // undefined

  useEffect(() => {
    console.log(' fetchObjRectList idObj', idObj);
    if (idObj ){
      fetchObjRectList(idObj);
    }
      

  },[idObj,fetchObjRectList])

  useEffect(() => {
    setUserDataS(selectObjRect); 
    
  },[selectObjRect])
   


  //  if( !selectObjRect ) {
  //   console.log('!selectObjRect');
  //   return (<span>loading</span>)
  //  } 
  //  if( !orgRow ) {
  //   console.log('!orgRow');
  //   return (<span>loading</span>)
  //  } 

   let orgN = '';
   let objN = '';
   if (orgRow){
    // console.log('orgRow 222');
     if(orgRow.objName){
      // console.log('orgRow.objName');
      objN = orgRow.objName;
     }
     
     if(orgRow.organization){
      // console.log('orgRow.organization');
       if(orgRow.organization.orgname){
        orgN = orgRow.organization.orgname;
       }
     }
     
   }

   
 
  return (
    <div style={{display:'flex',flexWrap:'wrap', justifyContent:'flex-start'}} >
      <div  style={{display:'flex',flexDirection:'column',boxShadow: '1px solid #e4dfdf2e',margin: '5px auto', minWidth: 300}} >
          <div style={{padding: '2px 10px', fontSize: 'larger', color: '#2323a2',textAlign: 'center', fontWeight: 500, lineHeight: 1.75, whiteSpace: 'normal', letterSpacing: '0.02857em'}} >Общие сведения</div>
          <CartGenInfo currObj={currObj}  objRect={selectObjRect} ></CartGenInfo> 
      </div> 

      <div  style={{display:'flex',flexDirection:'column',boxShadow: '1px solid #e4DFDF2e',margin: '5px auto', minWidth: 360}} >
          <div style={{padding: '2px 10px', fontSize: 'larger', color: '#2323a2',textAlign: 'center', fontWeight: 500, lineHeight: 1.75, whiteSpace: 'normal', letterSpacing: '0.02857em'}}  >События</div>
          <CardEventInfo currObj={currObj} objRect={selectObjRect} ></CardEventInfo> 
      </div> 


    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  selectObjRect: selectObjRectPage, // события короткие данные для таблицы 
  selectObjs: selectObjsPage, // события короткие данные для таблицы 
});

const mapDispatchToProps = (dispatch) => ({
  fetchObjRectList: (start,end) => dispatch(fetchObjRectListAsync(start,end)),
}); 
 
export default connect(mapStateToProps,mapDispatchToProps)(EventDetail);  