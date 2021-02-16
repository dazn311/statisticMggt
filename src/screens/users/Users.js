import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Количество ОГХ</Title>
      <hr color="blue" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h4">
        3.024
      </Typography>
      <Typography component="p"  >
      принадлежащих нам
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h4">
        14.524
      </Typography>
      <Typography component="p"  >
      объектов смежников
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: '4px'}}/>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          Смотреть подробно
        </Link> */}
      </div>
    </React.Fragment>
  );
}
