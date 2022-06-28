import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from 'components/Container';

const images = [
  {
    group: [
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img1.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img4.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png',
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img13.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img10.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img7.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png',
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img6.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img24.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img17.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img12.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png',
      },
    ],
  },
];

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '1rem', md: '1.5rem' }}>
        <Container>
          <Grid container>
            <Grid xs={12} md={6}>
              <Typography
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: '3.25rem!important',
                }}
              >
                {/* We Build Software, Websites & Mobile Apps in A  */}
                One-stop solutions for
                <br />{' '}
                <Typography
                  color={'primary'}
                  component={'span'}
                  variant={'inherit'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.3,
                    )} 0%)`,
                  }}
                >
                  <Typed
                    strings={[
                      'Websites',
                      'Android Apps',
                      'IOS Apps',
                      'Softwares',
                    ]}
                    typeSpeed={80}
                    loop={true}
                  />
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ fontWeight: 400 }}
              >
                Looking for a professional website design or Software company?
                Look no further than SOFTLIX Agency. We create beautiful
                websites, Apps, Software using the latest technologies like
                Nextjs, Flutter, React Native & Firebase.
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                marginTop={4}
                sx={{
                  ['@media (min-width:400px)']: {
                    // eslint-disable-line no-useless-computed-key
                    marginBottom: '30px',
                  },
                }}
              >
                <Button
                  component={'a'}
                  // variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#0070f3',
                    width: '200px',
                    borderRadius: '7px',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0,118,255,.9)',
                    },

                    ['@media (min-width:300px) and (max-width:600px)']: {
                      // eslint-disable-line no-useless-computed-key
                      width: '90vw',
                      height: '50px',
                      fontSize: '14px',
                    },
                  }}
                  size="large"
                  fullWidth={isMd ? false : true}
                  href={'/hire-us'}
                >
                  Get Quotation
                </Button>
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                  width={{ xs: '100%', md: 'auto' }}
                >
                  <Button
                    component={'a'}
                    href={'/pricing'}
                    // variant=" "
                    // color="primary"
                    size="large"
                    fullWidth={isMd ? false : true}
                    sx={{
                      background: 'white',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      width: '200px',
                      borderRadius: '7px',
                      color: '#696969',
                      boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,.9)',
                        boxShadow: '0 6px 20px rgb(93 93 93 / 23%)',
                      },
                      ['@media (min-width:300px) and (max-width:600px)']: {
                        // eslint-disable-line no-useless-computed-key
                        width: '90vw',
                        height: '50px',
                        fontSize: '14px',
                      },
                    }}
                  >
                    View Pricing
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                component={LazyLoadImage}
                effect="blur"
                src="/images/home-hero.webp"
                alt="Image Description"
                width={1}
                height={1}
                sx={{
                  marginTop: '-120px',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  ['@media (min-width:300px) and (max-width:1000px)']: {
                    // eslint-disable-line no-useless-computed-key
                    marginTop: '0px',
                  },
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
