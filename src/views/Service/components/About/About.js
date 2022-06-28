/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

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
        justifyContent={'flex-start'}
        marginTop={4}
      >
        {[
          '/images/logo-1.png',
          '/images/blive.png',
          '/images/theprint.png',
          '/images/midday.png',
        ].map((item, i) => (
          <Box maxWidth={70} marginTop={2} marginRight={4} key={i}>
            <Box component="img" height={1} width={1} src={item} alt="..." />
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
              transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
              maxWidth: '96%',
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
                <LaptopSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'8.4%'}
                left={'12%'}
                width={'76%'}
                height={'83%'}
                border={`1px solid ${theme.palette.alternate.dark}`}
                zIndex={3}
                sx={{
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  effect="blur"
                  src="/images/service-image.webp"
                  alt="Image Description"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'cover',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box> */}
        <div style={{ width: '100%' }}>
          <Box
            component={LazyLoadImage}
            effect="blur"
            src="/images/service-image.webp"
            alt="Image Description"
            width={1}
            height={1}
            sx={{
              width: '100%',
              height: '450px',
              borderRadius: '10px',
              objectFit: 'cover',
              marginLeft: '40px',
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              ['@media (min-width:300px) and (max-width:600px)']: {
                marginLeft: '0px',
              },
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Hero;
