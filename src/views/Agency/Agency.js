import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import {
  Welcome,
  Goby,
  Process,
  Nike2,
  Larq,
  Nike,
  Trek,
  Curology,
  Reviews,
  Contact,
} from './components';
import { NoSsr } from '@mui/material';

import { Main } from 'layouts';

const mockLeftGrid = [
  {
    image: '../images/fashionindia.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Lorem ipsum dolor sit amet,',
  },
  {
    image: '../images/sracademy.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Consectetur adipiscing elit',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
  //   description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  //   title: 'Labore et dolore magna aliqua',
  // },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
  //   description:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
  //   title: 'Eiusmod tempor incididunt',
  // },
];

const mockMiddleGrid = [
  {
    image: '../images/freshier.png',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
  },
  {
    image: '../images/wookie.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
  //   description:
  //     'On the other hand, we denounce with righteous indignation and dislike',
  //   title: 'Sit voluptatem',
  // },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
  //   description: 'Quos dolores et quas molestias excepturi',
  //   title: 'Accusantium doloremque',
  // },
];

const mockRightGrid = [
  {
    image: '../images/zero.jpg',
    description: 'Et harum quidem rerum facilis est et expedita distinctio',
    title: 'Totam rem aperiam',
  },
  {
    image: '../images/roxia.jpg',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio',
    title: 'Uae ab illo inventore',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
  //   description: 'Itaque earum rerum hic tenetur a sapiente delectus',
  //   title: 'Beatae vitae dicta',
  // },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
  //   description:
  //     'On the other hand, we denounce with righteous indignation and dislike',
  //   title: 'Nemo enim ipsam',
  // },
];

const Column = ({ data }) => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: { xs: 2, sm: 3 },
            '&:last-child': { marginBottom: 0 },
          }}
        >
          <Box
            boxShadow={1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&:hover': {
                '& img': {
                  transform: 'scale(1.2)',
                },
                '& .portfolio-massonry__main-item': {
                  bottom: 0,
                },
              },
              '& .lazy-load-image-loaded': {
                display: 'flex !important',
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={item.image}
              alt="..."
              effect="blur"
              maxHeight={{ xs: 400, sm: 600, md: 1 }}
              sx={{
                transition: 'transform .7s ease !important',
                transform: 'scale(1.0)',
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              position={'absolute'}
              bottom={'-100%'}
              left={0}
              right={0}
              padding={4}
              bgcolor={'background.paper'}
              className={'portfolio-massonry__main-item'}
              sx={{ transition: 'bottom 0.3s ease 0s' }}
            >
              <Box
                component={'svg'}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: 'translateY(-90%)',
                  zIndex: 2,
                  width: 1,
                }}
              >
                <path
                  fill={theme.palette.background.paper}
                  d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                ></path>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
};
// const scrollTo = (id) => {
//   setTimeout(() => {
//     const element = document.querySelector(`#${id}`);
//     if (!element) {
//       return;
//     }

//     window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
//   });
// };

const Agency = () => {
  return (
    <>
      <Main>
        <Container>
          <Welcome />

          <Box marginTop={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Column data={mockLeftGrid} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Column data={mockMiddleGrid} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Column data={mockRightGrid} />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          bgcolor={'alternate.main'}
        >
          <Container>
            <Contact />
          </Container>
        </Box>
      </Main>
    </>
  );
};

export default Agency;
