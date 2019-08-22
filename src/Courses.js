import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
    maxWidth: 560,
    paddingBottom: 80
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  }
}));


export default function Courses() {
  const classes = useStyles();
  const starElements = [{title: 'Образовательный центр РОСТ', desc: 'Сейфуллина, Абая',phone: '+77776292521'},{ title: 'Allin Education', desc: 'Маркова 22/37',phone: '+77776292521'},{title:'GM study - учебный центр', desc: 'ул. Маркова, 43',phone: '+77776292521'},{title:'GM study - учебный центр', desc: 'ул. Маркова, 43',phone: '+77776292521'}];
  const elements = [{title: 'Образовательный центр РОСТ', desc: 'Сейфуллина, Абая',phone: '+77776292521'},{ title: 'Allin Education', desc: 'Маркова 22/37',phone: '+77776292521'},{title:'GM study - учебный центр', desc: 'ул. Маркова, 43'},{title:'GM study - учебный центр', desc: 'ул. Маркова, 43',phone: '+77776292521'}];

  const starItems = starElements.map((item, key) =>
    <ListItem key={key} button>
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
    <ListItemText primary={item.title} 
                  secondary={item.desc}/>
    <ListItemSecondaryAction>
      <IconButton edge="end" href={'tel:'+ item.phone}>
        <PhoneIcon />
      </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
  );
  const items = elements.map((item, key) =>
    <ListItem key={key} button>
    <ListItemText primary={item.title} 
                  secondary={item.desc}/>
    <ListItemSecondaryAction>
      <IconButton edge="end" href={'tel:'+ item.phone}>
        <PhoneIcon />
      </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
  );

  // for (const [index, value] of elements.entries()) {
  //   items.push(
  //     <ListItem key={index} button>
  //       <ListItemIcon>
  //       </ListItemIcon>
  //       <ListItemText primary={value} />
  //     </ListItem>
  //     )
  // }
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {starItems}
      {items}
    </List>
  );
}
