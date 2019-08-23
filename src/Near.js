import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import json from './courses.json';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Near extends React.Component{
  state = {
    data : json,
    lat: 43.242615699999995,
    lon: 76.83689439999999,
  }
  
  componentDidMount() {
    const lat = parseFloat(localStorage.getItem('latitude')).toFixed(7) ? localStorage.getItem('latitude') : 43.242615699999995;
    const lon = parseFloat(localStorage.getItem('longitude')).toFixed(7) ? localStorage.getItem('longitude') : 76.83689439999999;
    this.setState({ lat,lon });
  }
  
  render() {
    const { data,lat,lon} = this.state;
    const renderList = () => {
      const test = []
      for (var item in data) {
        if (data[item].contacts[0].latitude < parseFloat(lat) + 0.008 && data[item].contacts[0].latitude > parseFloat(lat) - 0.008 &&
           data[item].contacts[0].longitude < parseFloat(lon) + 0.008 && data[item].contacts[0].longitude > parseFloat(lon) - 0.008){
            test.push(data[item]);
        }
      }
      return test
    };
    const starItems = renderList().map((item, key) =>
      <ListItem key={key} button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary={item.name} 
                    secondary={item.contacts[0].streetName}/>
      <ListItemSecondaryAction>
        <IconButton edge="end" href={item.contacts[0].phoneNumbers[0] ? 'tel:'+ item.contacts[0].phoneNumbers[0]: 'tel:+77776292521'}>
          <PhoneIcon />
        </IconButton>
      </ListItemSecondaryAction>
      </ListItem>
    );
    const useStyles = {
      root: {
        margin: 'spacing(6, 0, 3)',
        maxWidth: 560,
        paddingBottom: 80
      }
    };
  return (
    <Container maxWidth="md">
      <Box my={4} align="center">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Курсы английского языка поблизости
        </Typography>
        <List component="nav" style={useStyles.root} aria-label="contacts">
          {starItems}
        </List>
      </Box>
    </Container>
  );
  }
}
export default Near