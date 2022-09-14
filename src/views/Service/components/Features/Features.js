/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={5}>
            <Typography
              sx={{ textAlign: 'center', fontWeight: 700 }}
              variant={'h4'}
              gutterBottom
            >
              Why Choose Us?
            </Typography>
            <Typography color="text.secondary" variant={'h6'}></Typography>
          </Box>
          <Grid container alignItems={'center'}>
            {[
              'Excellent & Hybrid team',
              'Effective delivery',
              'Quality efforts',
              'Genuineness and commitment',
              'Up to 50% Cost Saving',
              'Source Code Authorization',
              'Non-Disclosure Agreement',
              'No Lock-In Contract',
              'Agile & DevOps Implementation',
              'Clean Code & Architecture',
              'Fast and Easy On-boarding',
              'Total Control Over the Code',
            ].map((item, i) => (
              <Grid
                sx={{
                  ['@media (min-width:300px) and (max-width:500px)']: {
                    marginLeft: '50px',
                  },
                }}
                item
                xs={12}
                md={4}
                lg={4}
                key={i}
              >
                <Box
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth={'auto !important'}
                    marginRight={2}
                  >
                    <Box
                      component={Avatar}
                      bgcolor={theme.palette.secondary.main}
                      width={20}
                      height={20}
                    >
                      <svg
                        width={12}
                        height={12}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <ListItemText primary={item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 450,
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '2.75rem',
              boxShadow: 1,
              width: '75% !important',
              marginX: 'auto',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <PhoneSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'2.4%'}
                left={'4%'}
                width={'92.4%'}
                height={'96%'}
                sx={{
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  src={
                    theme.palette.mode === 'light'
                      ? 'https://assets.maccarianagency.com/screenshots/crypto-mobile.png'
                      : 'https://assets.maccarianagency.com/screenshots/crypto-mobile--dark.png'
                  }
                  alt="Image Description"
                  effect="blur"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'cover',
                    borderRadius: '2.5rem',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Features;
