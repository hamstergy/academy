import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
      width: '100%'
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
      <BottomNavigationAction label="Просмотренные" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Популярные" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Рядом" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}