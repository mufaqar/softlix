/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
const mock = [
  {
    image:
      '/images/outsourcing-in-India-is-it-the-right-decision-for-your-business.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: '5 Best Practices for Outsourcing IT Projects',
    link: '/blog/5-best-practices-for-outsourcing-it-projects',
    author: {
      name: 'Clara Bertoletti',
    },
    date: '03 May',
  },
  {
    image: '/images/top-web-development-trends.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: '12 Web Development Trends for 2022 and Beyond',
    link: '/blog/12-web-development-trends-for-2022-and-beyond',
    author: {
      name: 'Jhon Anderson',
    },
    date: '03 May',
  },
  {
    image: '/images/intrroduction-to-web-development-technologies.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'An introduction to Web Development Technologies',
    link: '/blog/an-introduction-to-web-development-technologies',
    author: {
      name: 'An introduction to Web Development Technologies',
    },
    date: '03 May',
  },
  {
    image: '/images/mobile-app-development-for-2021-and-beyond.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Top 7 Technologies Used For Creating Robust Mobile Apps in 2020',
    link: '/blog/top-7-technologies-used-for-creating-robust-mobile-apps-in-2020',
    author: {
      name: 'Jhon Anderson',
    },
    ddate: '03 May',
  },
  {
    image: '/images/10-tech-trendsthat-will-influence.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: '10 Tech Trends That Will Influence Your Marketing 2022',
    link: '/blog/10-tech-trends-that-will-influence-your-marketing-2022',
    author: {
      name: 'Jhon Anderson',
    },
    date: '03 May',
  },
  {
    image: '/images/how-to-choose-right-dev.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: '5 Tips for Choosing the Right Web Development Company',
    link: '/blog/5-tips-for-choosing-the-right-web-development-company',
    author: {
      name: 'Jhon Anderson',
    },
    ddate: '03 May',
  },
];

const SidebarArticles = ({ latestBlogs }) => {
  console.log(latestBlogs);
  const theme = useTheme();
  return (
    <Box component={Card} variant={'outlined'} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Similar Posts
      </Typography>
      <Grid container spacing={2}>
        {latestBlogs.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              borderRadius={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50%' },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={item.featureImage?.asset.url}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 120,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
              >
                <Typography fontWeight={700}>{item.title}</Typography>
                <Box marginY={1 / 4}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  ></Typography>
                </Box>
                <Link
                  underline="none"
                  href={`blog/${item.slug.current}`}
                  component="a"
                >
                  {' '}
                  <Button size={'small'}>Read More</Button>{' '}
                </Link>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SidebarArticles;
