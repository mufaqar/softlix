/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  '/images/logo-1.jpg',
  '/images/logo-2.jpg',
  '/images/logo-3.jpg',
  '/images/logo-4.jpg',
  '/images/logo-5.jpg',
];

const Integrations = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item container alignItems={'space-between'} xs={12} md={9}>
          <Divider sx={{ width: 1 }} />
          <Box
            width={1}
            display="flex"
            flexWrap="wrap"
            justifyContent={isMd ? 'space-between' : 'flex-start'}
          >
            {mock.map((item, i) => (
              <Box maxWidth={110} marginTop={2} marginRight={1} key={i}>
                <Box
                  component="img"
                  height={'auto'}
                  width={1}
                  src={item}
                  alt="..."
                  sx={{
                    
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography
              variant={'h1'}
              color={'primary'}
              sx={{ fontWeight: 700 }}
            >
              99%
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              Loved by business and individuals across the globe.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Integrations;
