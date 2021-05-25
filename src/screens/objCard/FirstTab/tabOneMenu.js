import React, {createRef, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectObjsPage } from '../../../store/adminPanelTrest/StatisticPage.selectors';  

import { selectObjRectPage } from '../../../store/adminPanelTrest/objsPage.selectors';  
import { fetchObjRectListAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions';  

import './eventDetail.styles.scss';
import './map-widget.css';
import CartGenInfo from './CardGenInfo';
import CardEventInfo from './CardEventInfo';
import CardMapInfo from "./CardMapInfo";
import CardYandexMap from "./CardYandexMap";

// parrent data idObj={idObj} currObj={currObj} -- local.row ///
const TabOneMenu = ({ idObj,currObj, fetchObjRectList, selectObjRect  }) => {
  const  mapContainer = createRef();
  useEffect(() => {
    // console.log(' fetchObjRectList idObj', idObj);
    if (idObj ){
      fetchObjRectList(idObj);
    }
  },[idObj,fetchObjRectList])

  return (
    <div style={{display:'flex',flexWrap:'nowrap', flexDirection: window.innerWidth < 500 ? 'column' : 'row', justifyContent:'flex-start'}} >
          <CartGenInfo currObj={currObj}  objRect={selectObjRect} ></CartGenInfo>
        {
            // selectObjRect &&
        // <CardEventInfo currObj={currObj} objRect={selectObjRect} ></CardEventInfo>
        }
      <div  style={{display:'flex',flexWrap:'nowrap', justifyContent:'center', position: 'relative', overflow: 'unset'}} >
        {currObj && <CardYandexMap objAdress={currObj.objName} />}
      </div>

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