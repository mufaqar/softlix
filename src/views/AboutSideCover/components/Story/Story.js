import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Story = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our story
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: '15px' }}>
              SOFTLIX – <b> An emerging software company in India</b> . We at
              SOFTLIX listen closely to your pain points and resolve your
              complex problems with practical solutions. We always aim for
              building long-term business relationships with our valued clients.
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: '15px' }}>
              We are a team of like-minded software engineers who have creative
              and innovative mindsets. As the need of the hour, every business
              is shifting online. To bridge the gap, we help clients set up
              their online presence so that they can reach the masses. In short,
              we are the tech experts you go to when you need digital
              assistance!
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: '15px' }}>
              Having 10+ years in the market, our seasoned developers and
              designers can give life to your projects. We are passionate about
              creating valuable products and helping other businesses climb the
              ladder of technological development.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
