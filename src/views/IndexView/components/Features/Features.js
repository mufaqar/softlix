/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Problem',
    subtitle:
      'You need a Website, but you\'re not sure how to go about it or where to start.',
    suffix: '+',
  },
  {
    title: 'Agitate',
    subtitle:
      'It can be hard to know where to start when it comes to creating a website. Do you design it yourself or hire a designer? What kind of hosting do you need? How do you make your site stand out from the competition?',
    suffix: '+',
  },
  {
    title: 'Solution',
    subtitle: 'SiteDesign Agency is here to help. We\'ll take care of everything for you, from designing and building your website, to setting up hosting and domain registration, and even creating custom Android apps and software. Plus, our websites are responsive so they look great on any device, and we use the latest technologies so your site will be fast and secure.',
    suffix: '%',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              About Sitedesign Agency
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              We believe in the power of a good idea. We are committed to making great ideas come alive by designing and developing websites, mobile apps, and connected devices that delight our customers. With offices in Brisbane & Sydney we have been helping companies grow their business for 10 years with expertise across web design, app development, online marketing and SEO.
            </Typography>
          </Box>

          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 800 }} variant={'h6'} gutterBottom>
             Problem
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              You need a Website, but you're not sure how to go about it or where to start.            </Typography>
          </Box>

          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 800 }} variant={'h6'} gutterBottom>
             Agitate
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              It can be hard to know where to start when it comes to creating a website. Do you design it yourself or hire a designer? What kind of hosting do you need? How do you make your site stand out from the competition?            </Typography>
          </Box>

          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 800 }} variant={'h6'} gutterBottom>
             Solution
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              SiteDesign Agency is here to help. We'll take care of everything for you, from designing and building your website, to setting up hosting and domain registration, and even creating custom Android apps and software. Plus, our websites are responsive so they look great on any device, and we use the latest technologies so your site will be fast and secure.
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
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
