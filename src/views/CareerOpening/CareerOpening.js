import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Application, Main as MainSection, Newsletter } from './components';
import PortableText from 'react-portable-text';

const CareerOpening = ({ job }) => {
  return (
    <Main>
      <Container>
        <MainSection job={job} />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Application />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default CareerOpening;
