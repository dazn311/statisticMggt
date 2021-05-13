import React, { useEffect }  from 'react';
 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import generator from 'generate-password';
// let generator = require('generate-password');

import { makeStyles, useTheme } from '@material-ui/core/styles'; 
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Switch from '@material-ui/core/Switch';

// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
import SyncIcon from '@material-ui/icons/Sync';

import CheckBox from '../../../components/checkBox/CheckBox'; 
import DialogSetDate from '../../../components/dialogSetDate/DialogSetDate'; 



import { selectAllOrgFromUsersDb } from '../../../store/adminPanelTrest/adminPanelTrest.selectors';
import { updateCurUserFullData } from '../../../store/user/user.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '95%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 500,
    overflow: 'auto',
    border: '1px solid #8080802e',
    margin: '4px 8px',
  },
  span: {
    color: '#1976d2'
  },
  panelTitle: {
    color: '#FFF'
  },
  red: {
    color: 'red'
  }, 
  input: {
    "&::selection": {
      backgroundColor: "lightgreen",
      color: "red"
    }
  }
}));
// curUser={curUser} objRect={selectObjRect}


const EditBtn = () => (<Fab color="secondary" size='small' aria-label="edit">
<EditIcon fontSize='small' />
</Fab>);

// .MuiFormControl-root

const themeText = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                minWidth: 220,
                width: 300, 
            }
        }, 
        MuiInputBase : {
            input: {
                // color: 'white'
            },
        },
        MuiGrid: {
            Container: {
                flexWrap:'nowrap'
            }
        }
    }, 
  });

  

const TxtField = ({txt, changeText, dis}) => {
    // const classes = useStyles();
    const theme = useTheme();

    return( 
        <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{flexWrap: 'nowrap'}} >
                <AccountCircle color='primary' />
                </Grid>
                <Grid item   >
                <MuiThemeProvider theme={themeText}>
                    <TextField
                        onChange={changeText}
                        inputProps={{ style: {   color: dis ? 'grey' : theme.palette.primary.main}}}
                        disabled={dis} id="input-with-icon-grid"
                        //label="Ф.И.О."
                        value={txt}
                        type={'string'}
                    /> 
                </MuiThemeProvider>
                </Grid>
        </Grid>
)};

const PasswordField = ({txt, changeText, dis, genPassWord}) => {
    // const classes = useStyles();
    const theme = useTheme();

    return( 
        <Grid container spacing={1} alignItems="flex-end" style={{flexWrap: 'nowrap'}} >
                <Grid item style={{flexWrap: 'nowrap'}} >
                    <LockOpenIcon color='primary' />
                </Grid>
                <Grid item   >
                    <MuiThemeProvider theme={themeText}>
                        <TextField
                            onChange={changeText}
                        inputProps={{ style: {   color: dis ? 'grey' : theme.palette.primary.main}}}
                          disabled={dis} id="input-with-icon-grid"
                        //   label="Ф.И.О."
                        value={txt}
                        />
                    </MuiThemeProvider>
                </Grid>
                <Grid item   >
                    <Button disabled={dis} onClick={genPassWord} variant="outlined"  color="secondary" style={{ maxHeight: 30}}> Ген.</Button>
                </Grid>
        </Grid>
)};

const PhoneField = ({txt, changeText, dis}) => {
    // const classes = useStyles();
    const themess = useTheme();

    return( 
        <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{flexWrap: 'nowrap'}} >
                <PhoneIcon color='primary' />
                </Grid>
                <Grid item   >
                <MuiThemeProvider theme={themeText}>
                    <TextField
                        onChange={changeText}
                    inputProps={{ style: {   color: dis ? 'grey' : themess.palette.primary.main}}}
                      disabled={dis} id="input-with-icon-grid" 
                    //   label="Ф.И.О." 
                    value={txt}
                    /> 
                </MuiThemeProvider>
                </Grid>
        </Grid>
)};

const MailField = ({txt, changeText, dis}) => {
    // const classes = useStyles();
    const themess = useTheme();

    return( 
        <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{flexWrap: 'nowrap'}} >
                    <MailOutlineIcon color='primary' />
                </Grid>
                <Grid item   >
                <MuiThemeProvider theme={themeText}>
                    <TextField
                        onChange={changeText}
                    inputProps={{ style: {   color: dis ? 'grey' : themess.palette.primary.main}}}
                      disabled={dis} id="input-with-icon-grid" 
                    //   label="Ф.И.О." 
                    value={txt}
                    /> 
                </MuiThemeProvider>
                </Grid>
        </Grid>
)};

