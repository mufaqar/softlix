/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Welcome = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h3"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        We craft beautiful websites and digital products
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        Tell us your project requirements, budget, and timeline,
        <br /> and we will connect you with up to four companies that match your
        needs – all for free.
      </Typography>
    </Box>
  );

  const GridItemPartnersBlock = () => (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {[
            '/images/logo-1.png',
            '/images/blive.png',
            '/images/theprint.png',
            '/images/midday.png'
      ].map((item, i) => (
        <Box maxWidth={145} marginTop={0} marginRight={4} key={i}>
          <Box
            component="img"
            height={1}
            width={1}
            src={item}
            alt="..."
            sx={{
              filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(0.7)'
                  : 'none',
            }}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemPartnersBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
