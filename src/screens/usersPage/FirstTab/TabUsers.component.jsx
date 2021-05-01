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
  
// import MessAlert from './Messages.alert';
// import EventDetail from './EventDetail';
 
const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    maxWidth: '100%',
    borderTop: '1px solid rgb(130 119 119 / 47%)', 
  },
}); 

const TabCellMobile = ({row}) => {
  const cell = <div style={{width: '100%' }} ><div style={{width: '100%', borderBottom: '1px solid lightgrey'}}  >{row.user_name}</div><div>УК {row.user_org_id}</div></div>
  return cell;
}

////////////////////////////
 
// let pageCoutnt = 0;
const TabUsersComponent = ({  tabValue, showEvents, handleChangePage,  page}) => {
  const classes = useStyles();
  const amPage2 = parseInt(tabValue.length / 10) +1;
  const widthW = window.innerWidth;

  if ( widthW < 420) {
    return ( 
      <>
      <TableContainer style={{ overflowX: 'unset', marginTop: 8, maxWidth:'100%'}} component={Paper}>
        <Table  className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{padding: '6px 2px', textAlign:'center',  borderRight:'1px solid #8080805c'}}>id</TableCell>
              <TableCell style={{padding: '6px 4px', textAlign:'center',  borderRight:'1px solid #8080805c'}} align="right">ФИО/Огр</TableCell> 
              <TableCell style={{padding: '6px 4px', textAlign:'center',  borderRight:'1px solid #8080805c'}} align="right">активность</TableCell>
              {/* <TableCell align="right">последняя активность</TableCell> 
              <TableCell align="right">Дата активности</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {tabValue && tabValue
            .filter((row,i) => i >= (page * 10 - 10) && i < (page * 10) )
            .filter((row,i) => row.user_name.split(' ').length > 1)
            .map((row, index) => (
              <TableRow key={index} onClick={()=> { showEvents(row)}}  style={ {backgroundColor: index % 2 === 0 ? '#80808038': ''}} >
                <TableCell align="left" style={{backgroundColor:row.color, padding: '6px 2px', textAlign:'center',  borderRight:'1px solid #8080805c'}}>{row.user_id}</TableCell>
                <TableCell component="th" scope="row" style={{borderRight:'1px solid #8080805c'}} >
                  <TabCellMobile row={row} /> 
                </TableCell>
                <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_role}</TableCell>
                {/* <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_role}</TableCell>
                <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_post}</TableCell> */}
                 
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        <div style={{display: tabValue.length ? 'flex': 'none', margin: 18, padding:5}}> 
           <Pagination  count={amPage2} page={page} onChange={handleChangePage} color="primary" />
        </div>
       
      </TableContainer>
       
      {/*<EventDetail  orgRow={orgRow}  isOpen={isOpenDetail} closeDetail={closeDetail} />*/}
      {/*<MessAlert  openRed={openRed} openGreen={openGreen} />*/}
      </>
    );
  }
 
 
  return ( 
    <>
    <TableContainer style={{ overflowX: 'unset', marginTop: 8, maxWidth:'100%'}} component={Paper}>
      <Table  className={classes.table} size="small" aria-label="a dense table">
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
          .filter((row,i) => i >= (page * 10 - 10) && i < (page * 10) )
          .filter((row,i) => row.user_name.split(' ').length > 1)
          .map((row, index) => (
            <TableRow key={index} onClick={()=> { showEvents(row)}}  style={ {backgroundColor: index % 2 === 0 ? '#80808038': ''}} >
              <TableCell align="left" style={{backgroundColor:row.color, padding: '6px 4px', textAlign:'center',  borderRight:'1px solid #8080805c'}}>{row.user_id}</TableCell>
              <TableCell component="th" scope="row" style={{borderRight:'1px solid #8080805c'}} >
                {row.user_name}
              </TableCell>
              <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_org_id}</TableCell>
              <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_role}</TableCell>
              <TableCell align="right" style={{borderRight:'1px solid #8080805c'}} >{row.user_post}</TableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div style={{display: tabValue.length ? 'flex': 'none', margin: 18, padding:5}}> 
         <Pagination  count={amPage2} page={page} onChange={handleChangePage} color="primary" />
      </div>
     
    </TableContainer>
     
    {/*<EventDetail  orgRow={orgRow}  isOpen={isOpenDetail} closeDetail={closeDetail} />*/}
    {/*<MessAlert  openRed={openRed} openGreen={openGreen} />*/}
    </>
  );
}
 
  export default TabUsersComponent; 