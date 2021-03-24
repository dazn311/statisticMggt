
import React from 'react';
// import { connect } from 'react-redux';

// import { selectEventShortPoints } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 

import ObjPage from './ObjPage';


 
const HistoryPage = ({eventShortPoints}) => {
     
    // console.log('HistoryChanges', eventShortPoints);
    return (
            <ObjPage />
    )
}
 
 
// const mapStateToProps = () => ({
//     eventShortPoints: selectEventShortPoints(),
// });

// export default connect(mapStateToProps)(HistoryPage);
export default HistoryPage;
