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

import { selectObjRectPage } from '../../../store/adminPanelTrest/objsPage.selectors';  
import { fetchObjRectListAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
//fetchObjRectListAsync

import './eventDetail.styles.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog: {
    minWidth: 1600,
    marginLeft: 'calc(100% - 800px)',
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
  console.log('dateStr',dateStr);
  return  '2021-03-12T20:23:10.000Z';
}
 
const EventDetail = ({ orgRow, tabValue={},fetchObjRectList,selectObjRect, isOpen, closeDetail }) => {
  // const [open, setOpen] = React.useState(false);
  const [userDataS, setUserDataS] = React.useState([]);
  const [currentIdEvent, setCurrentIDEvent] = React.useState(0);


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  // console.log('EventDetail -- orgRow',orgRow);
  // console.log('EventDetail -- userDataS',userDataS);

  // const handleClickOpen = () => {
  //   // setOpen(true);
  //   fetchObjRectList(userID);
  // };

  const selectEvent =(id) => {
    // console.log('select sss', id);
    setCurrentIDEvent(id);
  }
  const handleClose = () => {
    // setOpen(false);
    closeDetail();
  };
   
  const handleSave = () => {
    closeDetail();
    // handleClose();
  }; 

  console.log('rere -- EventDetail');

  useEffect(() => {
  //   //{ "objectID": 5799, "limit":20,"offset":0}
    fetchObjRectList(orgRow.objID);
    // console.log('useEffect -- fetchObjRectList');

  },[orgRow.objID,fetchObjRectList])

  useEffect(() => {
    setUserDataS(selectObjRect);
    // console.log('useEffect -- selectObjRect',selectObjRect);
  },[selectObjRect])
  
  // const changeValue = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.placeholder);
  //   console.log(event.target.value);
  //   // console.log(userDataS[userKey]);
  //   // setUserDataS({...userDataS,[event.target.placeholder]:event.target.value})
  // };
   //const {user_fio, login, password, user_fio_lit, id} = req.body;

   if( !selectObjRect ) {
    return (<span>loading</span>)
   } 
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        dssdsd
      </Button> */}
      <Dialog
        classes={{ paper: classes.dialog}}
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="responsive-dialog-title"
        style={{minWidth:1600, width:1000}}
      >
        <DialogTitle id="responsive-dialog-title">{"Карточка объекта"}</DialogTitle>
        <DialogContent style={{minWidth:1600, width:1000}}>
            <DialogContentText>
              <div style={{display:'flex',width:500}}><div style={{width:200}}>объект:</div><div style={{color:'blue'}}>{orgRow.objName}</div></div>
              <div style={{display:'flex',width:500}}><div style={{width:200}}>Балансодержатель:</div><div style={{color:'blue'}}>{orgRow.organization}</div></div>
              {/* <div style={{display:'flex',width:500}}><div style={{width:500, textAlign: 'center', borderTop:'1px solid red'}}>Таблица:</div></div> */}
            </DialogContentText>

            <div class="wrap-form">
            <div class="admin-list">

                <div class="admin-list__header header-tab">События объектов</div>

                 
                    <List class="list-group"  style={{paddingLeft: '0px'}}>
                      {userDataS && userDataS
                      // .filter(userKey => (userKey !== 'id' && userKey !== 'password'))
                      .map((rec,index) => (
                        <ListItem  button onClick={() => selectEvent(index)} key={index}   style={{borderBottom:'1px solid grey'}}   >{rec.rec_name}</ListItem>
                        // <li key={rec.rec_id} id={index} data-objectID={rec.rec_id}  class="list-group-item">{rec.rec_name} onClick={selectEvent} </li>
                      ))} 
                    </List>
                
            </div>
            <div data-detailID="1" class="admin-list-detail">

                <div class="admin-list-detail-activeCompany">
                    <div class="admin-list__header header-tab">Замечание по событию</div>

                    <table class="table table-hover" data-smegTabID="0">

                        <tbody>
                            {/* <tr>
                                <td>Комментарий</td>
                                <td data-objectDetails="comments">Проблемы пересечения границ</td>
                            </tr> */}
                            <tr>
                                <td  style={{color:'grey'}}>Дата создания</td>
                                <td data-objectDetails="dataInit">{userDataS[currentIdEvent] ? formatDate(userDataS[currentIdEvent].rec_date) : '16.01.21'}</td>
                            </tr>
                            <tr>
                                <td  style={{color:'grey'}}>Статус</td>
                                <td data-objectDetails="dataInit">{userDataS[currentIdEvent] ? userDataS[currentIdEvent].rec_status : '2'}</td>
                            </tr>
                            <tr>
                                <td  style={{color:'grey'}}>Тип объекта</td>
                                <td data-objectDetails="dataInit">{userDataS[currentIdEvent] ? userDataS[currentIdEvent].objType : '2'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="admin-list-detail-activeCompany">
                    <div class="admin-list__header header-tab">Организация инициировала событие</div>

                    <table class="table table-hover" data-smegTabID="1">

                        <tbody>
                            <tr>
                                <td  style={{color:'grey'}}>организация</td>
                                <td data-objectAccess="organization">{userDataS[currentIdEvent] ? userDataS[currentIdEvent].sender.orgname : 'УК Хорошовская'}</td>
                            </tr>
                            <tr>
                                <td  style={{color:'grey'}}>статус</td>
                                <td data-objectAccess="status">представитиль баланса содержателя</td>
                            </tr>
                            <tr>
                                <td  style={{color:'grey'}}>Адрес</td>
                                <td data-objectAccess="adres">ул. Хорошовское ш. 22</td>
                            </tr>
                            <tr>
                                <td  style={{color:'grey'}}>Контакты</td>
                                <td data-objectAccess="contacts">{userDataS[currentIdEvent] ? userDataS[currentIdEvent].sender.username : 'УК Хорошовская'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="admin-list-detail-activeCompany">
                    <div class="admin-list__header header-tab">Организация ответчик события</div>

                    <table class="table table-hover" data-smegTabID="2">

                        <tbody>
                            <tr>
                                <td  style={{color:'grey'}}>организация</td>
                                <td data-objectDetailsOtvetchikOrganization="organization">{userDataS[currentIdEvent] ? userDataS[currentIdEvent].receip.orgname : 'УК Хорошовская'}</td>
                            </tr>
                            <tr>
                                <td  style={{color:'grey'}}>Объект</td>
                                <td data-objectDetailsOtvetchikOrganization="adres">{userDataS[currentIdEvent] ? userDataS[currentIdEvent].receip.objname : 'УК Хорошовская'}</td>
                            </tr>
                            <tr>
                                <td  style={{color:'grey'}}>Контакты</td>
                                <td data-objectDetailsOtvetchikOrganization="contacts">{userDataS[currentIdEvent] ? userDataS[currentIdEvent].receip.username : 'нет данных'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
 
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}  color="primary">
            Отмена
          </Button> */}
          <Button onClick={handleSave} color="primary" autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  
const mapStateToProps = createStructuredSelector ({
  selectObjRect: selectObjRectPage, // события короткие данные для таблицы 
});

const mapDispatchToProps = (dispatch) => ({
  fetchObjRectList: (start,end) => dispatch(fetchObjRectListAsync(start,end)),
}); 

export default connect(mapStateToProps,mapDispatchToProps)(EventDetail);  