/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography component={'span'} variant="h3" sx={{ fontWeight: 700 }}>
          One-stop solutions for{' '}
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'primary'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            Software, Web & Mobile Apps
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color={'text.secondary'}>
        Looking for a professional website design or Software company? Look no
        further than SOFTLIX.
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'space-around'}
        marginTop={4}
      >
        {[
          '/images/logo-1.png',
          '/images/blive.png',
          '/images/theprint.png',
          '/images/midday.png',
        ].map((item, i) => (
          <Box
            maxWidth={300}
            marginTop={2}
            marginRight={4}
            key={i}
            sx={{
              ['@media (min-width:300px) and (max-width:600px)']: {
                // maxWidth: '90vw',
                // display: 'flex',
                marginTop: '0px',
                padding: '20px',
              },
            }}
          >
            <Box
              component="img"
              width={'200px'}
              height={1}
              src={item}
              alt="..."
              sx={{
                ['@media (min-width:300px) and (max-width:600px)']: {
                  // maxWidth: '90vw',
                  width: '100px',
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={2}>
      <Grid item container alignItems={'center'} xs={12} md={12}>
        <Box
          sx={{
            ['@media (min-width:300px) and (max-width:600px)']: {
              display: 'block',
            },
          }}
          // data-aos={isMd ? 'fade-right' : 'fade-left'}
        >
          <LeftSide />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
