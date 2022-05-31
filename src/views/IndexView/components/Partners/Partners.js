import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
const mock = [
  '/images/plogo-1.png',
  '/images/plogo-2.png',
  '/images/plogo-3.png',
  '/images/plogo-4.png',
  '/images/plogo-5.png',
  '/images/plogo-6.png',
  '/images/plogo-7.png',
  '/images/plogo-8.png',
  '/images/plogo-9.png',
];

const Partners = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
    <Box sx={{ backgroundColor: '#f8f8f8', paddingTop:'30px', paddingBottom:'30px'}}>
     <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
                Technologies & Tools Used by Us
              </Typography>
<Box sx={{ paddingTop:'50px', paddingBottom:'50px'}}>
      <Slider {...sliderOpts} >
        {mock.map((item, i) => (
          <Box maxWidth={300} key={i} marginX={3}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
              /*sx={{
                filter: 'brightness(0) invert(1)',
              }}*/
            />
          </Box>
        ))}
      </Slider>
       </Box> 
       </Box> 
    </Box>
  );
};

export default Partners;
