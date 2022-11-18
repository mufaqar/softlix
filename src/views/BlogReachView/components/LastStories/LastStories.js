import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

const mock = [
  {
    media:
      '/images/outsourcing-in-India-is-it-the-right-decision-for-your-business.png',
    title: '5 Best Practices for Outsourcing IT Projects',
    link: '/blog/5-best-practices-for-outsourcing-it-projects',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    subtitle:
      'The first best practice when outsourcing work for your IT project is to be very clear about what you...',
  },
  {
    media: '/images/top-web-development-trends.png',
    title: '12 Web Development Trends for 2022 and Beyond',
    link: '/blog/12-web-development-trends-for-2022-and-beyond',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    subtitle:
      'The first best practice when outsourcing work for your IT project is to be very clear about what you',
  },
  {
    media: '/images/intrroduction-to-web-development-technologies.jpg',
    title: 'An introduction to Web Development Technologies',
    link: '/blog/an-introduction-to-web-development-technologies',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    subtitle:
      "Now that you know the basics of HTML, CSS, and JavaScript, you're ready to start learning some of the",
  },
  {
    media: '/images/mobile-app-development-for-2021-and-beyond.png',
    title: 'Top 7 Technologies Used For Creating Robust Mobile Apps in 2020',
    link: '/blog/top-7-technologies-used-for-creating-robust-mobile-apps-in-2020',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    subtitle:
      "If you're looking to create a robust mobile app, you'll need to use the right tools and technologies.",
  },
  {
    media: '/images/10-tech-trendsthat-will-influence.jpg',
    title: '10 Tech Trends That Will Influence Your Marketing 2022',
    link: '/blog/10-tech-trends-that-will-influence-your-marketing-2022',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    subtitle:
      'By 2022, mobile devices will account for nearly 75% of all internet traffic. This means that if your marketing',
  },
  {
    media: '/images/how-to-choose-right-dev.jpeg',
    title: '5 Tips for Choosing the Right Web Development Compan',
    link: '/blog/5-tips-for-choosing-the-right-web-development-company',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    subtitle:
      'In order to find the right web development company, you need to be able to identify the qualities that make a good one.',
  },
];

const LastStories = ({ blog }) => {
  console.log('blog', blog);
  const theme = useTheme();
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Latest stories
          </Typography>
          <Typography color={'text.secondary'}>
            Here’s what we’ve been up to recently.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {blog.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Link href={`blog/${item.slug.current}`}>
              <Box
                component={'a'}
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
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
                  boxShadow={4}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none' }}
                >
                  <CardMedia
                    image={item.featureImage.asset.url}
                    title={item.title}
                    sx={{
                      height: { xs: 300, md: 360 },
                      position: 'relative',
                    }}
                  >
                    <Box
                      component={'svg'}
                      viewBox="0 0 2880 480"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        color: theme.palette.background.paper,
                        transform: 'scale(2)',
                        height: 'auto',
                        width: 1,
                        transformOrigin: 'top center',
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                        fill="currentColor"
                      />
                    </Box>
                  </CardMedia>
                  <Box component={CardContent} position={'relative'}>
                    <Typography variant={'h6'} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastStories;
