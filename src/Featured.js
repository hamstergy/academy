import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Footer from './Footer';


function Featured() {
  return (
    <Container maxWidth="md">
      <Box my={4} align="center">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Популярные курсы английского языка в Алматы
        </Typography>
        <Footer />
      </Box>
    </Container>
  );
}

export default Featured;
