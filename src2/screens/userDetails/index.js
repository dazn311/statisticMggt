
import React from 'react';
import { useParams } from 'react-router-dom'


// import { connect } from 'react-redux';

// import { selectEventShortPoints } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 

import UserCard from './UserCard';


 
const UserCardPage = ({match}) => {
     
    let { iduser } = useParams();

    // console.log('8989 HistoryPage iduser & row', iduser);
    console.log('8989 UserCardPage-index match.params.iduser', match.params.iduser);
    return (
            <UserCard idUser={iduser} />
            // <div  style={{height:300, backgroundColor:'red'}} >sdfdsf card {match} </div>
            
    )
} 
 
 
// const mapStateToProps = () => ({
//     eventShortPoints: selectEventShortPoints(),
// });

// export default connect(mapStateToProps)(HistoryPage);
export default UserCardPage;