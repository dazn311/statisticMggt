import React from 'react'; 
 

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
   

import { selectObjRectPage } from '../../../store/adminPanelTrest/objsPage.selectors';  
import { selectUserById } from '../../../store/adminPanelTrest/adminPanelTrest.selectors';

import './tabOneMenu.styles.scss';
import CartGenInfo from './CardGenInfo';
// import CardEventInfo from './CardEventInfo';
import CardUserDetails from './CardUserDetails';
import { id } from 'date-fns/locale';
 
 
  
const TabOneMenu = ({ idUser,curUser, selectUser,  orgRow, selectObjRect, isOpen=false, closeDetail }) => {

  // useEffect(() => {
  //   console.log(' fetchObjRectList idUser', idUser);
  //   if (idUser ){
  //     // fetchObjRectList(idUser);
  //   }
  //
  //
  // },[idUser,fetchObjRectList]) 
 
  console.log('selectUser 258-000',selectUser); 
  console.log('888 TabOneMenu idUser',idUser); 
    

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
    <div style={{display:'flex',flexDirection: window.innerWidth < 500 ? 'column' : 'row', justifyContent:'start'}} >
      <div  style={{display:'flex',flexDirection:'column',boxShadow: '1px solid #e4dfdf2e',margin: '10px', minWidth: 300, width: window.innerWidth < 500 ? '100%': 400,  border: '1px solid #e2e2e2',
    height: 'fit-content'}} >
          {/*<div style={{padding: '2px 10px', fontSize: 'larger', color: '#2323a2',textAlign: 'center', fontWeight: 500, lineHeight: 1.75, whiteSpace: 'normal', letterSpacing: '0.02857em'}} >Общие сведения</div>*/}
          <CartGenInfo curUser={curUser}  objRect={selectObjRect} ></CartGenInfo>
      </div> 

      <div  style={{display:'flex' ,boxShadow: '1px solid #e4DFDF2e',margin: '5px', minWidth: 300, width: window.innerWidth < 500 ? '100%': 500}} >
         {/* <div style={{padding: '2px 10px', fontSize: 'larger', color: '#2323a2',textAlign: 'center', fontWeight: 500, lineHeight: 1.75, whiteSpace: 'normal', letterSpacing: '0.02857em'}}  >События</div> */}
         <CardUserDetails curUser={curUser}  ></CardUserDetails>
      </div>


    </div>
  );
}

// const mapStateToProps = createStructuredSelector ({
//   selectObjRect: selectObjRectPage, // события короткие данные для таблицы 
//   selectUserId:  selectUserId(props.match.params.iduser), // события короткие данные для таблицы 
// });

// const mapStateToProps = (state, props) => ({
//   selectObjRect: selectObjRectPage, // события короткие данные для таблицы 
//   selectUserById:  selectUserById(props.idUser)(state), // события короткие данные для таблицы  
// });

const makeMapStateToProps = () => {
  const selectUserBy = selectUserById()
  const mapStateToProps = (state, props) => {
    return {
      selectUser: selectUserBy(state, props.idUser)
    }
  }
  return mapStateToProps
}

// const mapStateToProps = createStructuredSelector({
//   isLoading: state => !selectIsCollectionsLoaded(state)
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchObjRectList: (start,end) => dispatch(fetchObjRectListAsync(start,end)),
// });
 
export default connect(makeMapStateToProps)(TabOneMenu);