
import React from 'react';


import { connect } from 'react-redux';

import { setCurrentUser } from '../../../store/user/user.actions';

import { selectCurrentUser } from '../../../store/user/user.selectors';

import  './simpleGraph.styles.scss';

import Header from '../../../components/header/header.component';
import BlockOGH from '../../../components/blockOGH/BlockOGH.component';
 
const SimpleGraph = ({setUser, currentUser}) => {
    // const [auth] = useState(true);

        
     
    console.log(currentUser);
    const setdd = () => {console.log('ss');};
 
    return (
        <div>
            <Header/>
            <div className="content-home">
                <h4>{currentUser ? 'Основная информация': 'Нужна регистрация'}</h4>
                <div onClick={setdd} className="wrap-form">
                    {currentUser ? <BlockOGH/> : 'Тестовые данные'}
                     
                </div>
            </div>
            
        </div>
    )
}
 

const mapDispatchToProps = dispatch => ({
    setUser: item => dispatch(setCurrentUser(item))
  });

  const mapStateToProps = (state) => ({
      currentUser: selectCurrentUser(state),
  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(SimpleGraph);
