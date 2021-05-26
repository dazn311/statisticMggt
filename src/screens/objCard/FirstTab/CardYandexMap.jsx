import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { makeStyles } from '@material-ui/core/styles';



import './paintOnMap';
import { setObjCurrForDetailPageAsync  } from '../../../store/adminPanelTrest/adminPanelTrest.actions';
import {setCurObjAsync} from "../../../store/objs/obj.actions";
import { selectObjCurrObj } from '../../../store/adminPanelTrest/objspages.selectors';


const positionInit  = [55.7796, 37.5118];

let localMap;

const CardYandexMap = ({selectObjCurr, objAdress = 'Зорге, 1',setCurObj}) => {
  // const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(positionInit)

  const handleLoad =  (center) => {
      window.ymaps.ready(['ext.paintOnMap']).then(() => {
          localMap = new window.ymaps.Map('mapYandex', {center: center, zoom: 16}, {
              searchControlProvider: 'yandex#search'
          });

          const circle = new window.ymaps.GeoObject({
              geometry: {
                  type: "Circle",
                  coordinates: center,
                  radius: 30
              },
              // Свойства.
              properties: {
                  hintContent: objAdress,
                  balloonContent: 'поправь меня'
              }
          }, {
              // Опции.
              // Объект можно перетаскивать.
              draggable: true,
              // Цвет и прозрачность заливки.
              fillColor: '#ffff0022',
              // Цвет и прозрачность границ.
              strokeColor: '#3caa3c88',
              // Ширина линии.
              strokeWidth: 7
          })

          circle.events
              .add('mouseenter', function (e) {
                  e.get('target').properties.set('strokeColor', "red");
                  e.get('target').geometry.setRadius(40);
              })
              .add('mouseleave', function (e) {
                  // e.get('target').options.unset('preset');
                  e.get('target').geometry.setRadius(30);
                  // console.log('mouseleave',e.originalEvent.target.events.params.context.geometry._coordinates);
                  // let newName = selectObjCurr.objName + e.originalEvent.target.events.params.context.geometry._coordinates;
                  // let newData = {...setCurObj, objName: newName };
                  // setCurObj(newData)

                  let newCoordinate = e.originalEvent.target.events.params.context.geometry._coordinates;
                  new window.ymaps.geocode(newCoordinate, { results: 1 }).then(function (res) {
                      let firstGeoObject = res.geoObjects.get(0);

                      let nameCurObj = firstGeoObject.properties._data.name;
                      if ( objAdress !== nameCurObj){
                          let newData = {...setCurObj, objName: nameCurObj };
                          setCurObj(newData)
                      }
                  }, function (err) {
                      alert(err.message);
                  });

              });

          localMap.geoObjects.add(circle);

          ///////////
          let paintProcess;

          // Опции многоугольника или линии.
          let styles = [
              {strokeColor: '#ff00ff', strokeOpacity: 0.7, strokeWidth: 3, fillColor: '#ff00ff', fillOpacity: 0.4},
              {strokeColor: '#ff0000', strokeOpacity: 0.6, strokeWidth: 6, fillColor: '#ff0000', fillOpacity: 0.3},
              {strokeColor: '#00ff00', strokeOpacity: 0.5, strokeWidth: 3, fillColor: '#00ff00', fillOpacity: 0.2},
              {strokeColor: '#0000ff', strokeOpacity: 0.8, strokeWidth: 5, fillColor: '#0000ff', fillOpacity: 0.5},
              {strokeColor: '#000000', strokeOpacity: 0.6, strokeWidth: 8, fillColor: '#000000', fillOpacity: 0.3},
          ];

          let currentIndex = 0;

          localMap.events.add('mousedown', function (e) {
              if (e.get('altKey')) {
                  if (currentIndex == styles.length - 1) {
                      currentIndex = 0;
                  } else {
                      currentIndex += 1;
                  }
                  paintProcess = new window.ymaps.ext.paintOnMap(localMap, e, {style: styles[currentIndex]});
              }
          });
          //
          localMap.events.add('mouseup', function (e) {
              if (paintProcess) {
                  let coordinates = paintProcess.finishPaintingAt(e);
                  paintProcess = null;
                  let geoObject =
                      // button.isSelected() ?
                      new window.ymaps.Polyline(coordinates, {}, styles[currentIndex])
              // : new window.ymaps.Polygon([coordinates], {}, styles[currentIndex]);

                  localMap.geoObjects.add(geoObject);
              }
          });


      })

  }


    ////////////////

  useEffect(() => {
    window.ymaps.ready(() => {
    });
  }, [ handleLoad])



    useEffect(() => {
    window.ymaps.ready(() => {
        window.ymaps.geocode(objAdress, { results: 1 }).then(function (res) {
            let firstGeoObject = res.geoObjects.get(0);
            let centerCurObj = firstGeoObject.geometry.getCoordinates();
            if ( position !== centerCurObj){
                setPosition(centerCurObj);
            }
            handleLoad(centerCurObj);
        }, function (err) {
            alert(err.message);
        });
    });
  }, [])


  return (
      <React.Fragment>
        <div id="mapYandex" style={{width: 600, height: 400, border:'1px solid #ff00005e'}} ></div>
      </React.Fragment>

  );
}
 
const mapStateToProps = createStructuredSelector ({
  selectObjCurr: selectObjCurrObj, // события короткие данные для таблицы
});

const mapDispatchToProps = (dispatch) => ({
    setCurObj: (object ) => dispatch(setObjCurrForDetailPageAsync(object )),
});

export default connect(mapStateToProps,mapDispatchToProps)(CardYandexMap);
