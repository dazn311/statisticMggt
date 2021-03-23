
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import { selectCurrentUser } from '../../store/user/user.selectors'; 

import UsersDashboard from './Users';


 
const AuthDash = ({ match,currentUser}) => {
    const [state] = useState(currentUser);

  
    if (state && state.login !== 'demo') {
        return (<Redirect to="/login" />)
    }

    return (
        <div className='shop-page'>
            console.log('match.path',match.path);
            <Route
            exact
            path={`${match.path}`}
            render={() =>
                
                <UsersDashboard currentUser={currentUser}/>
                
            }
            />
            <Route
            path={`${match.path}/:collectionId`}
            component={UsersDashboard}
            />
      </div>
            // <UsersDashboard currentUser={currentUser}/>
    )
}
 
 

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
});

  export default connect(mapStateToProps)(AuthDash);
