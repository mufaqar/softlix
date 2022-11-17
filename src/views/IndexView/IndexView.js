/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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
        {/* <Container sx={{ boxShadow: '0px 3px 15px rgba(0,0,0,0.2)' }}>
          <Grid sx={{ padding: '10px' }}>
            <Box
              sx={{
                width: '100%',

                textAlign: 'left',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                flexDirection: 'column',
                ['@media (min-width:300px) and (max-width:1000px)']: {
                  // eslint-disable-line no-useless-computed-key
                  marginTop: '0px',
                },
              }}
            >
              <h5
                style={{
                  margin: '0',
                  color: '#677788',
                  fontSize: '22px',
                  fontWeight: '500',
                }}
              >
                Get in Touch Directly with our Expert for personalised Quotation
                & Free Consultation.
              </h5>
              <Box marginTop={6}>
                <Button
                  variant="text"
                  color="primary"
                  component="a"
                  target="blank"
                  href="tel:+1 929-460-0564"
                  size="medium"
                  sx={{ padding: 0, fontSize: '1.4rem' }}
                >
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  &nbsp;CALL: +1 929-460-0564
                </Button>
              </Box>
              <h3
                style={{
                  marginTop: '20px',
                  color: '#677788',
                  fontSize: '18px',
                  fontWeight: '400',
                }}
              >
                Monday-Sunday, 9 AM- 9 PM
              </h3>
            </Box>
          </Grid>
        </Container> */}

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