const SwitchBtn = ({handleChange, state}) => (<Switch
    checked={state.checkedA}
    onChange={handleChange}
    name="checkedA"
    inputProps={{ 'aria-label': 'secondary checkbox' }}
  />);

const userLoginInitial = (userName) => {
    return userName ? userName.split(' ')[0]: 'Пользователь'

}

/////////////////////////////////////////////////////

const CardUserDetails = ({ curUser, selectAllOrgFromUsers, userData, updateCurUserData }) => {
    const [state, setState] = React.useState(selectAllOrgFromUsers);


    const [userID, setUserID] = React.useState(curUser.user_id);
    const [userName, setUserName] = React.useState(curUser.user_name);
    const [userShortName, setUserShortName] = React.useState(curUser.user_name);

    const [orgID, setOrgID] = React.useState(0);
    const [org, setOrg] = React.useState(selectAllOrgFromUsers[0]);

    const [userRole, setUserRole] = React.useState(curUser.user_role);
    const [userPost, setUserPost] = React.useState(curUser.user_post);
    const [userLogin, setUserLogin] = React.useState(userLoginInitial(curUser.user_shortname));
    const [userPassword, setUserPassword] = React.useState('');
    const [userTel, setUserTel] = React.useState('+7 (925) 789-12-25');
    const [userMail, setUserMail] = React.useState('ShmidtDU@mos.ru');
    const [userStatus, setUserStatus] = React.useState(false);
    const [userLastSeen, setUserLastSeen] = React.useState("2021-01-01T10:29:21.916Z");

    const [ userEndDate, setUserEndDate] = React.useState('2021-09-28'); // дата окончания регистрации

    const [textS, setTextS] = React.useState('');
    const [checkS, setCheckS] = React.useState({checkedA: false, checkedB: true, });

    const classes = useStyles();
    const curTheme = useTheme();
    //   curTheme.palette.primary.main

    const updateUserData = () => {


        setTimeout(() => {
            const newData = [
                {
                    "user_id": userID,
                    "user_name": userName,
                    "user_login": userLogin,
                    "user_password": userPassword,
                    "user_status": userStatus,
                    "user_shortname": userShortName,
                    "user_org_id": orgID,
                    "org_name": org,
                    "user_role": userRole,
                    "user_post": userPost,
                    "user_email": userMail,
                    "user_tel": userTel,
                    "user_reg_date": userData.user_reg_date || "2021-01-01T13:13:48.537Z",
                    "user_end_date": userEndDate + "T19:19:48.537Z",
                    "user_last_seen": userLastSeen
                }
            ];
            updateCurUserData(newData)
        },500);


    }
    
      const setUserDateActive = (event) => {
          // console.log('event.target.value',event.toLocaleString().split(',')[0])
          setUserEndDate( event.toLocaleString().split(',')[0] );
      };

      const changeUserNam = (event) => {
          // console.log('event.target.value',event.target.value)
          setUserName( event.target.value );
      };


      const changeUserPost = (event) => {
          setUserPost( event.target.value );
      };
      const changeUserLogin = (event) => {
          setUserLogin( event.target.value );

      };
      const changeUserPassword = (event) => {
          setUserPassword( event.target.value );
      };

      const changeUserTel = (event) => {
          setUserTel( event.target.value );
      };
      const changeUserMail = (event) => {
          setUserMail( event.target.value );
      };


      const handleChangeOrg = (event) => {
        const name = event.target.name;
        setOrg( event.target.value );
      };

      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

      const handleChangeCheck = (event) => {
        setCheckS({ ...state, [event.target.name]: event.target.checked });
          // console.log('event.target.name',event.target.checked)
          if (!event.target.checked){
              updateUserData();
          }

      };

      const changeText = (event) => {
        setTextS( event.target.value );
      };

      const genPassWord = (event) => {
          let password2 = generator.generate({
              length: 10,
              numbers: true
          });
          setUserPassword(password2);
      };
   
    let password = generator.generate({
        length: 10,
        numbers: true
    });

    const setChecked = (status) => {
        setUserStatus(status);
    }






    useEffect(() => {

        if (userData !== {}){
            const {  user_role, user_status, user_email, user_tel, user_reg_date, user_end_date, user_last_seen, user_org_id, org_name } = userData ;
            setUserTel(user_tel);
            setUserMail(user_email);
            setOrgID(user_org_id);
            setOrg(org_name);
            setUserEndDate((user_end_date || '2021-01-01T15:15').split('T')[0]);
            if ( user_status === 'Аккаунт активен'){
                setUserStatus(true);
            }
            setUserLastSeen(user_last_seen);
        }



    },[userData]);



 
  return (
    <div className="row">
        <div className="col-md-5">
            <div className="panel">
                <div className="panel-heading">
                    {/* <span className="panel-icon"> <i className="fa fa-star"/> </span> */}
                    <span className={classes.panelTitle}> Редактировать организацию</span>
                </div>
                <div className="panel-body pn">
                    <table >
                        <thead>
                            <tr className="hidden">
                                <th className="mw30">#</th>
                                <th>Имя</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> </td>
                                <td>Организация</td>
                                <td> 
                                <Select
                                    native
                                    value={org}
                                    onChange={handleChangeOrg}
                                    >
                                    {state.map((el, index) => <option key={index} value={el}>{el}</option>)}
                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                                <td>Вышесоящия</td>
                                <td>
                                    <Select
                                    native
                                    disabled
                                    value={org}
                                    onChange={handleChangeOrg}
                                    >
                                    {state.map((el, index) => <option key={index} value={el}>{el}</option>)}
                                    </Select>
                                </td>
                            </tr> 
                             
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="panel">
                <div className="panel-heading">
                    <span className={classes.panelTitle}> Редактировать общие данные <SwitchBtn handleChange={handleChangeCheck} state={checkS} /> </span>
                </div>
                <div className="panel-body pn">
                    <table >
                        <thead>
                            <tr className="hidden">
                                <th className="mw30">#</th>
                                <th>Имя</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>

                                </td>
                                <td>Ф.И.О.</td>
                                <td> 
                                    <TxtField changeText={changeUserNam} dis={!checkS.checkedA} txt={userName} />
                                    {/* {curUser.user_name} (*)    */}
                                    </td>
                            </tr>
                             <tr>
                                <td>

                                </td>
                                <td>Должность</td>
                                <td> 
                                    <TxtField changeText={changeUserPost} dis={!checkS.checkedA} txt={userPost} />
                                    {/* {curUser.user_name} (*)    */}
                                    </td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td>Логин: </td>
                                <td> <TxtField changeText={changeUserLogin} dis={!checkS.checkedA} txt={userLogin} /></td>
                            </tr>
                            <tr>
                                <td>  </td>
                                <td>Пароль: </td>
                                <td style={{display:'flex'}} >
                                    <PasswordField changeText={changeUserPassword} dis={!checkS.checkedA} txt={userPassword} genPassWord={genPassWord} />
                                </td>
                            </tr>
                            <tr >
                                <td>  </td>
                                <td style={{borderTop:'1px solid #5f5f5f'}}>телефон</td>
                                <td>  <PhoneField changeText={changeUserTel} dis={!checkS.checkedA} txt={userTel} /></td>
                            </tr>
                            <tr>
                                <td>  </td>
                                <td>Почта</td>
                                <td>  <MailField changeText={changeUserMail} dis={!checkS.checkedA} txt={userMail} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="panel">
                <div className="panel-heading">
                    <span className={classes.panelTitle}>Продление подписки</span>
                </div>
                <div className="panel-body pn">
                    <table >
                        <thead>
                            <tr className="hidden">
                                <th className="mw30">#</th>
                                <th>Имя</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>

                                </td>
                                <td>Активировать</td>
                                <td> <CheckBox checked={userStatus} setChecked={setChecked} /></td>
                            </tr>
                            <tr>
                                <td>  </td>
                                <td>Действует до: </td>
                                <td>  <DialogSetDate selectedDate={userEndDate} setSelectedDate={setUserDateActive} caption={userEndDate} /> </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
    </div>
  );
}

 
const mapStateToProps = createStructuredSelector ({
    selectAllOrgFromUsers: selectAllOrgFromUsersDb, // события короткие данные для таблицы
  });


const mapDispatchToProps = (dispatch) => ({
  updateCurUserData: (start,end) => dispatch(updateCurUserFullData(start,end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardUserDetails);