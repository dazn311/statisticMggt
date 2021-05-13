import React  from 'react';
import Typography from '@material-ui/core/Typography';  
import Link from '@material-ui/core/Link'; 

import {formatDateISO} from '../../hoc/formatDate'
export default function Copyright() {
    const newDate = new Date().toLocaleDateString() + ' (' + new Date().getHours() + ':' + new Date().getMinutes() + ')';

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mggt.ru/"> 
          МосГеоТрест
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}   <span style={{color:'grey'}} >build: {newDate}</span>
      </Typography>
    );
  }