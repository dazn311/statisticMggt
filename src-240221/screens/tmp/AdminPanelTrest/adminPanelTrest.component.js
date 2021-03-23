
import React from 'react';
import  './adminPanelTrest.styles.scss';

import Header from '../../../components/header/header.component';
import ListPoints from '../../../components/list-points/list-points.component'
import DetailListPoints from '../../../components/detailPanelTrest/DetailListPoints.component';
import SearchInput from '../../../components/search-elem/Search-elem.component';

const adminPanelTrest = () => {
    return (
        <div>
            <Header/>
            <div className="content-panel">
                <h4>Административная панель</h4>
                <div className="search-wrap"><SearchInput /></div>
                <div className="wrap-form">
                    <ListPoints />
                    <DetailListPoints />
                </div>
            </div>
        </div>
    )
}

export default adminPanelTrest;
