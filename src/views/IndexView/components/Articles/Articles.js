import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
const mock = [
  {
    media:
      '/images/outsourcing-in-India-is-it-the-right-decision-for-your-business.png',
    title: '5 Best Practices for Outsourcing IT Projects',
    link: '/blog/5-best-practices-for-outsourcing-it-projects',
    subtitle:
      'The first best practice when outsourcing work for your IT project is to be very clear about what you...',
  },
  {
    media: '/images/top-web-development-trends.png',
    title: '12 Web Development Trends for 2022 and Beyond',
    link: '/blog/12-web-development-trends-for-2022-and-beyond',
    subtitle:
      'The first best practice when outsourcing work for your IT project is to be very clear about what you',
  },
  {
    media: '/images/intrroduction-to-web-development-technologies.jpg',
    title: 'An introduction to Web Development Technologies',
    link: '/blog/an-introduction-to-web-development-technologies',
    subtitle:
      "Now that you know the basics of HTML, CSS, and JavaScript, you're ready to start learning some of the",
  },
  {
    media: '/images/mobile-app-development-for-2021-and-beyond.png',
    title: 'Top 7 Technologies Used For Creating Robust Mobile Apps in 2020',
    link: '/blog/top-7-technologies-used-for-creating-robust-mobile-apps-in-2020',
    subtitle:
      "If you're looking to create a robust mobile app, you'll need to use the right tools and technologies.",
  },
];

const Articles = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Articles
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Browse our popular articles
        </Typography>
        <Box display="flex" justifyContent={'flex-start'} marginTop={2}>
          <Button
            size="large"
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
              border: '1px solid  #0000d3',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#0000a9',
              },
              ['@media (min-width:300px) and (max-width:600px)']: {
                // eslint-disable-line no-useless-computed-key
                width: '140px',
                height: '50px',
                fontSize: '14px',
              },
            }}
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            <Link
              style={{ color: 'white' }}
              underline="none"
              href="/blog"
              component="a"
            >
              {' '}
              View More
            </Link>
          </Button>
        </Box>
      </Box>
      <Box
        data-aos={'fade-up'}
        maxWidth={{ xs: 420, sm: 620, md: 1 }}
        margin={'0 auto'}
      >
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none' }}
                >
                  <Link underline="none" href={item.link} component="a">
                    <CardMedia
                      title={item.title}
                      image={item.media}
                      sx={{
                        position: 'relative',
                        height: { xs: 240, sm: 340, md: 280 },
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component={'svg'}
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1921 273"
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          left: 0,
                          bottom: 0,
                          right: 0,
                          zIndex: 1,
                        }}
                      >
                        <polygon
                          fill={theme.palette.background.paper}
                          points="0,273 1921,273 1921,0 "
                        />
                      </Box>
                    </CardMedia>{' '}
                  </Link>
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      align={'left'}
                      sx={{ fontWeight: 700 }}
                    >
                      <Link underline="none" href={item.link} component="a">
                        {' '}
                        {item.title}{' '}
                      </Link>
                    </Typography>
                    <Typography align={'left'} color={'text.secondary'}>
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Link underline="none" href={item.link} component="a">
                      {' '}
                      <Button>Learn more</Button>{' '}
                    </Link>
                  </CardActions>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Articles;
