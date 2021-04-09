import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
 
export default function ChipsArray({data}) {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.name !== chipToDelete.name));
  };
  // console.log('data',data);


  React.useEffect(() => {
    setChipData(data);
  },[data])


  if (chipData.length === 0){
    return (<div style={{width:'100%', display:'flex', justifyContent:'center'}}>  <CircularProgress size={34} color="secondary" /> </div>)
  }

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((item, index) => {
        let icon;

        // if (item.label === 'React') {
          icon = <TagFacesIcon  />;
        // }

        return (
          <li key={index}>
            {item.count === 0 ? '':<Chip key={index + item.name} icon={icon} label={item.name + ' (' + item.count + ') '}
                onDelete={item.name === 'React' ? undefined : handleDelete(item)} className={classes.chip}
            />}

          </li>
        );
      })}
    </Paper>
  );
}
