import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Courses from './Courses';
import Footer from './Footer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Все курсы английского языка в Алматы
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}
function Header() {
  return (
    <div></div>
  );
}


function App() {
  return (
    <Container maxWidth="lm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Курсы английского языка в Алматы
        </Typography>
        <Courses />
        <Footer />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
