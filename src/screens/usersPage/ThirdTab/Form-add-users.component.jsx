import React,{ useState,useCallback } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
 
import { appendUserAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      
    },
    display: 'flex', 
    '& div': {
      margin: 0,
      marginTop: 10,
      marginRight: 10,
    },
  },
  btnSb: {
    margin: 30,

  },
  '& .MuiInputLabel-formControl': {
    left: 10,
    top: -5,

  }
}));
 

const initanalState = {user_fio:" ",login:" ",password:" ",user_fio_lit:" "};
////////////////////////////////////////////////////

const FormUsersAddToDb = ({appendUser}) => {
  const classes = useStyles();
  const [fields, setFields] = useState(initanalState);

  const capitalize = (text) => {
    var i, words, w, result = '';
    words = text.split(' ');
    for (i = 0; i < words.length; i += 1) {
        w = words[i];
        result += w.substr(0,1).toUpperCase() + w.substr(1);
        if (i < words.length - 1) {
            result += ' ';    // Add the spaces back in after splitting
        }
    }
    return result;
  }

  const onBlurFio = useCallback((e) => {
    setFields(prevState => ( {...prevState, [e.target.id]: e.target.value} ))
  },[]);
  
  const saveData = useCallback((e) => {
    appendUser(fields);
  },[appendUser,fields]);

  const handleFieldFio = useCallback((e) => {
    let shorName = '';
    let lns = e.target.value.trim().split(' ').length;
    let lns2 = e.target.value.trim();
    lns2 = lns2.split(' ');

    if ( lns > 1) {
      if ( lns2[0].length > 2){
        shorName = lns2[0];
      }
      lns2.forEach((l,index) => {
        if (index > 0 && l.length > 2) {
          let shName = l.slice(0,1);
          shName = ' '+ shName + '.';
          shorName += shName;
        }
      })
    }
    
    setFields(prevState => ( {...prevState, user_fio_lit: capitalize(shorName)} ));
  },[]);
  
  // user_fio":"Матвеев Владимир Олегович","login":"matvey","password":"1234","user_fio_lit":"Матвеев В.О.
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        
        {/* <TextField onChange={handleFieldFio} id="user_fio" label="Ф.И.О." type="text" variant="filled" defaultValue={fields.user_fio} onBlur={onBlurFio}/> */}
        <TextField onChange={handleFieldFio} id="user_fio" label="Ф.И.О." type="text"   onBlur={onBlurFio}/>
        <TextField id="login" label="Логин" type="text"   onBlur={onBlurFio}/>
        <TextField id="password" label="Пароль" type="password"   onBlur={onBlurFio}/>
      </div>
 
      <div>
      <TextField id="user_fio_lit" label="Ф.И.О. коротко" type="text"  value={fields.user_fio_lit ? fields.user_fio_lit : ''} onBlur={onBlurFio}/>
      <Button onClick={()=>{saveData()}} className={classes.btnSb} variant="contained" color="primary">
        Сохранить
      </Button>
      
      </div>
    </form>
  );
}

// const mapStateToProps = createStructuredSelector ({
//   selectEventShort: selectEventShortPoints, // события короткие данные для таблицы
//   statusEventPoint: selectStatusEventPoint, // классификация статусов "new_msg"
//   statusEnumEventPointColor: selectStatusEnumEventPointColor, // for color elements
//   datesOfFetchForEvent: fetchDataForEventShortPoints, //  дата начала и конца для запроса
// });

const mapDispatchToProps = (dispatch) => ({
  // запрос для событий за период 
  appendUser: (d) => dispatch(appendUserAsync(d)),
});  

export default connect(null,mapDispatchToProps)(FormUsersAddToDb);

/////////////////

// Users: 
//     [{
//       user_id: 0,
//       user_fio: 'Васильев Олег Михайлович',
//       login: '',
//       password: '',
//       user_status: 1,
//       user_active: 1,
//       user_role: 2,
//       user_reg_date: 152458484848,
//       user_end_date: 165454545455,
//       user_parent: 0,
//       user_child: 2,
//       user_perms: 1,
//       user_locked: false,
//       user_org_id: 0,
//       user_fio_lit: 'Васильев В.М.',
//       user_last_seen: 0,
//     },] 