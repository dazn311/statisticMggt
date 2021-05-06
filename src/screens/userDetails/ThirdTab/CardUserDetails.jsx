import React  from 'react';
 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles'; 
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import CheckBox from '../../../components/checkBox/CheckBox'; 
import DialogSetDate from '../../../components/dialogSetDate/DialogSetDate'; 



import { selectAllOrgFromUsersDb } from '../../../store/adminPanelTrest/adminPanelTrest.selectors';
 
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
}));
// curUser={curUser} objRect={selectObjRect}





/////////////////////////////////////////////////////

const CardUserDetails = ({ curUser, selectAllOrgFromUsers }) => {
    const [state, setState] = React.useState(selectAllOrgFromUsers);

      const classes = useStyles();
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
      

  console.log('curUser', curUser); 
//   console.log('selectAllOrgFromUsers', selectAllOrgFromUsers); 

 
 
  // const formatDate = (data) => {
  //   // console.log('999 data',data);
  //   return new Intl.DateTimeFormat('ru-Ru').format(new Date(data))
  // }
 
  return (
    <div className="row">
        <div className="col-md-5">
            <div className="panel">
                <div className="panel-heading">
                    {/* <span className="panel-icon"> <i className="fa fa-star"/> </span> */}
                    <span className={classes.panelTitle}> Редактировать организацию</span>
                </div>
                <div className="panel-body pn">
                    <table className="table mbn tc-icon-1 tc-med-2 tc-bold-last">
                        <thead>
                            <tr className="hidden">
                                <th className="mw30">#</th>
                                <th>Имя</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td>Смена организации</td>
                                <td> 
                                <Select
                                    native
                                    value={state[0]}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'filled-age-native-simple',
                                    }}
                                    >
                                    {/* <option aria-label="None" value="" /> */}
                                    {state.map((el, index) => <option value={index}>{el}</option>)}
                                    {/* <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option> */}
                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="fa fa-desktop text-warning"></span>
                                </td>
                                <td>вышесоящию</td>
                                <td> <Select
                                    native
                                    value={state[0]}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'filled-age-native-simple',
                                    }}
                                    >
                                    {/* <option aria-label="None" value="" /> */}
                                    {state.map((el, index) => <option value={index}>{el}</option>)}
                                    {/* <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option> */}
                                    </Select> </td>
                            </tr> 
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="panel">
                <div className="panel-heading">
                    {/* <span className="panel-icon"> <i className="fa fa-star"/> </span> */}
                    <span className={classes.panelTitle}> Общие данные</span>
                </div>
                <div className="panel-body pn">
                    <table className="table mbn tc-icon-1 tc-med-2 tc-bold-last">
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
                                    <span className="fa fa-desktop text-warning"></span>
                                </td>
                                <td>Новое имя</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>{curUser.user_name} (*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-microphone text-primary"></span></td>
                                <td>Логин</td>
                                <td> <i className="fa fa-caret-down text-danger pr10"  style={{paddingRight:10}}/>password(*)</td>
                            </tr>
                            <tr  >
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td style={{borderTop:'1px solid #5f5f5f'}}>телефон</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>221-25-36(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td>Почта</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>{curUser.user_shortname} (*)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="panel">
                <div className="panel-heading">
                    {/* <span className="panel-icon"> <i className="fa fa-star"/> </span> */}
                    <span className={classes.panelTitle}>Продление подписки</span>
                </div>
                <div className="panel-body pn">
                    <table className="table mbn tc-icon-1 tc-med-2 tc-bold-last">
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
                                    <span className="fa fa-desktop text-warning"></span>
                                </td>
                                <td>Активировать</td>
                                <td> <CheckBox/></td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-microphone text-primary"></span></td>
                                <td>Действует до: </td>
                                <td>  <DialogSetDate caption={'28.09.2021(*)'} /> </td>
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

export default connect(mapStateToProps)(CardUserDetails);
// export default connect(mapStateToProps,mapDispatchToProps)(TabOneMenu); 