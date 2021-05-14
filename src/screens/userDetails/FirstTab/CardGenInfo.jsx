import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from "@material-ui/core/Divider";

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


// import PopupMenu from "./PopupMenu";

import {formatDateISO} from "../../../hoc/formatDate";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    maxWidth: 612,
    // minWidth: 360
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  divider: {
    height: 2,
    marginTop: 4,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.grey,
  },
}));

export default function CardGenInfo({ curUser, allData }) {
  const [expanded, setExpanded] = React.useState(false); 
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const themess =  useTheme();

  
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if (!curUser) return (<div>loading..</div>);

  const { user_id, user_name, user_shortname, user_status, user_org_id, org_name, user_post, user_role, user_last_seen } = curUser;

  let lastActive = (user_last_seen || '2021-01-01T13:13:13.298Z').split('T')[0];
  lastActive = lastActive.split('-');
  lastActive = lastActive[2] + '/' + lastActive[1] + '/' + lastActive[0];

  // console.log('8989 CardGenInfo curUser', curUser);
  // console.log('8989 CardGenInfo org_name', org_name);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
              </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle} />

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', marginRight: 38 }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Сохранить</MenuItem>
                        <MenuItem onClick={handleClose}>Печать</MenuItem>
                        <MenuItem onClick={handleClose}>Удалить</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </IconButton>
        }
        title={ allData ? allData.user_name : user_name}
        subheader={ allData  ? ('user_id: ' + allData.user_id) : ('user_id: ' + user_id && user_id)}
      />
      {/* <CardMedia
            className={classes.media}
            image="/static/images/avatar/1.png"
            title={user_name}
        /> */}
      <CardContent>
        {/* { user_id, user_name, user_shortname, user_org_id, org_name}  */}
        <Typography variant="body2" color="textSecondary" component="p">
          Пос. активность: <span style={{ color: themess.palette.type === 'dark' && 'white' }} > { allData ? formatDateISO(allData.user_last_seen)  : lastActive}</span>
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Статус: <span style={{ color: themess.palette.type === 'dark' && 'white' }} >{ allData ? allData.user_status :  user_status}</span>
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body2" color="textSecondary" component="p">
          Огранизация: <span style={{ color: themess.palette.type === 'dark' && 'white' }} > { allData ? allData.org_name :  org_name} </span>
          {/* Сотрудник огранизации № {user_org_id}. */}
        </Typography>
        {/*<Typography variant="body2" color="textSecondary" component="p">*/}
        {/*  Вышестоящая огранизация № {user_org_id}.*/}
        {/*</Typography>*/}

        <Typography variant="body2" color="textSecondary" component="p">
          Должность: <span style={{ color: themess.palette.type === 'dark' && 'white' }} > { allData ? allData.user_post :  user_post}</span>
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Роль: <span style={{ color: themess.palette.type === 'dark' && 'white' }} >{ allData ? allData.user_role :  user_role}</span>
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{ color: themess.palette.type === 'dark' && 'white' }} > { allData ? allData.user_tel :  'user_tel'}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{ color: themess.palette.type === 'dark' && 'white' }} > { allData ? allData.user_email : 'user@email'}</span>
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body2" color="textSecondary" component="p">
          Дата рег.:           <span style={{ color: themess.palette.type === 'dark' && 'white' }} > { allData ? formatDateISO(allData.user_reg_date) : '01.01.21'}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Дата окончания рег.: <span style={{ color: themess.palette.type === 'dark' && 'white' }} >{ allData ? formatDateISO(allData.user_end_date)  : '01.01.21'}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon color={'disabled'} />
          </IconButton> */}
        {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="показать.."
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Последние изменения:</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Добавлен в систему
            </Typography>
          <Divider className={classes.divider} />
          <Typography variant="body2" color="textSecondary" component="p">
            Приостановлен.
            </Typography>
          <Divider className={classes.divider} />
          <Typography variant="body2" color="textSecondary" component="p">
            Смена контактов.
            </Typography>
          <Divider className={classes.divider} />
          <Typography variant="body2" color="textSecondary" component="p">
            Изменение в должности
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
