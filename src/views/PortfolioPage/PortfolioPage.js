import React from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Folio, Hero } from './components';

const PortfolioPage = ({ portfolio }) => (
  <Main colorInvert={true}>
    <Hero />
    <Container>
      <Folio portfolio={portfolio} />
    </Container>
  </Main>
);

export default PortfolioPage;
