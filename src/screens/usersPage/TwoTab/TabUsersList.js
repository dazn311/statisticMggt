'strick'
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import DialogUserEdit from './DialogUsersEdit';
 


import { selectAllUsersFromDb } from '../../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import { fetchAllUsersFromDB } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  borderSel: {
    borderLeft: '1px solid #cec7c79c',
  },
});

 

const TabUsersList = ({ selectUsersPage,fetchAllUsers }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchAllUsers(20);
  }, [])

  // console.log('rerender UsersTab2 : TabUsersList');
  // console.log('rerender selectUsersPage : ',selectUsersPage);
 
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Ф.И.О.</TableCell>
            <TableCell className={classes.borderSel} align="right">Ф.И.О. коротко</TableCell>
            <TableCell className={classes.borderSel} align="right">Логин</TableCell>
            <TableCell className={classes.borderSel} align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectUsersPage.length > 0 && selectUsersPage
          .filter(item => item.user_fio !== undefined)
          .map((row, index) => (
            <TableRow hover key={index}>
              <TableCell component="th" scope="row">
                { row.user_fio }
              </TableCell>
              <TableCell className={classes.borderSel} align="right">{row.user_fio_lit}</TableCell>
              <TableCell className={classes.borderSel}  align="right">{row.login}</TableCell>
              <TableCell className={classes.borderSel}  align="right"><DialogUserEdit userData={row}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
  
const mapStateToProps = createStructuredSelector ({
  selectUsersPage: selectAllUsersFromDb, // hjk
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllUsers: (start,end) => dispatch(fetchAllUsersFromDB(start,end)),
}); 

export default connect(mapStateToProps,mapDispatchToProps)(TabUsersList);  
  
 
  