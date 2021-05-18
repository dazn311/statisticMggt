import React,{ useEffect} from 'react'; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
  
import { selectObjsPage } from '../../../store/adminPanelTrest/StatisticPage.selectors';  

import { selectObjRectPage } from '../../../store/adminPanelTrest/objsPage.selectors';  
import { fetchObjRectListAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions';  

import './eventDetail.styles.scss';
import CartGenInfo from './CardGenInfo';
import CardEventInfo from './CardEventInfo';

const TabOneMenu = ({ idObj,currObj, fetchObjRectList, selectObjRect  }) => {

  useEffect(() => {
    // console.log(' fetchObjRectList idObj', idObj);
    if (idObj ){
      fetchObjRectList(idObj);
    }
  },[idObj,fetchObjRectList])

    console.log('444 idObj',idObj)
    console.log('444 selectObjRect',selectObjRect) // return []
    console.log('444 currObj',currObj)
  return (
    <div style={{display:'flex',flexWrap:'nowrap', flexDirection: window.innerWidth < 500 ? 'column' : 'row', justifyContent:'flex-start'}} >
          <CartGenInfo currObj={currObj}  objRect={selectObjRect} ></CartGenInfo>
        {selectObjRect && <CardEventInfo currObj={currObj} objRect={selectObjRect} ></CardEventInfo>}
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  selectObjRect: selectObjRectPage, // события короткие данные для таблицы 
  selectObjs: selectObjsPage, // события короткие данные для таблицы 
});

const mapDispatchToProps = (dispatch) => ({
  fetchObjRectList: (objectID, limit, offset) => dispatch(fetchObjRectListAsync(objectID, limit, offset)),
}); 
 
export default connect(mapStateToProps,mapDispatchToProps)(TabOneMenu);