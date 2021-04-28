import React,{ useEffect} from 'react'; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
  
import { selectObjsPage } from '../../../store/adminPanelTrest/StatisticPage.selectors';  

import { selectObjRectPage } from '../../../store/adminPanelTrest/objsPage.selectors';  
import { fetchObjRectListAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions';  

import './eventDetail.styles.scss';
import CartGenInfo from './CardGenInfo';
import CardEventInfo from './CardEventInfo';
 
 
  
const EventDetail = ({ idObj,currObj, selectObjs, orgRow, fetchObjRectList, selectObjRect, isOpen=false, closeDetail }) => {

  useEffect(() => {
    console.log(' fetchObjRectList idObj', idObj);
    if (idObj ){
      fetchObjRectList(idObj);
    }
      

  },[idObj,fetchObjRectList])


   

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
          {/*<div style={{padding: '2px 10px', fontSize: 'larger', color: '#2323a2',textAlign: 'center', fontWeight: 500, lineHeight: 1.75, whiteSpace: 'normal', letterSpacing: '0.02857em'}} >Общие сведения</div>*/}
          <CartGenInfo currObj={currObj}  objRect={selectObjRect} ></CartGenInfo> 
      </div> 

      <div  style={{display:'flex',flexDirection:'column',boxShadow: '1px solid #e4DFDF2e',margin: '5px auto', minWidth: 360}} >
          {/*<div style={{padding: '2px 10px', fontSize: 'larger', color: '#2323a2',textAlign: 'center', fontWeight: 500, lineHeight: 1.75, whiteSpace: 'normal', letterSpacing: '0.02857em'}}  >События</div>*/}
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