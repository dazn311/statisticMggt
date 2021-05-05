import React  from 'react';
 

import { makeStyles } from '@material-ui/core/styles'; 
 
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
const CardUserDetails = ({ curUser }) => {
    const classes = useStyles();

//   console.log('curUser', curUser); 

 
 
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
                    <span className={classes.panelTitle}> Статистика по  объектам</span>
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
                                <td>Все объектов</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>29(*)</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="fa fa-desktop text-warning"></span>
                                </td>
                                <td>Объектов в работе</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>14(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-microphone text-primary"></span></td>
                                <td>Согласованных объектов</td>
                                <td> <i className="fa fa-caret-down text-danger pr10"  style={{paddingRight:10}}/>15(*)</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="panel">
                <div className="panel-heading">
                    {/* <span className="panel-icon"> <i className="fa fa-star"/> </span> */}
                    <span className={classes.panelTitle}> Статистика по  сообщениям</span>
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
                                <td>За все время</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>140(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-microphone text-primary"></span></td>
                                <td>Вложений файлов</td>
                                <td> <i className="fa fa-caret-down text-danger pr10"  style={{paddingRight:10}}/>18(*)</td>
                            </tr>
                            <tr  >
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td style={{borderTop:'1px solid #5f5f5f'}}>Соощений за сутки</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>221(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td>Вложений за сутки</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>2(*)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="panel">
                <div className="panel-heading">
                    {/* <span className="panel-icon"> <i className="fa fa-star"/> </span> */}
                    <span className={classes.panelTitle}>Статистика по Событиям</span>
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
                                <td>Всего созданных</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>14(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-microphone text-primary"></span></td>
                                <td>Участников</td>
                                <td> <i className="fa fa-caret-down text-danger pr10"  style={{paddingRight:10}}/>28(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td>Закрытых собственных</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>21(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td style={{borderTop:'1px solid #5f5f5f'}}>Внутри своего объекта</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>2(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td>К смежному объекту</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>9(*)</td>
                            </tr>
                            <tr>
                                <td> <span className="fa fa-newspaper-o text-info"></span></td>
                                <td style={{borderTop:'1px solid #5f5f5f'}}>За сутки созданных</td>
                                <td> <i className="fa fa-caret-up text-info pr10" style={{paddingRight:10}}/>5(*)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
    </div>
  );
}

 

export default  CardUserDetails ;
