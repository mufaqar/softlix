/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Ebook,
  Pricing,
  HowItWorks,
  Contact,
  Nike,
  Curology,
  Categories,
  Features2,
  WithHighlightedCard,
  LogoGridSimpleCentered,
  FeaturesWithSimpleIcons,
  Articles,
  PopupWithDiscount,
  FeaturesWithCheckMarksAndAbstractImages,
  Partners,
  Support,
} from './components';

const IndexView = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };
  const theme = useTheme();
  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    // fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });
  return (
    <Box sx={{ overflowX: 'none' }}>
      <Main bgcolor={'background.paper'}>
        <Hero />
        <LogoGridSimpleCentered />

        <Container>
          <Categories />
        </Container>
        <Partners />

        <Container>
          {' '}
          <Features2 />{' '}
        </Container>

        <Container>
          {' '}
          <HowItWorks />{' '}
        </Container>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Support />
          </Container>
        </Box>
        <Container>
          {' '}
          <FeaturesWithCheckMarksAndAbstractImages />{' '}
        </Container>
        <FeaturesWithSimpleIcons />
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="agency__portfolio-item--js-scroll"
        >
          <Box className={'jarallax-img'} sx={styles('/images/freshier.png')} />
          <Container>
            <Nike />
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="agency__portfolio-item--js-scroll"
        >
          <Box
            className={'jarallax-img'}
            sx={styles('/images/sracademy.png')}
          />
          <Container>
            <Curology />
          </Container>
        </Box>
        <Container>
          <WithHighlightedCard />
        </Container>

        {/* <Pricing /> */}
        <Container>
          {' '}
          <Ebook />{' '}
        </Container>
        <Contact />

        <Container>
          <Articles />
        </Container>

        <PopupWithDiscount />
      </Main>
    </Box>
  );
};

export default IndexView;
