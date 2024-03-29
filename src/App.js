import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Courses from './Courses';


function App() {
  return (
    <Container maxWidth="md">
      <Box my={4} align="center">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Курсы английского языка в Алматы
        </Typography>
        <Courses />
      </Box>
    </Container>
  );
}

export default App;
