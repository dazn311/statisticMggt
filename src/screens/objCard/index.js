
import React from 'react';
import { useParams } from 'react-router-dom'


// import { connect } from 'react-redux';

// import { selectEventShortPoints } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 

import ObjCard from './ObjCard';


 
const ObjCardPage = ({eventShortPoints, match}) => {
     
    let { idobj } = useParams();

    // console.log('HistoryPage idobj', idobj);
    return (
            <ObjCard idObj={idobj} /> 
            // <div  style={{height:300, backgroundColor:'red'}} >sdfdsf card {match} </div>
            
    )
} 
 
 
// const mapStateToProps = () => ({
//     eventShortPoints: selectEventShortPoints(),
// });

// export default connect(mapStateToProps)(HistoryPage);
export default ObjCardPage;
