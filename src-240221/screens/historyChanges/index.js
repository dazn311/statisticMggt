
import React from 'react';
// import { connect } from 'react-redux';

// import { selectEventShortPoints } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 

import HistoryChanges from './HistoryChanges';


 
const HistoryPage = ({eventShortPoints}) => {
     
    // console.log('HistoryChanges', eventShortPoints);
    return (
            <HistoryChanges />
    )
}
 
 
// const mapStateToProps = () => ({
//     eventShortPoints: selectEventShortPoints(),
// });

// export default connect(mapStateToProps)(HistoryPage);
export default HistoryPage;
