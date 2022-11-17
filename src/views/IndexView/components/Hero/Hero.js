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
        backgroundColor: 'white',
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box
        sx={{ backgroundColor: 'white' }}
        paddingY={{ xs: 0, sm: '1rem', md: '1.5rem' }}
      >
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
                  ['@media (min-width:300px) and (max-width:600px)']: {
                    fontSize: '2.3rem!important',
                  },
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
                      // 'IT services',
                      // 'Enterprise Software',
                      // 'Mobile Apps',
                      // 'Digital Marketing',
                      // 'AI Softwares',
                      'Software Development',
                      'Mobile Apps',
                      'Digital Marketing',
                      'IT Services',
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
                SOFTLIX™ is the global Leading IT Solutions Company which Create
                Enterprise Software, Mobile Application, Cloud Migration, IOT,
                AI/ML Software, Blockchain, Online Marketing and Digital
                Transformation.
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
                    backgroundColor: ' #0000d3',
                    width: '200px',
                    borderRadius: '7px',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#0000a9',
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
                    // href={'/pricing'}
                    target="blank"
                    href="tel:+1 929-460-0564"
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
                      color: '#0000d3',
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
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    &nbsp; Click to call
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
                  backgroundColor: 'white',
                  marginTop: '-120px',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  ['@media (min-width:300px) and (max-width:1000px)']: {
                    // eslint-disable-line no-useless-computed-key
                    marginTop: '10px',
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
