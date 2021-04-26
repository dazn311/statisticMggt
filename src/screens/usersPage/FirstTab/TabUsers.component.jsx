'strick'
import React from 'react'; 

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'; 
import Pagination from '@material-ui/lab/Pagination'; 
  
import MessAlert from './Messages.alert';
   
  
import EventDetail from './EventDetail';
 
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderTop: '1px solid rgb(130 119 119 / 47%)'
  },
}); 



////////////////////////////

// let pageCoutnt = 0;
const TabUsersComponent = ({  tabValue, showEvents, handleChangePage}) => {

 const classes = useStyles();

  return ( 
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{padding: '6px 4px', textAlign:'center',  borderRight:'1px solid #8080805c'}}>id</TableCell>
            <TableCell align="right">ФИО</TableCell> 
            <TableCell align="right">Организация</TableCell>
            <TableCell align="right">последняя активность</TableCell> 
            <TableCell align="right">Дата активности</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabValue && tabValue
          // .filter((row,i) => i < 16)
          .map((row, index) => (
            <TableRow key={index} onClick={()=> { showEvents(row)}}  style={ {backgroundColor: index % 2 === 0 ? '#80808038': ''}} >
              <TableCell align="left" style={{backgroundColor:row.color, padding: '6px 4px', textAlign:'center',  borderRight:'1px solid #8080805c'}}>{index +1}</TableCell>
              <TableCell component="th" scope="row" style={{borderRight:'1px solid #8080805c'}} >
                {row.user_name}
              </TableCell>
              <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_shortname}</TableCell>
              <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_role}</TableCell>
              <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_post}</TableCell>
               
            </TableRow>
          ))}
        </TableBody>
           
      </Table>
      <div style={{display:'flex',margin: 18}}> 
         <Pagination count={5} page={0} onChange={handleChangePage} color="primary" />
      </div>
     
    </TableContainer>
     
    {/*<EventDetail  orgRow={orgRow}  isOpen={isOpenDetail} closeDetail={closeDetail} />*/}
    {/*<MessAlert  openRed={openRed} openGreen={openGreen} />*/}
    </>
  );
}
 
  export default TabUsersComponent; 