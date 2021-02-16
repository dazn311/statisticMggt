import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryChange from '@material-ui/icons/History';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuItem from '@material-ui/core/MenuItem';

const MainListItems = ( {location} ) => (
  <div>
    <MenuItem   component={Link} to="/"    selected={location.pathname === '/'}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Главная" />
    </MenuItem>
    <MenuItem  component={Link} to="/ogh"  selected={location.pathname === '/ogh'}>
      <ListItemIcon>
        <HistoryChange />
      </ListItemIcon>
      <ListItemText primary="Таблица ОГХ" />
    </MenuItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Пользователи"  selected={location.pathname === '/ogh'} disabled style={{color:'rgb(0 0 0 / 21%)'}}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Текущая статистика"  selected={location.pathname === '/ogh'} disabled style={{color:'rgb(0 0 0 / 21%)'}}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Управление" selected={location.pathname === '/ogh'} disabled style={{color:'rgb(0 0 0 / 21%)'}}/>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Статистика</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Текущий месяц" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Прошлый квартал" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="От ноября 2020" />
    </ListItem>
  </div>
);

export default withRouter(MainListItems);