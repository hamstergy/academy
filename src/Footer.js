import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
      bottom: 0,
      left: 0,
      position: 'fixed',
      width: '100%',
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      zIndex: 9999
    }
  });

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      className={classes.root}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
        <BottomNavigationAction label="Просмотры" icon={<RestoreIcon />} value="" component={Link} to="/" />
        <BottomNavigationAction label="Рядом" icon={<LocationOnIcon />} value="near" component={Link} to="/near" />
        <BottomNavigationAction label="Популярные" icon={<FavoriteIcon />} value="featured" component={Link} to="/featured" />
    </BottomNavigation>
  );
}