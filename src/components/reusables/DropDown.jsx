import { useState, Children } from "react";
import PropTypes from 'prop-types'
import { useStore } from "../../Store";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    color: 'white'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: 'white'
  },
}));

export function LocationDropDown({ 
    location, 
    setLocation, 
    locationList,
    buttonLabel = 'Open Select',
    selectLabel = 'Select'
}) {
  const { fetchWeather, dispatch } = useStore();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    if (e.target.value) {
            setLocation(event.target.value);
            // dispatch(fetchWeather(event.target.value));
    }   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const createDropDownItems = (list) => {
    return Children.toArray(
      list.map((location) => <MenuItem value={location.city}>{location.city}</MenuItem>)
    );
  }

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        {buttonLabel}
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{selectLabel}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={location}
          onChange={handleChange}
        >
          {createDropDownItems(locationList)}
        </Select>
      </FormControl>
    </div>
  );
}

LocationDropDown.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  locationList: PropTypes.array.isRequired,
  buttonLabel: PropTypes.string,
  selectLabel: PropTypes.string
};