/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const Ebook = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ overflow: 'hidden' }}>
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
        <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
          <Container>
            <Box
              maxWidth={{ xs: 1, sm: '50%' }}
              sx={{
                ['@media (min-width:350px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key

                  maxWidth: '50%',
                },
              }}
            >
              <Typography
                variant="h3"
                color="red"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  ['@media (min-width:350px) and (max-width:600px)']: {
                    // eslint-disable-line no-useless-computed-key

                    fontSize: '16px',
                  },
                }}
              >
                Download E-book for App Design
                {/* <br /> */}
                Trends in 2022{' '}
              </Typography>
              <Typography
                variant="h3"
                component="p"
                color="text.primary"
                sx={{
                  fontWeight: 700,
                  ['@media (min-width:350px) and (max-width:600px)']: {
                    // eslint-disable-line no-useless-computed-key

                    fontSize: '12px',
                  },
                }}
              >
                It&apos;s the ebook your customers want you to read
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                marginTop={4}
              >
                {/* <Button
                  component={'a'}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  href={'/home'}
                >
                  Download Ebook
                </Button> */}
                <Button
                  component={'a'}
                  // variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#0070f3',
                    width: '14vw',
                    borderRadius: '7px',
                    fontFamily: 'Inter',
                    fontSize: '1rem',
                    padding: '0.7rem 0.8rem',
                    color: 'white',
                    border: '1px solid #0070f3',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(0,118,255,.9)',
                    },
                    ['@media (min-width:320px) and (max-width:600px)']: {
                      // eslint-disable-line no-useless-computed-key
                      width: '35vw',
                      height: '40px',
                      fontSize: '12px',
                      padding: '0.5rem 0.5rem',
                    },
                  }}
                  size="small"
                  // fullWidth={isMd ? false : true}
                  href={'https://ebook.softlix.tech/trends'}
                >
                  Download Ebook
                </Button>
              </Box>
            </Box>
          </Container>
          <Box
            sx={{
              transform: 'rotate(-20deg)',
              display: { xs: '', sm: 'block' },
              ['@media (min-width:320px) and (max-width:800px)']: {
                // eslint-disable-line no-useless-computed-key
                transform: 'rotate(0deg)',
              },
            }}
          >
            <Box
              display={'flex'}
              width={'50rem'}
              left={'50%'}
              top={'-125px'}
              position={'absolute'}
              sx={{
                transform: 'translate3d(20%, -50%, 0)',
                ['@media (min-width:320px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key
                  left: '38%',
                  width: '200px',
                  height: '500px',
                  top: '0px',
                },
              }}
            >
              <Box marginX={1}>
                <Box
                  padding={1}
                  bgcolor={'background.paper'}
                  borderRadius={2}
                  boxShadow={3}
                  marginTop={2}
                >
                  <Box
                    component={'img'}
                    //   src={theme.palette.mode === 'dark' ? g.coverDark : g.cover}
                    src={'/images/ebook.webp'}
                    height={1}
                    width={1}
                    maxWidth={400}
                    sx={{
                      ['@media (min-width:350px) and (max-width:600px)']: {
                        // eslint-disable-line no-useless-computed-key
                        objectFit: 'cover',
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Ebook;
