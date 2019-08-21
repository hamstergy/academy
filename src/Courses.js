import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';




const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
    maxWidth: 560
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

export default function ProTip() {
  const classes = useStyles();
  const starElements = [{title: 'Образовательный центр РОСТ', desc: 'Сейфуллина, Абая'},{ title: 'Allin Education', desc: 'Маркова 22/37'},{title:'GM study - учебный центр', desc: 'ул. Маркова, 43'}];
  // const elements = [{title: 'one'},{ title: 'two'},{title:'three'}];
  const elements = ['Образовательный центр РОСТ','Allin Education','GM study - учебный центр'];

  const starItems = []
  const items = []

  for (const [index, value] of elements.entries()) {
    starItems.push(
      <ListItem key={index} button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary={value} />
      </ListItem>
      )
  }
  for (const [index, value] of elements.entries()) {
    items.push(
      <ListItem key={index} button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary={value} />
      </ListItem>
      )
  }
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {starItems}
      {items}
    </List>
  );
}
