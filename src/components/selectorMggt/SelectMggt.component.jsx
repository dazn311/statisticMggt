import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft: window.innerWidth < 500 ? 0 : theme.spacing(2),
    marginRight: window.innerWidth < 500 ? 0 : theme.spacing(2),
    minWidth: 105,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectMggt({caption, defaultVal, valueItems, setType}) {
  const classes = useStyles();
  // const [age, setAge] = React.useState(30);

  const handleChange = (event) => {
    // setAge(event.target.value);
    
      setType(event.target.value);
    
    
  };

  return (
    <div>
       
       <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{caption}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue={defaultVal}
          value={defaultVal}
          onChange={handleChange}
        >
          {valueItems && Object.keys(valueItems).map((key,index) => {
            return <MenuItem value={valueItems[key]}>{key}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}
